import { useGetCasinoMyBetQuery } from "../../../store/service/userServices/userServices";
import { useParams } from "react-router-dom";

const MybetCasino = () => {
  const { id } = useParams();

  const { data: betList } = useGetCasinoMyBetQuery(
    { tableId: id ?? "", isGameCompleted: false, sportId: 5015 },
    { pollingInterval: 1500, refetchOnMountOrArgChange: true }
  );
  return (
    <div
      className="my-ledger-data-table"
      style={{
        marginBottom: "20px",
        marginTop: "20px",
      }}>
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
                              className="TeamCombo"
                              style={{ backgroundColor: "var(--bg-color)" }}>
                              <p
                                style={{
                                  color: "#FFF",
                                  fontSize: 13,
                                  fontWeight: "bold",
                                  marginBottom: 0,
                                }}>
                                {" "}
                                My Bet
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
                        cellPadding={20}
                        cellSpacing={2}>
                        <tbody>
                          <tr style={{ background: "linear-gradient(to right, #8C002B, #C2003B)" }}>
                            <td
                              width="40%"
                              height={35}
                              align="center"
                              valign="middle"
                              className="font_text_white10px"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "center",
                                paddingRight: 5,
                                color: "#fff",
                              }}>
                              Name
                            </td>
                            <td
                              width="20%"
                              height={35}
                              align="center"
                              valign="middle"
                              className="font_text_white10px"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "center",
                                paddingRight: 5,
                                color: "#fff",
                              }}>
                              Odds
                            </td>
                            <td
                              width="15%"
                              align="center"
                              valign="middle"
                              className="font_text_white10px"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "center",
                                paddingRight: 5,
                                color: "#fff",
                              }}>
                              Stake
                            </td>
                            <td
                              width="15%"
                              align="center"
                              valign="middle"
                              className="font_text_white10px"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "center",
                                color: "#fff",
                              }}>
                              P/L
                            </td>
                          </tr>
                          {betList?.data?.map((items) => {
                            return (
                              <tr
                                style={{
                                  backgroundColor:
                                    id === "61" || id === "56"
                                      ? items?.back
                                        ? "#72bbef"
                                        : "#faa9ba"
                                      : "#ffffff",
                                }}>
                                <td align="center" valign="bottom">
                                  {items?.selectionName}
                                </td>
                                <td align="center" valign="bottom">
                                  {items?.odds?.toFixed(2)}
                                </td>
                                <td align="center" valign="bottom">
                                  {items?.stake}
                                </td>
                                <td align="center" valign="bottom">
                                  {items?.pnl}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MybetCasino;
