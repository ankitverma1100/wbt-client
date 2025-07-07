import { useEffect } from "react";
import { useGetLedgerDetailsMutation } from "../../store/service/userServices/userServices";

const Ledger = () => {
  const [trigger, { data: ledgerData }] =
    useGetLedgerDetailsMutation();

  useEffect(() => {
    trigger({});
  }, []);
  return (
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
                                  className="TeamCombo"
                                  style={{ backgroundColor: "#7d5c0e" }}>
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
                                  className="font_text_white10px"
                                  style={{
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                    paddingRight: 5,
                                    color: "#fff",
                                    backgroundColor: "#2A363B",
                                  }}>
                                  DESCRIPTION
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
                                    backgroundColor: "#2A363B",
                                  }}>
                                  WON BY
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
                                    backgroundColor: "#2A363B",
                                  }}>
                                  WON
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
                                    backgroundColor: "#2A363B",
                                  }}>
                                  LOST
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
                                    backgroundColor: "#2A363B",
                                  }}>
                                  HISAB
                                </td>
                              </tr>
                              {ledgerData?.data?.map((items) => {
                                return (
                                  <tr>
                                    <td
                                      align="center"
                                      valign="bottom"
                                      style={{ backgroundColor: "#FFFFFF" }}
                                    >
                                      {items?.remark}
                                    </td>
                                    <td
                                      align="center"
                                      valign="bottom"
                                      style={{ backgroundColor: "#FFFFFF" }}>{items?.wonBy}</td>
                                    <td
                                      align="center"
                                      valign="bottom"
                                      style={{ backgroundColor: "#FFFFFF" }}>{items?.won}</td>
                                    <td
                                      align="center"
                                      valign="bottom"
                                      style={{ backgroundColor: "#FFFFFF" }}>{items?.lost}</td>
                                    <td
                                      align="center"
                                      valign="bottom"
                                      style={{ backgroundColor: "#FFFFFF" }}>{items?.balance?.toFixed(2)}</td>
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
              <a href="/main/dashboard/menu">BACK TO MAIN MENU</a>
            </li>
          </ul>
        </div>

        <table width="100%" border={0} cellSpacing={2} cellPadding={0}>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Ledger;
