import React, { Component } from 'react';
import { Table } from 'antd';

class Hello extends Component {
  render() {
    return (
      <div>
        <Table
          columns={[
            { title: 'A', dataIndex: 'a' },
            { title: 'B', dataIndex: 'b' },
          ]}
          dataSource={[
            { a: 'dkdkdkdkdkdk', b: 'ddddd', id: '1' },
            { a: 'dkdkdkdkdkddkdjkfjasfjdsakjfj', b: 'b', id: '2' },
          ]}
          rowKey="id"
          rowSelection={{
            // selectedRowKeys: ['1'],
            type: 'radio',
            onChange(selectedRowKeys, selectedRows) {
              console.log('-', selectedRowKeys, selectedRows)
            },
            selectedRowKeys: []
          }}
          
        />
      </div>
    );
  }
}

export default Hello;
