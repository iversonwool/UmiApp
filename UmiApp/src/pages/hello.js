import React, { Component } from 'react';
import { Table, Button, Space } from 'antd';

let i = 2;

function reducer(state = [], action) {
  const { payload, type } = action;

  switch (type) {
    case 'c':
      return [
        ...state,
        {
          id: i++,
          ...payload,
        },
      ];
    case 'u':
      return state.map((item) => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });

    case 'd':
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
}

const initialState = [
  { id: 0, a: '睡了多久啊发', b: 'dalfasj' },
  { id: 1, a: 'fdjafjdls;ajf;ds', b: 'kdjksjfakdsj' },
];

function Hello() {
  const [dataSource, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div style={{ backgroundColor: '#987', padding: 10 }}>
      <Space style={{ padding: '0 0 5px' }}>
        <Button
          onClick={() => {
            dispatch({
              type: 'c',
              payload: { a: '新增的数据', b: '零三零三零三零' },
            });
          }}
        >
          CREATE
        </Button>
        <Button
          onClick={() => {
            dispatch({
              type: 'u',
              payload: { id: 1, a: '我是新改的', b: '我是新改的' },
            });
          }}
        >
          UPDATE 第二条数据
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: 'd', payload: { id: 0 } });
          }}
        >
          DELETE 第一条数据
        </Button>
      </Space>
      <Table
        style={{ backgroundColor: '#fff' }}
        columns={[
          { title: 'Name', dataIndex: 'a' },
          { title: 'Email', dataIndex: 'b' },
        ]}
        dataSource={dataSource}
        rowKey="id"
        // rowSelection={{
        //   // selectedRowKeys: ['1'],
        //   type: 'radio',
        //   onChange(selectedRowKeys, selectedRows) {
        //     console.log('-', selectedRowKeys, selectedRows)
        //   },
        //   selectedRowKeys: []
        // }}
      />
    </div>
  );
}

export default Hello;
