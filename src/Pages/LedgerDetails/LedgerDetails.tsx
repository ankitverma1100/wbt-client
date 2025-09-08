import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetLedgerBetDetailsMutation } from "../../store/service/userServices/userServices";
import moment from "moment";

const LedgerDetails = () => {
  const { id } = useParams();
  const [betTrigger, { data: ledgerBetData, isLoading }] =
    useGetLedgerBetDetailsMutation();

  useEffect(() => {
    betTrigger({
      matchId: Number(id) || 0,
    });
  }, [id]);

  const matchWon = ledgerBetData?.data?.matchWon;
  const fancyWon = ledgerBetData?.data?.sessionWon;
  const totalCommission = ledgerBetData?.data?.totalCommission;
  const totalWon = ledgerBetData?.data?.totalWon;
  return (
    <>
      <div className="container ">
        <form name="BetPlayer">
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
                                    style={{
                                      backgroundColor: "var(--bg-color)",
                                    }}>
                                    <p
                                      style={{
                                        color: "#FFF",
                                        fontSize: 13,
                                        fontWeight: "bold",
                                        marginBottom: 0,
                                      }}>
                                      Match Bets
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
                                    width="25%"
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
                                    Team Name
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
                                    Rate
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
                                    Amount
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
                                    Mode
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
                                    Won By
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
                                    P&L
                                  </td>
                                </tr>
                                {ledgerBetData?.data?.matchBets?.map(
                                  (items) => {
                                    const totalPnl =
                                      (items?.pnl1 || 0) +
                                      (items?.pnl2 || 0) +
                                      (items?.pnl3 || 0);
                                    return (
                                      <tr>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {items?.selectionName}
                                        </td>

                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {Number(items?.rate)?.toFixed(2)}
                                        </td>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {items?.amount}
                                        </td>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {items?.mode}
                                        </td>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {ledgerBetData?.data?.wonBy}
                                        </td>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                            color:
                                              items?.netPnl >= 0 ? "green" : "red",
                                          }}>
                                          {items?.netPnl?.toFixed(2)}
                                        </td>
                                      </tr>
                                    );
                                  }
                                )}
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
                    valign="middle"
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

          <div className="my-ledger-data-table" style={{ overflow: "scroll" }}>
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
                                    style={{
                                      backgroundColor: "rgb(245, 34, 45)",
                                    }}>
                                    <p
                                      style={{
                                        color: "#FFF",
                                        fontSize: 13,
                                        fontWeight: "bold",
                                        marginBottom: 0,
                                      }}>
                                      Fancy Bets
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
                                <tr>
                                  <td
                                    width="15%"
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
                                    Runner
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
                                    Date
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
                                    Rate
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
                                    Run
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
                                    Amount
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
                                    Mode
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
                                    Result
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
                                    P&L
                                  </td>
                                </tr>
                                {ledgerBetData?.data?.sessionBets?.map(
                                  (items) => {
                                    return (
                                      <tr>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {items?.selectionName}
                                        </td>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {moment().format("DD-MM-YYYY")}
                                        </td>

                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {items?.rate}
                                        </td>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {items?.run}
                                        </td>

                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {items?.amount}
                                        </td>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {items?.mode}
                                        </td>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                          }}>
                                          {items?.declared}
                                        </td>
                                        <td
                                          align="center"
                                          valign="middle"
                                          style={{
                                            backgroundColor: "#FFFFFF",
                                            color:
                                              items?.netPnl >= 0
                                                ? "green"
                                                : "red",
                                          }}>
                                          {items?.netPnl}
                                        </td>
                                      </tr>
                                    );
                                  }
                                )}
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
                    valign="middle"
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

          <div className="p-122">
            <div className="my-ledger-data-table">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody>
                  <tr>
                    <td
                      height={30}
                      align="center"
                      className="TeamCombo"
                      style={{
                        backgroundColor: "var(--bg-color)",
                      }}>
                      <p
                        style={{
                          color: "#FFF",
                          fontSize: 13,
                          fontWeight: "bold",
                          marginBottom: 0,
                        }}>
                        Match Plus Minus
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      height={30}
                      align="center"
                      className="TeamCombo"
                      style={{
                        backgroundColor: "#fff",
                      }}>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: "bold",
                          marginBottom: 0,
                          color: matchWon && matchWon > 0 ? "green" : "red",
                        }}>
                        You {matchWon && matchWon > 0 ? "Won" : "Lost"}{" "}
                        {matchWon}
                        /- Coins.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-ledger-data-table">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody>
                  <tr>
                    <td
                      height={30}
                      align="center"
                      className="TeamCombo"
                      style={{
                        backgroundColor: "var(--bg-color)",
                      }}>
                      <p
                        style={{
                          color: "#FFF",
                          fontSize: 13,
                          fontWeight: "bold",
                          marginBottom: 0,
                        }}>
                        Fancy Plus Minus
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      height={30}
                      align="center"
                      className="TeamCombo"
                      style={{
                        backgroundColor: "#fff",
                      }}>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginBottom: 0,
                        }}>
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            marginBottom: 0,
                            color: fancyWon && fancyWon > 0 ? "green" : "red",
                          }}>
                          You {fancyWon && fancyWon > 0 ? "Won" : "Lost"}{" "}
                          {fancyWon}
                          /- Coins.
                        </p>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-ledger-data-table">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody>
                  <tr>
                    <td
                      height={30}
                      align="center"
                      className="TeamCombo"
                      style={{
                        backgroundColor: "var(--bg-color)",
                      }}>
                      <p
                        style={{
                          color: "#FFF",
                          fontSize: 13,
                          fontWeight: "bold",
                          marginBottom: 0,
                        }}>
                        Total Commission
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      height={30}
                      align="center"
                      className="TeamCombo"
                      style={{
                        backgroundColor: "#fff",
                      }}>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: "bold",
                          marginBottom: 0,
                          color:
                            totalCommission && totalCommission > 0
                              ? "green"
                              : "red",
                        }}>
                        You{" "}
                        {totalCommission && totalCommission > 0
                          ? "Won"
                          : "Lost"}{" "}
                        {totalCommission}
                        /- Coins.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-ledger-data-table">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody>
                  <tr>
                    <td
                      height={30}
                      align="center"
                      className="TeamCombo"
                      style={{
                        backgroundColor: "var(--bg-color)",
                      }}>
                      <p
                        style={{
                          color: "#FFF",
                          fontSize: 13,
                          fontWeight: "bold",
                          marginBottom: 0,
                        }}>
                        Net Plus Minus
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      height={30}
                      align="center"
                      className="TeamCombo"
                      style={{
                        backgroundColor: "#fff",
                      }}>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: "bold",
                          marginBottom: 0,
                          color: totalWon && totalWon > 0 ? "green" : "red",
                        }}>
                        You {totalWon && totalWon > 0 ? "Won" : "Lost"}{" "}
                        {totalWon}
                        /- Coins.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="menu mt-4 w-100"
            id="menu"
            style={{
              marginBottom: "20px",
            }}>
            <ul className="nav" style={{ display: "block" }}>
              <li className="back-main-menu">
                <Link to="/main/ledger">BACK TO MAIN MENU</Link>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default LedgerDetails;
