import { useParams } from "react-router-dom";
import { useGetCasinoMyBetQuery } from "../../store/service/userServices/userServices";

const AllBets = () => {
  const { id } = useParams();

  const { data: betList } = useGetCasinoMyBetQuery(
    { tableId: id ?? "", isGameCompleted: true, sportId: 5015 },
    { refetchOnMountOrArgChange: true }
  );


  return (
    <>
      <div className="gx-bg-grey gx-text-center gx-py-2 gx-px-3 gx-text-white gx-fs-sm gx-font-weight-semi-bold gx-d-flex gx-justify-content-between gx-align-items-center gx-text-uppercase gx-border-bottom">
        <span></span>
        <span>Casino Bet List </span>
        <span>
          {" "}
          P/L <span className="gx-text-red">0.00</span>{" "}
        </span>
      </div>
      <div
        style={{
          overflow: "scroll",
        }}>
        <table style={{ tableLayout: "auto" }} className="main_table">
          <colgroup />
          <thead className="ant-table-thead">
            <tr>
              <th className="ant-table-cell">Team</th>
              <th className="ant-table-cell">Mode</th>
              <th className="ant-table-cell">Rate</th>
              <th className="ant-table-cell">Amount</th>
              <th className="ant-table-cell">Result</th>
              <th className="ant-table-cell">Date &amp; Time</th>
            </tr>
          </thead>
          <tbody className="ant-table-tbody">
            {betList?.data?.map((items) => {
              return (
                <tr>
                  <td className="ant-table-cell">{items?.selectionName}</td>
                  <td className="ant-table-cell">
                    {items?.back ? "Back" : "Lay"}
                  </td>
                  <td className="ant-table-cell">{items?.odds}</td>
                  <td className="ant-table-cell">{items?.stake}</td>
                  <td className="ant-table-cell">{items?.result}</td>
                  <td className="ant-table-cell">{items?.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllBets;
