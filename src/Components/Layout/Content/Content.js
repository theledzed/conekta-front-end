/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import { ContentCard } from './styles'
import { Header } from '../Header/Header'
import { PAYMENTS, PAYMENT_DETAIL } from './Constants'
import { money } from '../../../Utils/Format'
import { Tags } from '../../Tag/Tag'
import { EyeOutlined } from '@ant-design/icons'
import { PaymentDetail } from '../../../Pages/PaymentDetail'
import { Home } from '../../../Pages/Home'
import { Router, Link } from '@reach/router'
import './Content.css'
import 'antd/dist/antd.css'

export const Content = props => {
  const [openDetail, setOpenDetail] = useState(false)
  const [idPayment, setIdPayment] = useState('')

  const PaymentStatus = PAYMENT_DETAIL.data.payment

  const columns = [
    {
      title: '',
      dataIndex: 'icon',
      key: '1',
      render: (icon, dataPayment) => (
        <Link to={`/detail/${dataPayment.id}`}>
          <EyeOutlined
            onClick={() => {
              setOpenDetail(!openDetail)
              setIdPayment(dataPayment.id)
            }}
          />
        </Link>
      )
    },
    {
      title: 'Date',
      dataIndex: 'created',
      key: '2',
      sorter: (a, b) => a.created - b.created,
      sortDirections: ['descend']
    },
    {
      title: 'Payment status',
      dataIndex: 'status',
      key: '3',
      align: 'center',
      render: (status, data) => {
        return (
          <span className='tagContainer'>
            <Tags status={status} />
            <p>{data.failure}</p>
          </span>
        )
      },
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ['descend']
    },
    {
      title: 'Payment type',
      dataIndex: 'type',
      key: '4',
      align: 'center',
      render: (type, data) => {
        return (
          <div>
            <div className='paymentMethodBrand'>
              <p>{type}</p>
              {data.brand === 'visa' ? (
                <div className='visa' />
              ) : (
                <div className='americanExpress' />
              )}
            </div>
          </div>
        )
      },
      sorter: (a, b) => {
        if (a.type && b.type) {
          a.type.length - b.type.length
        }
      },
      sortDirections: ['descend']
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: '5',
      align: 'center',
      render: customer => {
        const Name = customer.name
        const Email = customer.email
        return (
          <div>
            <p>{Name}</p>
            <p>{Email}</p>
          </div>
        )
      },
      sorter: (a, b) => a.customer.length - b.customer.length,
      sortDirections: ['descend']
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: '6',
      align: 'center',
      sorter: (a, b) => a.created - b.created,
      sortDirections: ['descend'],
      render: amount => {
        return <span>{money.format(amount)}</span>
      }
    }
  ]

  return (
    <div className='mainContent'>
      <Header />
      <div>
        <Router>
          <PaymentDetail
            path='/detail/:id'
            data={PaymentStatus.line_items}
            idPayment={idPayment}
          />
          <Home path='/' dataSource={PAYMENTS} columns={columns} />
        </Router>
      </div>
    </div>
  )
}
