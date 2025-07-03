/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, DatePicker, Radio, Row, Table } from "antd";
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
      render: (text: any) => (
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
      render: (text: any) => <span style={{ fontWeight: "bold" }}>{text}</span>,
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
    // <div
    //   className="gx-main-content-wrapper accstatement"
    //   style={{ marginBottom: 120 }}>
    //   <Row justify="center">
    //     <Col className="gx-col-full" xs={24} sm={16}>
    //       <div className="gx-py-2 gx-bg-grey gx-bg-flex gx-justify-content-center gx-text-white gx-w-100">
    //         MY ACCOUNT STATEMENT (11)
    //       </div>
    //       <Row
    //         justify="space-between"
    //         align="middle"
    //         className="gx-bg-flex gx-w-100 gx-py-1">
    //         <Col sm={8} xs={24} className="gx-mt-3 gx-py-md-0 gx-py-2 gx-px-4 ">
    //           <RangePicker
    //             defaultValue={[
    //               dayjs("2015/01/01", dateFormat),
    //               dayjs("2015/01/01", dateFormat),
    //             ]}
    //             format={dateFormat}
    //           />
    //         </Col>
    //         <Col
    //           xs={24}
    //           sm={12}
    //           className="gx-text-white  gx-fs-lg gx-py-md-0 gx-py-2 gx-font-weight-bold gx-bg-flex gx-align-items-center gx-justify-content-start  ">
    //           <Radio.Group className="gx-bg-flex gx-w-100 gx-py- gx-my-0 gx-align-items-center gx-justify-content-center ">
    //             <Radio className="gx-bg-dark gx-text-white gx-py- gx-my-0 gx-m-0 ml-1">
    //               All
    //             </Radio>
    //             <Radio className="gx-bg-primary gx-text-white gx-py- gx-my-0 ml-1">
    //               P&L
    //             </Radio>
    //             <Radio className="gx-bg-primary gx-text-white gx-py- gx-my-0">
    //               Account
    //             </Radio>
    //           </Radio.Group>
    //         </Col>
    //       </Row>
    //       <Table
    //         columns={columns}
    //         dataSource={data}
    //         bordered
    //         pagination={false}
    //         scroll={{ x: "max-content" }}
    //       />
    //       <ul className="ant-pagination gx-mt-3">
    //         <li
    //           title="Previous Page"
    //           className="ant-pagination-prev ant-pagination-disabled"
    //           aria-disabled="true">
    //           <a className="gx-px-2 gx-fs-sm gx-py-2 gx-bg-white gx-border gx-border-info">
    //             Prev
    //           </a>
    //         </li>
    //         <li
    //           className="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
    //           tabIndex={0}>
    //           <a rel="nofollow">1</a>
    //         </li>
    //         <li
    //           title="Next Page"
    //           className="ant-pagination-next ant-pagination-disabled"
    //           aria-disabled="true">
    //           <a className="gx-px-2 gx-fs-sm gx-py-2 gx-border gx-bg-white gx-border-info">
    //             Next
    //           </a>
    //         </li>
    //       </ul>
    //       <div className="gx-py-4">
    //         <a href="/main/dashboard/">
    //           <div className="gx-bg-grey gx-py-1 gx-text-white gx-font-weight-semi gx-bg-flex gx-justify-content-center">
    //             BACK TO MAIN MENU
    //           </div>
    //         </a>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
    <div className="container mobile-padding-0 statement-page">
      <div className="menu mt-0 mt-md-2 w-100" id="menu">
        <ul className="nav" style={{ display: "block" }}>
          <li className="back-main-menu">
            <a href="https://antspro3.com/client/index">BACK TO MAIN MENU</a>
          </li>
        </ul>
      </div>
      <div className="page_head">
        <h6>MY ACCOUNT STATEMENT (3)</h6>
      </div>
      <div className="row calenderdiv">
        <div className="col-md-6">
          <div className="calender">
            <input
              type="text"
              name="daterange1"
              defaultValue="07/03/2025 - 07/03/2025"
              placeholder="Start End Date"
              autoComplete="off"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="btn-group" role="group" aria-label="buttonFilter">
            <button type="button" className="btn btn-sm btn-primary btn_filter">
              All
            </button>
            <button type="button" className="btn btn-sm btn-primary btn_filter">
              P&amp;L
            </button>
            {/* <button type="button" class="btn btn-sm btn-primary btn_filter">PDC</button> */}
            <button type="button" className="btn btn-sm btn-primary btn_filter">
              Account
            </button>
          </div>
        </div>
      </div>
      <div className="statement-table">
        <div
          id="DataTables_Table_0_wrapper"
          className="dataTables_wrapper no-footer">
          <div className="dataTables_length" id="DataTables_Table_0_length">
            <label>
              Show{" "}
              <select
                name="DataTables_Table_0_length"
                aria-controls="DataTables_Table_0"
                className="">
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>{" "}
              entries
            </label>
          </div>
          <div id="DataTables_Table_0_filter" className="dataTables_filter">
            <label>
              Search:
              <input
                type="search"
                className=""
                placeholder=""
                aria-controls="DataTables_Table_0"
              />
            </label>
          </div>
          <table
            width="100%"
            cellPadding={0}
            className="table statement-datatable dataTable no-footer"
            id="DataTables_Table_0"
            role="grid"
            aria-describedby="DataTables_Table_0_info"
            style={{ width: "100%" }}>
            <thead>
              <tr role="row">
                <th
                  className="sorting_desc"
                  tabIndex={0}
                  aria-controls="DataTables_Table_0"
                  rowSpan={1}
                  colSpan={1}
                  aria-sort="descending"
                  aria-label="DATE: activate to sort column ascending"
                  style={{ width: 123 }}>
                  DATE
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="DataTables_Table_0"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="DESCRIPTION: activate to sort column ascending"
                  style={{ width: 196 }}>
                  DESCRIPTION
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="DataTables_Table_0"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Prev. Bal.: activate to sort column ascending"
                  style={{ width: 118 }}>
                  Prev. Bal.
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="DataTables_Table_0"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="CREDIT : activate to sort column ascending"
                  style={{ width: 97 }}>
                  CREDIT{" "}
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="DataTables_Table_0"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="DEBIT: activate to sort column ascending"
                  style={{ width: 82 }}>
                  DEBIT
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="DataTables_Table_0"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Comm+: activate to sort column ascending"
                  style={{ width: 99 }}>
                  Comm+
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="DataTables_Table_0"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="BALANCE: activate to sort column ascending"
                  style={{ width: 119 }}>
                  BALANCE
                </th>
              </tr>
            </thead>
            <tbody>
              {/*<tr>*/}
              {/*   <td>30 Jan 2024</td>*/}
              {/*   <td>Title Here</td>*/}
              {/*   <td class="text-center">500</td>*/}
              {/*   <td class="text-primary text-center">0</td>*/}
              {/*   <td class="text-danger text-center">0</td>*/}
              {/*   <td class="text-primary text-center">0</td>*/}
              {/*   <td class="text-center">500</td>*/}
              {/*</tr>*/}
              <tr role="row" className="odd">
                <td className="sorting_1">03 Sep 24</td>
                <td>Balance credited</td>
                <td className="text-center">6900</td>
                <td className="text-primary text-center">100</td>
                <td className="text-danger text-center">0</td>
                <td className="text-primary text-center">0</td>
                <td className="text-center">7000</td>
              </tr>
              <tr role="row" className="even">
                <td className="sorting_1">03 Sep 24</td>
                <td>Balance debited</td>
                <td className="text-center">7000</td>
                <td className="text-primary text-center">0</td>
                <td className="text-danger text-center">100</td>
                <td className="text-primary text-center">0</td>
                <td className="text-center">6900</td>
              </tr>
              <tr role="row" className="odd">
                <td className="sorting_1">03 Sep 24</td>
                <td>Balance credited</td>
                <td className="text-center">0</td>
                <td className="text-primary text-center">7000</td>
                <td className="text-danger text-center">0</td>
                <td className="text-primary text-center">0</td>
                <td className="text-center">7000</td>
              </tr>
            </tbody>
          </table>
          <div
            className="dataTables_info"
            id="DataTables_Table_0_info"
            role="status"
            aria-live="polite">
            Showing 1 to 3 of 3 entries
          </div>
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="DataTables_Table_0_paginate">
            <a
              className="paginate_button previous disabled"
              aria-controls="DataTables_Table_0"
              data-dt-idx={0}
              tabIndex={0}
              id="DataTables_Table_0_previous">
              Previous
            </a>
            <span>
              <a
                className="paginate_button current"
                aria-controls="DataTables_Table_0"
                data-dt-idx={1}
                tabIndex={0}>
                1
              </a>
            </span>
            <a
              className="paginate_button next disabled"
              aria-controls="DataTables_Table_0"
              data-dt-idx={2}
              tabIndex={0}
              id="DataTables_Table_0_next">
              Next
            </a>
          </div>
        </div>
      
      </div>
      <div className="menu mt-2 w-100" id="menu">
        <ul className="nav" style={{ display: "block" }}>
          <li className="back-main-menu">
            <a href="https://antspro3.com/client/index">BACK TO MAIN MENU</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Statement;
