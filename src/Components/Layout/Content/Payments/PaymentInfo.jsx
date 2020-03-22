import React, { useState, useEffect } from 'react'
import { number, string, func } from 'prop-types'
import './PaymentInfo.css'
import { money } from '../../../../Utils/Format'


const PaymentInfo = ({ date, status, paymentType, customer, amount, visible }) => {
  const [, set] = useState()
  return (
    <div className="paymentInfoContainer">
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>
        <p>{customer.name}</p>
        <p>{customer.email}</p>
      </div>
      <p>{money(amount)}</p>
    </div>
  )
}
PaymentInfo.propTypes = {
  date: string,
  status: string,
  paymentType: string,
  customer: shape({}),
  amount: number,
  visible: bool
}
PaymentInfo.defaultProps = {}
export default PaymentInfo
