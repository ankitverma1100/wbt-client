/* eslint-disable @typescript-eslint/no-explicit-any */
import "./style.scss";

const Statement = () => {
  return (
    <div className="container mobile-padding-0 statement-page">
      <div className="menu mt-0 mt-md-2 w-100" id="menu">
        <ul className="nav" style={{ display: "block" }}>
          <li className="back-main-menu">
            <a href="/main/dashboard/index">BACK TO MAIN MENU</a>
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
            <a href="/main/dashboard/index">BACK TO MAIN MENU</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Statement;
