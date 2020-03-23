/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { ContentCard } from "../Layout/Content/styles";
import { PAYMENT_DETAIL } from "../Layout/Content/Constants";
import { Card } from "../Card/Card";
import { money } from "../../Utils/Format";
import { Tabs } from "../Tabs/Tabs";
import { Table } from "antd";
import { PAYMENT_ATTEMPS } from "../Layout/Content/Constants";
import "./DataPaymentDetails.css"
import { Tags } from '../Tag/Tag'
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

export const DataPaymentDetails = props => {
  const PaymentStatus = PAYMENT_DETAIL.data.payment;
  const PaymentMethod = PaymentStatus.nested_charges;
  const CustomerInformation = PaymentStatus.customer;
  const [idSection, setIdSection] = useState(2);

  const columns = [
    {
      title: "Date",
      dataIndex: "created",
      key: "2",
      sorter: (a, b) => a.created - b.created,
      sortDirections: ["descend"]
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "3",
      align: "center",
      render: status => {
        return (
          <Tags status={status} />
        );
      },
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend"]
    },
    {
      title: "Payment method",
      dataIndex: "type",
      key: "4",
      align: "center",
      render: (type, data) => {
        return (
          <div className="paymentMethodBrand">
            <p>{type}</p>
            {
              data.brand === "visa" ?
                <div className="visa"/>
                :
                <div className="americanExpress"/>
            }
          </div>
        );
      },
      sorter: (a, b) => {
        if (a.type && b.type) {
          a.type.length - b.type.length;
        }
      },
      sortDirections: ["descend"]
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "6",
      align: "center",
      sorter: (a, b) => a.created - b.created,
      sortDirections: ["descend"],
      render: amount => {
        return <span className="amountTab">{money.format(amount)}</span>;
      }
    }
  ];

  return (
    <ContentCard className="containerCardsPaymentDetails">
      <div className="cardsFlexColumn" >
      <div className="mainContainerCards">
        <Card Title="Payment status" className="paymentStatusCard">
          <div className="amountInformationContainer">
            <div>
              <p className="subtitle">Amount:</p>
              <p className="amount">{money.format(PaymentStatus.amount)} </p>
            </div>
            <div>
              <p className="subtitle">Created At: <span>{PaymentStatus.created}</span> </p>
              <p className="subtitle"> Paid At: {PaymentStatus.paid_at || "Not paid yet"}</p>
            </div>
          </div>

          <div className="tagStatusContainer">
            {PaymentStatus.status}{" "}
            {PaymentStatus.failure === "insufficient_funds"
              ? PaymentMethod[0].failure_message
              : ""}
          </div>

          <div className="amountInformationContainer">
            <div>
              <p className="subtitle">Order id:</p>
              <p className="value">{props.idPayment} </p>
            </div>
            <div className="viewsContainer">
              <p className="viewSelected">View transfer </p>
              <p>View chargebarck </p>
            </div>
          </div>
        </Card>
        <Card Title="Client" className="clientCard">
          <div>
            <div className="textIcon">
              <UserOutlined />
              <p className="subtitle">Name:</p>
            </div>
            <p className="value">{CustomerInformation.name}</p>
          </div>
          <div>
            <div className="textIcon">
              <MailOutlined />
            <p className="subtitle">Email:</p>
            </div>
            <p className="value">{CustomerInformation.email}</p>
          </div>
          <div>
            <div className="textIcon">
              <PhoneOutlined />
            <p className="subtitle">Phone number:</p>
            </div>
            <p className="value">{CustomerInformation.phone}</p>
          </div>
        </Card>
        <Card Title="Payment method" className="paymentMethodCard">
          <div className="amountInformationContainer">
            <div>
              <p>{PaymentMethod[0].payment_method.bank}</p>
            </div>
            <div className="cardBrandContainer">
              {
                PaymentMethod[0].payment_method.brand === "visa" ?
                  <div className="visa"/>
                  :
                  <div className="americanExpress"/>
              }
              <p> {PaymentMethod[0].payment_method.type} </p>
            </div>
          </div>
          <div className="footerInformationPaymentMethod">
            <div>
              <div className="centeredInformationFooter">
                <p>{`···· ···· ···· ${PaymentMethod[0].payment_method.last4}`}</p>
                <p>{PaymentMethod[0].payment_method.name}</p>
              </div>
            </div>
            <div className="leftPositionInformationFooter">
              <p>
                Expiration Date:{" "}
                {`${PaymentMethod[0].payment_method.exp_month} / ${PaymentMethod[0].payment_method.exp_year}`}{" "}
              </p>
              <p>
                Authorization Code: {PaymentMethod[0].payment_method.auth_code}{" "}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Tabs
        sectionsTabs={[
          { name: "Payment Attemps", id: 1 },
          { name: "Refunds", id: 2 },
          { name: "Notifications", id: 3 }
        ]}
        onClickSection={idSection => {
          setIdSection(idSection);
        }}
        active={1}
        className="innerTabs"
      >
        <Table dataSource={PAYMENT_ATTEMPS} columns={columns} />
      </Tabs>
      </div>
    </ContentCard>
  );
};
