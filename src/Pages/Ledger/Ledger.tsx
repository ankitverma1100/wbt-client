/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row, Table } from "antd";
import type {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
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
      render: (
        text:
          | string
          | number
          | bigint
          | boolean
          | ReactElement<unknown, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | Promise<
              | string
              | number
              | bigint
              | boolean
              | ReactPortal
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | null
              | undefined
            >
          | null
          | undefined
      ) => (
        <span
          style={{
            color: Number(text) > 0 ? "blue" : "inherit",
            fontWeight: "bold",
          }}>
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
      render: (
        text:
          | string
          | number
          | bigint
          | boolean
          | ReactElement<unknown, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | Promise<
              | string
              | number
              | bigint
              | boolean
              | ReactPortal
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | null
              | undefined
            >
          | null
          | undefined
      ) => (
        <span
          style={{
            color: Number(text) > 0 ? "red" : "inherit",
            fontWeight: "bold",
          }}>
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
      render: (
        text:
          | string
          | number
          | bigint
          | boolean
          | ReactElement<unknown, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | ReactPortal
          | Promise<
              | string
              | number
              | bigint
              | boolean
              | ReactPortal
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | null
              | undefined
            >
          | null
          | undefined
      ) => <span style={{ fontWeight: "bold" }}>{text}</span>,
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
    // <div className="gx-main-content-wrapper" style={{ marginBottom: 120 }}>
    //   <Row justify="center">
    //     <Col className="gx-col-full" xs={24} sm={16}>
    //       <div
    //         className="gx-py-1 gx-bg-grey gx-bg-flex gx-justify-content-center gx-text-white gx-w-100"
    //         style={{ fontWeight: 700 }}>
    //         MY LEDGER
    //       </div>
    //       <Row
    //         justify="center"
    //         className="gx-py-3  gx-fs-sm gx-font-weight-semi-bold gx-text-light-gray">
    //         <Col sm={8} xs={10} className="gx-py-md-1 gx-py-1 ">
    //           <span className="gx-font-weight-semi-bold gx-fs-lg gx-px-2 fs-A">
    //             {" "}
    //             Lena:
    //           </span>
    //           <span className="gx-fs-lg gx-font-weight-semi-bold  gx-text-green-0 fs-A">
    //             0.00
    //           </span>
    //         </Col>
    //         <Col
    //           sm={8}
    //           xs={10}
    //           className=" gx-bg-flex gx-py-md-1 gx-py-1 gx-justify-content-center">
    //           <span className="gx-font-weight-semi-bold gx-fs-lg gx-px-2 fs-A">
    //             {" "}
    //             Dena:
    //           </span>
    //           <span className="gx-fs-lg gx-font-weight-semi-bold   gx-text-red fs-A">
    //             203.00
    //           </span>
    //         </Col>

    //         <Col sm={8} xs={10} className="gx-py-md-1 gx-py-1">
    //           <span className="gx-font-weight-semi-bold gx-fs-lg gx-px-2 fs-A">
    //             {" "}
    //             Balance:
    //           </span>
    //           <span className="gx-fs-lg gx-font-weight-semi-bold  gx-text-red fs-A">
    //             203.00
    //           </span>
    //         </Col>
    //       </Row>
    //       <Table
    //         columns={columns}
    //         dataSource={data}
    //         bordered
    //         pagination={false}
    //         scroll={{ x: "max-content" }}
    //       />
    //     </Col>
    //   </Row>
    //   <div className="gx-py-4">
    //     <Row justify="center">
    //       <Col sm={18} xs={24} md={16} lg={10} xl={14} xxl={14}>
    //         <Link to="/dashboard">
    //           <div className="gx-bg-grey gx-py-2 gx-text-white gx-font-weight-semi gx-bg-flex gx-justify-content-center">
    //             BACK TO MAIN MENU
    //           </div>
    //         </Link>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>
    <div className="container">
      <form name="BetPlayer" method="post" action="" wfd-id={1}>
        <br />

        <div className="my-ledger-data-table">
          <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
            <tbody>
              <tr>
                <td valign="top" style={{ padding: 0 }}>
                  <table
                    className="ledger-data"
                    width="100%"
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}>
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          valign="top"
                          style={{ border: 0, padding: 0 }}>
                          <table
                            width="100%"
                            border={0}
                            cellSpacing={0}
                            cellPadding={0}>
                            <tbody>
                              <tr>
                                <td
                                  height={30}
                                  align="center"
                                  bgcolor="#7d5c0e"
                                  className="TeamCombo">
                                  <p
                                    style={{
                                      color: "#FFF",
                                      fontSize: 13,
                                      fontWeight: "bold",
                                      marginBottom: 0,
                                    }}>
                                    {" "}
                                    MY LEDGER
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          valign="top"
                          style={{ border: 0, padding: 0 }}>
                          <table
                            width="100%"
                            border={0}
                            cellPadding={2}
                            cellSpacing={2}
                            className="ledger-data"></table>
                          <table
                            width="100%"
                            border={0}
                            cellPadding={20}
                            cellSpacing={2}>
                            <tbody>
                              <tr>
                                <td
                                  width="40%"
                                  height={35}
                                  align="center"
                                  valign="middle"
                                  bgcolor="#2A363B"
                                  className="font_text_white10px"
                                  style={{
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                    paddingRight: 5,
                                    color: "#fff",
                                  }}>
                                  DESCRIPTION
                                </td>
                                <td
                                  width="15%"
                                  align="center"
                                  valign="middle"
                                  bgcolor="#2A363B"
                                  className="font_text_white10px"
                                  style={{
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                    paddingRight: 5,
                                    color: "#fff",
                                  }}>
                                  WON BY
                                </td>
                                <td
                                  width="15%"
                                  align="center"
                                  valign="middle"
                                  bgcolor="#2A363B"
                                  className="font_text_white10px"
                                  style={{
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                    color: "#fff",
                                  }}>
                                  WON
                                </td>
                                <td
                                  width="15%"
                                  align="center"
                                  valign="middle"
                                  bgcolor="#2A363B"
                                  className="font_text_white10px"
                                  style={{
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                    color: "#fff",
                                  }}>
                                  LOST
                                </td>
                                <td
                                  width="15%"
                                  align="center"
                                  valign="middle"
                                  bgcolor="#2A363B"
                                  className="font_text_white10px"
                                  style={{
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                    color: "#fff",
                                  }}>
                                  HISAB
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  valign="bottom"
                  style={{ padding: 0, background: "#ffffff" }}
                />
              </tr>
              <tr>
                <td align="left" valign="top">
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td valign="top" />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="menu mt-4 w-100" id="menu">
          <ul className="nav" style={{ display: "block" }}>
            <li className="back-main-menu">
              <a href="https://antspro3.com/client/menu">BACK TO MAIN MENU</a>
            </li>
          </ul>
        </div>
        {/*<br>*/}
        <table width="100%" border={0} cellSpacing={2} cellPadding={0}>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
      {/*--- End Content -----------*/}
    </div>
  );
};

export default Ledger;
