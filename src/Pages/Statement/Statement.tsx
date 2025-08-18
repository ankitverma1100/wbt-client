import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useGetUserchpdtlMutation } from "../../store/service/userServices/userServices";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import moment from "moment";

const { RangePicker } = DatePicker;

const Statement = () => {
  const nav = useNavigate();
  const [dateRange, setDateRange] = useState<[string, string]>([
    dayjs().subtract(7, "day").format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD"),
  ]);
  const [filterType, setFilterType] = useState("ALL");
  const [trigger, { data }] = useGetUserchpdtlMutation();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    trigger({
      detailType: filterType,
      fromDate: dateRange[0],
      toDate: dateRange[1],
      userId: "",
    });
    setCurrentPage(1); // Reset to first page when filter or date changes
  }, [filterType, dateRange]);

  const handleDateChange = (dates: any) => {
    if (dates && dates.length === 2) {
      setDateRange([
        dates[0].format("YYYY-MM-DD"),
        dates[1].format("YYYY-MM-DD"),
      ]);
    }
  };

  // Pagination logic
  const totalEntries = data?.data?.length || 0;
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  const paginatedData =
    data?.data?.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    ) || [];

  return (
    <div className="container mobile-padding-0 statement-page">
      <div className="menu mt-0 mt-md-2 w-100" id="menu">
        <ul className="nav" style={{ display: "block" }}>
          <li className="back-main-menu">
            <a onClick={() => nav(-1)}>BACK TO MAIN MENU</a>
          </li>
        </ul>
      </div>

      <div className="page_head">
        <h6>MY ACCOUNT STATEMENT ({totalEntries})</h6>
      </div>

      <div className="row calenderdiv">
        <div className="col-md-6">
          <div className="calender">
            <RangePicker
              value={[dayjs(dateRange[0]), dayjs(dateRange[1])]}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="btn-group" role="group" aria-label="buttonFilter">
            <button
              type="button"
              className="btn btn-sm btn-primary btn_filter"
              onClick={() => setFilterType("ALL")}>
              All
            </button>
            <button
              type="button"
              className="btn btn-sm btn-primary btn_filter"
              onClick={() => setFilterType("PNL")}>
              P&amp;L
            </button>
            <button
              type="button"
              className="btn btn-sm btn-primary btn_filter"
              onClick={() => setFilterType("ACCOUNT")}>
              Account
            </button>
          </div>
        </div>
      </div>

      <div className="statement-table">
        <div className="dataTables_wrapper no-footer">
          <div className="dataTables_length">
            <label>
              Show{" "}
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}>
                {[10, 25, 50, 100].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>{" "}
              entries
            </label>
          </div>

          <table className="table statement-datatable dataTable no-footer">
            <thead>
              <tr>
                <th style={{ width: 123 }}>DATE</th>
                <th style={{ width: 196 }}>DESCRIPTION</th>
                <th style={{ width: 97 }}>CREDIT</th>
                <th style={{ width: 82 }}>DEBIT</th>
                <th style={{ width: 99 }}>Comm+</th>
                <th style={{ width: 119 }}>BALANCE</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index}>
                  <td style={{ whiteSpace: "nowrap" }}>
                    {moment(item?.date).format("DD MMM YY")}
                  </td>
                  <td>{item?.description}</td>
                  <td className="text-primary text-center">
                    {item?.credit?.toFixed(2)}
                  </td>
                  <td className="text-danger text-center">
                    {item?.debit?.toFixed(2)}
                  </td>
                  <td className="text-primary text-center">0.00</td>
                  <td className="text-center">{item?.closing?.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="pagination_main">
            <div className="dataTables_info">
              Showing{" "}
              {Math.min((currentPage - 1) * rowsPerPage + 1, totalEntries)} to{" "}
              {Math.min(currentPage * rowsPerPage, totalEntries)} of{" "}
              {totalEntries} entries
            </div>
            <div className="pagination-controls">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}>
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={currentPage === i + 1 ? "active" : ""}
                  onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="menu mt-2 w-100" id="menu">
        <ul className="nav" style={{ display: "block" }}>
          <li className="back-main-menu">
            <a onClick={() => nav(-1)}>BACK TO MAIN MENU</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Statement;
