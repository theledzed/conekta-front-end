/* eslint-disable no-fallthrough */
import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { ExclamationCircleOutlined, RollbackOutlined, RetweetOutlined, CheckCircleOutlined } from '@ant-design/icons'

export const Tags = props => {
  const [classNameTag, setClasNameTag] = useState('')
  const [iconRender, setIconRender] = useState(null)
  const [labelTag, setLabelTag] = useState('')

  useEffect(() => {
    if (props.status === 'declined') {
      setClasNameTag('declined')
      setLabelTag('Declined')
      setIconRender(<ExclamationCircleOutlined />)
    } else if (props.status === 'refunded') {
      setClasNameTag('totalRefund')
      setLabelTag('Total Refund')
      setIconRender(<RollbackOutlined />)
    } else if (props.status === 'no_charge') {
      setClasNameTag('paymentUnattemped')
      setIconRender(<ExclamationCircleOutlined />)
      setLabelTag('Payment Unattemped')
    } else if (props.status === 'partially_refunded') {
      setClasNameTag('partiallyRefunded')
      setIconRender(<RetweetOutlined />)
      setLabelTag('Partially_refunded')
    } else if (props.status === 'paid') {
      setClasNameTag('paid')
      setIconRender(<CheckCircleOutlined />)
      setLabelTag('Paid')
    }
  }, [props.status])

  return (
    <div className={classNames(classNameTag, 'tag')}>
      <p>
        {' '}
        {labelTag}{' '}
        {iconRender}{' '}
      </p>
    </div>
  )
}
