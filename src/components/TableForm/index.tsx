import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface TableData<T> {
  columns: ColumnsType<T>;
  data: T[];
  onChange: TableProps<T>['onChange'];
}


const TableForm = <T extends Record<string, any>>(props: TableData<T>) =>
  <Table columns={props.columns} dataSource={props.data} onChange={props.onChange} />;

export default TableForm;