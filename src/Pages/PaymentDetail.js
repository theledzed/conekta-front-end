import React, { useState } from 'react'
import { Tabs } from '../Components/Tabs/Tabs'
import { DataPaymentDetails } from '../Components/DataPaymentDetails/DataPaymentDetails'
import { Breakdown } from '../Components/Breakdown/Breakdown'

export const PaymentDetail = props => {
  const [idSection, setIdSection] = useState(1)

  return (
    <div>
      <p className='titleSection'>Payment Details</p>
      <Tabs
        sectionsTabs={[
          { name: 'Data', id: 1 },
          { name: 'Breakdown', id: 2 }
        ]}
        onClickSection={idSection => {
          setIdSection(idSection)
        }}
        active={idSection}
        className='mainTabs'
      >
        {idSection === 1 ? (
          <DataPaymentDetails idPayment={props.idPayment} />
        ) : (
          <Breakdown data={props.data} />
        )}
      </Tabs>
    </div>
  )
}
