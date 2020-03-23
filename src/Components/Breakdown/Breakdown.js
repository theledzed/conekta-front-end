/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import "./Breakdown.css"

import { money } from '../../Utils/Format';

export const Breakdown = props => {
  const columns = [
    {
      title: 'SKU',
      dataIndex: '',
      key: '1'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: '2'
    },
    {
      title: 'Articles',
      dataIndex: 'name',
      key: '3',
      align: 'center'
    },
    {
      title: 'Taxes ',
      dataIndex: '',
      key: '4',
      align: 'center'
    },
    {
      title: 'Shipping',
      dataIndex: '',
      key: '5',
      align: 'center'
    },
    {
      title: 'Discounts',
      dataIndex: '',
      key: '6',
      align: 'center'
    },
    {
      title: 'Unit Price',
      dataIndex: 'unit_price',
      key: '6',
      align: 'center',
      render: amount => {
        return <span>{money.format(amount)}</span>;
      }
    }
  ];

  return (
    <div>
      <div>
        <Table pagination={false} dataSource={props.data} columns={columns} />
        <div className="breakdownFooter">
          <div className='rowsContainer'>
            <div className='rowContainer'>
              <p className="breakdownSubtitle">Subtotal</p> <p className="breakdownValue">93.74</p>
            </div>
            <div className='rowContainer'>
              <p className="breakdownSubtitle">Feee</p> <p className="breakdownValue">6.26</p>
            </div>
            <div className='rowContainer'>
              <p className="breakdownTotalTitle">Total</p> <p className="breakdownTotal">$100.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
