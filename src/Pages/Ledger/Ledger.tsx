/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row, Table } from "antd";
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Link } from "react-router-dom";

const Ledger = () => {
  const columns = [
    {
      title: "DESCRIPTION",
      dataIndex: "description",
      key: "description",
      onCell: () => ({
        className: "llll text-center",
      }),
      onHeaderCell: () => ({
        className: "llll text-center  fs-light",
      }),
    },
    {
      title: "WON BY",
      dataIndex: "won",
      key: "won",
      onCell: () => ({
        className: "llll text-center",
      }),
      onHeaderCell: () => ({
        className: "llll text-center  fs-light",
      }),
    },
    {
      title: "DENA",
      dataIndex: "credit",
      key: "credit",
      onCell: () => ({
        className: "llll text-center",
      }),
      onHeaderCell: () => ({
        className: "llll  text-center fs-light",
      }),
      render: (text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
        <span
          style={{ color: Number(text) > 0 ? "blue" : "inherit", fontWeight: "bold" }}>
          {text}
        </span>
      ),
    },
    {
      title: "LENA",
      dataIndex: "debit",
      key: "debit",
      onCell: () => ({
        className: "llll text-center",
      }),
      onHeaderCell: () => ({
        className: "llll text-center fs-light",
      }),
      render: (text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
        <span
          style={{ color: Number(text) > 0 ? "red" : "inherit", fontWeight: "bold" }}>
          {text}
        </span>
      ),
    },
    {
      title: "HISAB",
      dataIndex: "balance",
      key: "balance",
      onCell: () => ({
        className: "llll text-center",
      }),
      onHeaderCell: () => ({
        className: "llll text-center fs-light",
      }),
      render: (text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => <span style={{ fontWeight: "bold" }}>{text}</span>,
    },
  ];

  const data = [
    {
      key: "1",
      date: "29 Jun 25",
      description: "Sri Lanka v Bangladesh",
      credit: 0,
      debit: 197,
      balance: 0,
    },
    {
      key: "2",
      date: "28 Jun 25",
      description: "Sri Lanka v Bangladesh",
      credit: 0,
      debit: 3,
      balance: 197,
    },
  ];
  return (
    <div className="gx-main-content-wrapper" style={{ marginBottom: 120 }}>
      {/* <div className="ant-row ant-row-center">
        <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-22 ant-col-lg-16 ant-col-xl-16">
          <div className="gx-py-1 gx-bg-grey ">
            <div className="gx-bg-flex gx-justify-content-center gx-text-white gx-font-weight-semi-bold">
              MY LEDGER
            </div>
          </div>
          
          <div className="ant-table-wrapper gx-table-responsive">
            <div className="ant-spin-nested-loading">
              <div className="ant-spin-container">
                <div className="ant-table ant-table-bordered">
                  <div className="ant-table-container">
                    <div className="ant-table-content">
                      <table style={{ tableLayout: "auto" }}>
                        <colgroup />
                        <thead className="ant-table-thead">
                          <tr>
                            <th
                              className="ant-table-cell llllll "
                              style={{ textAlign: "center" }}>
                              DESCRIPTION
                            </th>
                            <th
                              className="ant-table-cell llllll"
                              style={{ textAlign: "center" }}>
                              WON BY
                            </th>
                            <th
                              className="ant-table-cell llllll"
                              style={{ textAlign: "center" }}>
                              DENA
                            </th>
                            <th
                              className="ant-table-cell llllll "
                              style={{ textAlign: "center" }}>
                              LENA
                            </th>
                            <th
                              className="ant-table-cell llllll "
                              style={{ textAlign: "center" }}>
                              HISAB
                            </th>
                          </tr>
                        </thead>
                        <tbody className="ant-table-tbody">
                          <tr
                            data-row-key="684a73f117135f0d645ccf0e-0"
                            className="ant-table-row ant-table-row-level-0">
                            <td
                              className="ant-table-cell llllll "
                              style={{ textAlign: "center" }}>
                              <a href="/main/ledger-details/1.244981722">
                                <span className="gx-text-link">
                                  Sri Lanka v Bangladesh (28-Jun-2025)
                                </span>
                              </a>
                            </td>
                            <td
                              className="ant-table-cell llllll"
                              style={{ textAlign: "center" }}>
                              <span className="">Sri Lanka Win The Match</span>
                            </td>
                            <td
                              className="ant-table-cell llllll"
                              style={{ textAlign: "center" }}>
                              <span className="gx-text-red">103</span>
                            </td>
                            <td
                              className="ant-table-cell llllll "
                              style={{ textAlign: "center" }}>
                              <span className="gx-text-green-0">0</span>
                            </td>
                            <td
                              className="ant-table-cell llllll "
                              style={{ textAlign: "center" }}>
                              <span className="gx-text-red">203</span>
                            </td>
                          </tr>
                          <tr
                            data-row-key="684a73f117135f0d645ccf0e-1"
                            className="ant-table-row ant-table-row-level-0">
                            <td
                              className="ant-table-cell llllll "
                              style={{ textAlign: "center" }}>
                              <a href="/main/ledger-casino-details/3032/diamondCasino/1749666600000">
                                <span className="gx-text-link">
                                  Lucky7 B (12-06-2025) (13-Jun-2025)
                                </span>
                              </a>
                            </td>
                            <td
                              className="ant-table-cell llllll"
                              style={{ textAlign: "center" }}>
                              <span className="">Lucky7 B (12-06-2025)</span>
                            </td>
                            <td
                              className="ant-table-cell llllll"
                              style={{ textAlign: "center" }}>
                              <span className="gx-text-red">100</span>
                            </td>
                            <td
                              className="ant-table-cell llllll "
                              style={{ textAlign: "center" }}>
                              <span className="gx-text-green-0">0</span>
                            </td>
                            <td
                              className="ant-table-cell llllll "
                              style={{ textAlign: "center" }}>
                              <span className="gx-text-red">100</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Row justify="center">
        <Col className="gx-col-full" xs={24} sm={16}>
          <div
            className="gx-py-1 gx-bg-grey gx-bg-flex gx-justify-content-center gx-text-white gx-w-100"
            style={{ fontWeight: 700 }}>
            MY LEDGER
          </div>
          <Row
            justify="center"
            className="gx-py-3  gx-fs-sm gx-font-weight-semi-bold gx-text-light-gray">
            <Col sm={8} xs={10} className="gx-py-md-1 gx-py-1 ">
              <span className="gx-font-weight-semi-bold gx-fs-lg gx-px-2 fs-A">
                {" "}
                Lena:
              </span>
              <span className="gx-fs-lg gx-font-weight-semi-bold  gx-text-green-0 fs-A">
                0.00
              </span>
            </Col>
            <Col
              sm={8}
              xs={10}
              className=" gx-bg-flex gx-py-md-1 gx-py-1 gx-justify-content-center">
              <span className="gx-font-weight-semi-bold gx-fs-lg gx-px-2 fs-A">
                {" "}
                Dena:
              </span>
              <span className="gx-fs-lg gx-font-weight-semi-bold   gx-text-red fs-A">
                203.00
              </span>
            </Col>

            <Col sm={8} xs={10} className="gx-py-md-1 gx-py-1">
              <span className="gx-font-weight-semi-bold gx-fs-lg gx-px-2 fs-A">
                {" "}
                Balance:
              </span>
              <span className="gx-fs-lg gx-font-weight-semi-bold  gx-text-red fs-A">
                203.00
              </span>
            </Col>
          </Row>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={false}
            scroll={{ x: "max-content" }}
          />
        </Col>
      </Row>
      <div className="gx-py-4">
        <Row justify="center">
          <Col sm={18} xs={24} md={16} lg={10} xl={14} xxl={14}>
            <Link to="/dashboard">
              <div className="gx-bg-grey gx-py-2 gx-text-white gx-font-weight-semi gx-bg-flex gx-justify-content-center">
                BACK TO MAIN MENU
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Ledger;
