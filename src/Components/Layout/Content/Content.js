/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { Container, CardContainer, ContentCard } from "./styles";
import { Header } from "../Header/Header";
import { PAYMENTS, PAYMENT_DETAIL } from "./Constants";
import { Table } from "antd";
import "antd/dist/antd.css";
import { Card } from "../../Card/Card";
import { money } from "../../../Utils/Format";
import { DataPaymentDetails } from "../../DataPaymentDetails/DataPaymentDetails";
import { Tabs } from "../../Tabs/Tabs";
import { Tags } from "../../Tag/Tag";
import { EyeOutlined } from "@ant-design/icons";
import { Breakdown } from "../../Breakdown/Breakdown"
import "./Content.css"

export const Content = props => {
  const [openDetail, setOpenDetail] = useState(false);
  const [idPayment, setIdPayment] = useState("");
  const [idSection, setIdSection] = useState(1);

  const PaymentStatus = PAYMENT_DETAIL.data.payment;
  const PaymentMethod = PaymentStatus.nested_charges;
  const CustomerInformation = PaymentStatus.customer;

  const columns = [
    {
      title: "",
      dataIndex: "icon",
      key: "1",
      render: (icon, dataPayment) => (
        <EyeOutlined
          onClick={() => {
            setOpenDetail(!openDetail);
            setIdPayment(dataPayment.id);
          }}
        />
      )
    },
    {
      title: "Date",
      dataIndex: "created",
      key: "2",
      sorter: (a, b) => a.created - b.created,
      sortDirections: ["descend"]
    },
    {
      title: "Payment status",
      dataIndex: "status",
      key: "3",
      align: "center",
      render: (status, data) => {
        return (
          <span className="tagContainer">
            <Tags status={status} />
            <p>{data.failure}</p>
          </span>
        );
      },
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend"]
    },
    {
      title: "Payment type",
      dataIndex: "type",
      key: "4",
      align: "center",
      render: (type, data) => {
        return (
          <div>
            <div className="paymentMethodBrand">
              <p>{type}</p>
              {
                data.brand === "visa" ?
                  <div className="visa"/>
                  :
                  <div className="americanExpress"/>
              }
            </div>
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
      title: "Customer",
      dataIndex: "customer",
      key: "5",
      align: "center",
      render: customer => {
        const Name = customer.name;
        const Email = customer.email;
        return (
          <div>
            <p>{Name}</p>
            <p>{Email}</p>
          </div>
        );
      },
      sorter: (a, b) => a.customer.length - b.customer.length,
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
        return <span>{money.format(amount)}</span>;
      }
    }
  ];

  return (
    <div className="mainContent">
      <Header />
      <ContentCard>
        {openDetail ? (
          <div>
            <Tabs
              sectionsTabs={[
                { name: "Data", id: 1 },
                { name: "Breakdown", id: 2 }
              ]}
              onClickSection={idSection => {
                setIdSection(idSection);
              }}
              active={idSection}
              className="mainTabs"
            >
              {idSection === 1 ? (
                <DataPaymentDetails idPayment={idPayment} />
              ) : (
                <Breakdown data={PaymentStatus.line_items} />
              )}
            </Tabs>
          </div>
        ) : (
          <CardContainer>
            <Table dataSource={PAYMENTS} columns={columns} />
          </CardContainer>
        )}
      </ContentCard>
    </div>
  );
};
