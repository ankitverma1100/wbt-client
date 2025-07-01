/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, DatePicker, Radio, Row, Table } from "antd";
import dayjs from "dayjs";
import "./style.scss";

const { RangePicker } = DatePicker;

const Statement = () => {
  const dateFormat = "YYYY/MM/DD";
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      onCell: () => ({
        className: "llll gx-text-nowrap",
      }),
      onHeaderCell: () => ({
        className: "llll gx-text-nowrap fs-light",
      }),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      onCell: () => ({
        className: "llll gx-text-nowrap",
      }),
      onHeaderCell: () => ({
        className: "llll gx-text-nowrap fs-light",
      }),
    },
    {
      title: "CREDIT",
      dataIndex: "credit",
      key: "credit",
      onCell: () => ({
        className: "llll gx-text-nowrap",
      }),
      onHeaderCell: () => ({
        className: "llll gx-text-nowrap fs-light",
      }),
      render: (text:any) => (
        <span
          style={{ color: text > 0 ? "blue" : "inherit", fontWeight: "bold" }}>
          {text}
        </span>
      ),
    },
    {
      title: "DEBIT",
      dataIndex: "debit",
      key: "debit",
      onCell: () => ({
        className: "llll gx-text-nowrap",
      }),
      onHeaderCell: () => ({
        className: "llll gx-text-nowrap fs-light",
      }),
      render: (text: any) => (
        <span
          style={{ color: text > 0 ? "red" : "inherit", fontWeight: "bold" }}>
          {text}
        </span>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      onCell: () => ({
        className: "llll gx-text-nowrap",
      }),
      onHeaderCell: () => ({
        className: "llll gx-text-nowrap fs-light",
      }),
      render: (text:any) => <span style={{ fontWeight: "bold" }}>{text}</span>,
    },
  ];

  const data = [
    {
      key: "1",
      date: "29 Jun 25",
      description:
        "Coins withdraw from 197 to 0 AND Received From agemas (A10285) by MA5873-(King)",
      credit: 0,
      debit: 197,
      balance: 0,
    },
    {
      key: "2",
      date: "28 Jun 25",
      description: "(Sri Lanka v Bangladesh) bookmaker Odds (Loss)",
      credit: 0,
      debit: 3,
      balance: 197,
    },
    {
      key: "3",
      date: "26 Jun 25",
      description: "(15 OVER RUN SL) Loss",
      credit: 0,
      debit: 100,
      balance: 200,
    },
    {
      key: "4",
      date: "26 Jun 25",
      description: "(10 OVER RUNS SL(SL VS BAN)ADV) Win",
      credit: 100,
      debit: 0,
      balance: 300,
    },
    {
      key: "5",
      date: "26 Jun 25",
      description: "(5 OVER RUNS SL(SL VS BAN)ADV) Loss",
      credit: 0,
      debit: 100,
      balance: 200,
    },
    {
      key: "6",
      date: "26 Jun 25",
      description:
        "Coins deposit from 0 to 200 AND Received From agemas (A10285) by MA5873-(King)",
      credit: 200,
      debit: 0,
      balance: 300,
    },
    {
      key: "7",
      date: "12 Jun 25",
      description:
        "Diamond CasinoBet For lucky7eu Of (107250612120331) for player LOW Card",
      credit: 0,
      debit: 100,
      balance: 100,
    },
    {
      key: "8",
      date: "12 Jun 25",
      description:
        "Coins deposit from 180 to 200 AND Received From agemas (A10285) by MA5873-(King)",
      credit: 20,
      debit: 0,
      balance: 200,
    },
    {
      key: "9",
      date: "12 Jun 25",
      description:
        "Coins withdraw from 190 to 180 AND Received From agemas (A10285) by MA5873-(King)",
      credit: 0,
      debit: 10,
      balance: 180,
    },
    {
      key: "10",
      date: "12 Jun 25",
      description:
        "Coins withdraw from 200 to 190 AND Received From agemas (A10285) by MA5873-(King)",
      credit: 0,
      debit: 10,
      balance: 190,
    },
    {
      key: "11",
      date: "12 Jun 25",
      description:
        "Coins deposit from 0 to 200 AND Received From agemas (A10285) by A10285-(agemas)",
      credit: 200,
      debit: 0,
      balance: 200,
    },
  ];
  return (
    <div
      className="gx-main-content-wrapper accstatement"
      style={{ marginBottom: 120 }}>
      <Row justify="center">
        <Col className="gx-col-full" xs={24} sm={16}>
          <div className="gx-py-2 gx-bg-grey gx-bg-flex gx-justify-content-center gx-text-white gx-w-100">
            MY ACCOUNT STATEMENT (11)
          </div>
          <Row
            justify="space-between"
            align="middle"
            className="gx-bg-flex gx-w-100 gx-py-1">
            <Col sm={8} xs={24} className="gx-mt-3 gx-py-md-0 gx-py-2 gx-px-4 ">
              <RangePicker
                defaultValue={[
                  dayjs("2015/01/01", dateFormat),
                  dayjs("2015/01/01", dateFormat),
                ]}
                format={dateFormat}
              />
            </Col>
            <Col
              xs={24}
              sm={12}
              className="gx-text-white  gx-fs-lg gx-py-md-0 gx-py-2 gx-font-weight-bold gx-bg-flex gx-align-items-center gx-justify-content-start  ">
              <Radio.Group className="gx-bg-flex gx-w-100 gx-py- gx-my-0 gx-align-items-center gx-justify-content-center ">
                <Radio className="gx-bg-dark gx-text-white gx-py- gx-my-0 gx-m-0 ml-1">
                  All
                </Radio>
                <Radio className="gx-bg-primary gx-text-white gx-py- gx-my-0 ml-1">
                  P&L
                </Radio>
                <Radio className="gx-bg-primary gx-text-white gx-py- gx-my-0">
                  Account
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={false}
            scroll={{ x: "max-content" }}
          />
          <ul className="ant-pagination gx-mt-3">
            <li
              title="Previous Page"
              className="ant-pagination-prev ant-pagination-disabled"
              aria-disabled="true">
              <a className="gx-px-2 gx-fs-sm gx-py-2 gx-bg-white gx-border gx-border-info">
                Prev
              </a>
            </li>
            <li
              className="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
              tabIndex={0}>
              <a rel="nofollow">1</a>
            </li>
            <li
              title="Next Page"
              className="ant-pagination-next ant-pagination-disabled"
              aria-disabled="true">
              <a className="gx-px-2 gx-fs-sm gx-py-2 gx-border gx-bg-white gx-border-info">
                Next
              </a>
            </li>
          </ul>
          <div className="gx-py-4">
            <a href="/main/dashboard/">
              <div className="gx-bg-grey gx-py-1 gx-text-white gx-font-weight-semi gx-bg-flex gx-justify-content-center">
                BACK TO MAIN MENU
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Statement;
