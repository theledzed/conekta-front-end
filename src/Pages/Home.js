import React from 'react'
import { Table } from 'antd'

export const Home = props => {
  return (
    <div>
      <p className='titleSection'>Payments</p>
      <Table dataSource={props.dataSource} columns={props.columns} />
    </div>
  )
}
