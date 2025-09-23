import { useParams } from "react-router-dom";
import { useGetBetListBymatchIdQuery } from "../../store/service/userServices/userServices";
import { useState } from "react";
import moment from "moment";

const MatchBets = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("match");
  const { data } = useGetBetListBymatchIdQuery(
    {
      matchId: id ?? "",
      activeBet: true,
    },
    { pollingInterval: 1000 }
  );

  const matchBets = data?.data?.Bookmaker ?? [];
  const sessionBets =
    data?.data?.Fancy2Market?.filter(
      (item) => item?.declared === "null" || !item?.declared?.length
    ) ?? [];
  return (
    <>
      {/* <div
        className="fancybetdiv tabChnage"
        style={{ background: "#2a363b", }}>
        <div
          className={`mb-0 sub_menu_tab ${
            activeTab === "match" ? "active" : ""
          }`}
          onClick={() => setActiveTab("match")}
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px ",
            fontFamily: '"Roboto"',
          }}>
          Bookmaker Bets ({matchBets?.length || 0})
        </div>
        <div
          className={`mb-0 sub_menu_tab ${
            activeTab === "session" ? "active" : ""
          }`}
          onClick={() => setActiveTab("session")}
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px ",
            fontFamily: '"Roboto"',
          }}>
          Session Bets ({sessionBets?.length || 0})
        </div>
      </div> */}

      <div
        className="fancybetdiv text-center"
        style={{ background: "#2a363b", padding: 2, letterSpacing: 1 }}>
        <h6
          className="mb-0"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px ",
            fontFamily: '"Roboto"',
          }}>
          MATCH BETS
        </h6>
      </div>

      <div className="overflow-responsive">
        <table
          width="100%"
          cellSpacing={2}
          cellPadding={2}
          border={0}
          className="table compete-game-"
          style={{ whiteSpace: "nowrap", tableLayout: "auto" }}>
          <thead>
            <tr>
              <td
                className="FontTextWhite10px border"
                style={{
                  color: "#fff ",
                  background: "var(--bg-color)",
                }}
                height={25}
                align="center">
                TEAM{" "}
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                valign="middle"
                align="center">
                RATE
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                valign="middle"
                align="center">
                AMOUNT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                align="center">
                MODE
              </td>
            </tr>
          </thead>
          <tbody id="MyTeamBets">
            {data?.data?.Bookmaker?.map((items) => {
              return (
                // #a7d8fd
                <tr
                  style={{
                    borderBottom: "1px solid #3d8282",
                    background: items?.back ? "#a7d8fd" : "#f9c9d4",
                  }}>
                  <td
                    style={{
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                      whiteSpace: "wrap",
                    }}>
                    {items?.nation}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.priveValue}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.amount}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.back ? "LAGAI" : "KHAI"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <div
        className="fancybetdiv text-center"
        style={{ background: "#2a363b", padding: 2, letterSpacing: 1 }}>
        <h6
          className="mb-0"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px ",
            fontFamily: '"Roboto"',
          }}>
          FANCY BETS
        </h6>
      </div>
      <div className="overflow-responsive">
        <table
          width="100%"
          cellSpacing={2}
          cellPadding={2}
          border={0}
          className="table compete-game-"
          style={{ whiteSpace: "nowrap", tableLayout: "auto" }}>
          <thead>
            <tr>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                height={25}
                align="center">
                SESSION{" "}
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                align="center">
                RUN
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                valign="middle"
                align="center">
                RATE
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                valign="middle"
                align="center">
                AMOUNT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                align="center">
                MODE
              </td>
            </tr>
          </thead>
          <tbody id="MySessionBets">
            {sessionBets?.map((items) => {
              return (
                <tr
                  style={{
                    borderBottom: "1px solid #3d8282",
                    background: items?.back ? "#a7d8fd" : "#f9c9d4",
                  }}>
                  <td
                    style={{
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                      whiteSpace: "wrap",
                    }}>
                    {items?.nation}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.priveValue}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.rate}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.amount}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.back ? "Yes" : "No"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <br />
      <div
        className="fancybetdiv text-center"
        style={{ background: "#2a363b", padding: 2, letterSpacing: 1 }}>
        <h6
          className="mb-0"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px ",
            fontFamily: '"Roboto"',
          }}
          data-toggle="modal"
          data-target="#">
          COMPLETED FANCY BETS
        </h6>
      </div>
      <div className="overflow-responsive">
        <table
          width="100%"
          cellSpacing={2}
          cellPadding={2}
          border={0}
          className="table compete-game-"
          style={{ whiteSpace: "nowrap", tableLayout: "auto" }}>
          <thead>
            <tr>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                height={25}
                align="center">
                RUNNER{" "}
              </td>

              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                align="center">
                RUN
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                valign="middle"
                align="center">
                RATE
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                align="center">
                RESULT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                valign="middle"
                align="center">
                AMOUNT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                align="center">
                MODE
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "var(--bg-color)" }}
                align="center">
                P&amp;L
              </td>
              <td
                className="FontTextWhite10px border"
                style={{
                  color: "#fff ",
                  whiteSpace: "nowrap",
                  background: "var(--bg-color)",
                }}
                align="center">
                DATE{" "}
              </td>
            </tr>
          </thead>
          <tbody id="MySessionCompletedBets">
            {data?.data?.Fancy2Market?.map((items) => {
              if (items?.declared === "null") return null;
              return (
                <tr
                  style={{
                    borderBottom: "1px solid #3d8282",
                    background: items?.back ? "#a7d8fd" : "#f9c9d4",
                  }}>
                  <td
                    style={{
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.nation}
                  </td>

                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.priveValue}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.rate}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.declared}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.amount}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.back ? "Yes" : "No"}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.pnl}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {moment(items?.date).format("D/M/YYYY hh:mm:ss A")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MatchBets;
