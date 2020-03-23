import React from "react";
import { Table } from "antd";

export const Home = props => {
  return (
    <div className="mainContentPayment">
        <p className="titleSection">Payments</p>
      <div className="tableContainerPayments">
        <Table dataSource={props.dataSource} columns={props.columns} />
      </div>
    </div>
  );
};
