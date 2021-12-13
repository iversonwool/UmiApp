import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
// import arrayMove from 'array-move';

const SortableItem2 = SortableElement(({ text }) => {
  return <span style={{padding: 10}}>{text}</span>;
});

const SortableList2 = SortableContainer(({ sonTags }) => {
  return (
    <span>
      {sonTags.map((e) => (
        <SortableItem2 key={e.id} index={Number(e.id)} text={e.tagName} />
      ))}
    </span>
  );
});

const SortableItem1 = SortableElement(({ value }) => {
  function onSortEnd({ oldIndex, newIndex }) {
    console.log('--', oldIndex, newIndex);
  }
  return (
    <div>
      <span>{value.tagName}</span>
      <SortableList2 sonTags={value.sonTags} onSortEnd={onSortEnd} />
    </div>
  );
});

const SortableList1 = SortableContainer((props) => {
  console.log('-props-', props);
  return (
    <div>
      {props.items.map((value, index) => (
        <SortableItem1 key={`item-${value.id}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SortableComponent extends Component {
  state = {
    items: [
      {
        id: '1',
        tagName: 'chelianwang',
        sonTags: [{ id: '11', tagName: 'llll'}, {id: '12', tagName: 'ddddd' }],
      },
      {
        id: '2',
        tagName: '杀杀杀',
        sonTags: [{ id: '21', tagName: '杀杀杀000' }],
      },
    ],
  };
  onSortEnd = (props) => {
    this.setState(({items}) => ({
      items: arrayMove(items, props.oldIndex, props.newIndex),
    }));
    console.log('--', props);
  };
  render() {
    return (
      <SortableList1 items={this.state.items} onSortEnd={this.onSortEnd} />
    );
  }
}

export default SortableComponent;
