import { useParams } from "react-router-dom";
import {
  useGetBetListBymatchIdQuery,
  useActiveEventMutation,
} from "../../store/service/userServices/userServices";
import { useActiveMatchQuery } from "../../store/service/odds/oddsServices";
import { Modal } from "antd";
import { useState, useEffect } from "react";
import moment from "moment";

/* ---------------- ICONS ---------------- */
const CalenderIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg>
);

const ClockIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="clock-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg>
);

const MatchBets = () => {
  const { id } = useParams();
  const [openCompletedFancy, setOpenCompletedFancy] = useState(false);
  const { data } = useGetBetListBymatchIdQuery(
    {
      matchId: id ?? "",
      activeBet: true,
    },
    { pollingInterval: 3000 }
  );

  const [trigger, { data: activeEventData }] = useActiveEventMutation();
  const { data: activeMatchData } = useActiveMatchQuery();
  const [openAllEvents, setOpenAllEvents] = useState(false);
  const [activeMatches, setActiveMatches] = useState<any[]>([]);

  useEffect(() => {
    if (openAllEvents) {
      trigger();
    }
  }, [openAllEvents]);

  useEffect(() => {
    if (!openAllEvents) return;
    if (!activeMatchData || !activeEventData) return;

    const combined =
      activeMatchData?.data
        ?.flatMap((item: any) =>
          activeEventData.data
            .filter((m: any) => m?.eventId === item?.matchId)
            .map((m: any) => ({ ...item, active: m.active }))
        )
        ?.sort(
          (a: any, b: any) =>
            new Date(a.openDate).getTime() - new Date(b.openDate).getTime()
        ) ?? [];

    setActiveMatches(combined);
  }, [openAllEvents, activeMatchData, activeEventData]);


  const sessionBets =
    data?.data?.Fancy2Market?.filter(
      (item) => item?.declared === "null" || !item?.declared?.length
    ) ?? [];

  const completedSessionBets =
    data?.data?.Fancy2Market?.filter(
      (item) => item?.declared !== "null" && item?.declared?.length > 0
    ) ?? [];

  const totalPnl = completedSessionBets.reduce(
    (acc, item) => acc + (item?.netPnl || 0),
    0
  );
  return (
    <>




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
                colSpan={6}
                className="FontTextWhite10px border theme-gradient-cell"
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontFamily: '"Roboto"',
                  letterSpacing: 1,
                  padding: "5px",
                }}>
                MATCH BETS
              </td>
            </tr>
            <tr>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                height={25}
                align="center">
                #
              </td>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                align="center">
                RUNNER NAME
              </td>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                align="center">
                BET MODE
              </td>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                valign="middle"
                align="center">
                BET PRICE
              </td>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                valign="middle"
                align="center">
                BET VALUE
              </td>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                valign="middle"
                align="center">
                BET AMOUNT
              </td>
            </tr>
          </thead>
          <tbody id="MyTeamBets">
            {data?.data?.Bookmaker?.map((items, index) => {
              return (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #3d8282",
                    background: items?.back ? "#a7d8fd" : "#f9c9d4",
                  }}>
                  <td
                    style={{
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                      textAlign: "center",
                    }}>
                    {index + 1}
                  </td>
                  <td
                    style={{
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                      whiteSpace: "wrap",
                      textAlign: "center", // Center align consistent with screenshot
                    }}>
                    {items?.nation}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.back ? "LAGAI" : "KHAI"}
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
                    {(items?.pnl)}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
                colSpan={6}
                className="FontTextWhite10px border theme-gradient-cell"
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontFamily: '"Roboto"',
                  letterSpacing: 1,
                  padding: "5px",
                }}>
                FANCY BETS
              </td>
            </tr>
            <tr>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                height={25}
                align="center">
                #
              </td>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                align="center">
                RUNNER NAME
              </td>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                align="center">
                BET MODE
              </td>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                valign="middle"
                align="center">
                BET PRICE
              </td>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                valign="middle"
                align="center">
                BET VALUE
              </td>
              <td
                className="FontTextWhite10px border theme-gradient-cell"
                style={{ color: "#fff " }}
                valign="middle"
                align="center">
                BET AMOUNT
              </td>
            </tr>
          </thead>
          <tbody id="MySessionBets">
            {sessionBets?.map((items, index) => {
              return (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #3d8282",
                    background: items?.back ? "#a7d8fd" : "#f9c9d4",
                  }}>
                  <td
                    style={{
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                      textAlign: "center",
                    }}>
                    {index + 1}
                  </td>
                  <td
                    style={{
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                      whiteSpace: "wrap",
                      textAlign: "center", // Center align consistent with screenshot
                    }}>
                    {items?.nation}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.back ? "Yes" : "Not"}
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
                    {items?.pnl}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


      <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", paddingBottom: "20px" }}>
        <button
          className="theme-gradient-button theme-gradient-button--wide"
          onClick={() => setOpenCompletedFancy(true)}>
          Completed Bets
        </button>
        <button
          className="theme-gradient-button theme-gradient-button--narrow"
          onClick={() => setOpenAllEvents(true)}>
          All Events
        </button>
      </div>

      <Modal
        title={
          <div
            style={{
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}>
            COMPLETED BETS
          </div>
        }
        centered
        open={openCompletedFancy}
        onCancel={() => setOpenCompletedFancy(false)}
        closeIcon={<span style={{ color: "#fff", fontSize: "20px" }}>×</span>}
        footer={null}
        width={1000}
        styles={{
          header: {
            padding: "15px",
            marginBottom: "20px",
            borderBottom: "none",
          },
          content: {
            padding: "0",
            overflow: "hidden",
            background: "#fff",
          },
          body: {
            padding: "24px",
          },
        }}
        className="completed-bets-modal">
        <div
          className="theme-gradient-banner">
          COMPLETED BETS
        </div>
        <div className="overflow-responsive">
          <table
            width="100%"
            cellSpacing={2}
            cellPadding={2}
            border={0}
            className="table compete-game-"
            style={{ whiteSpace: "nowrap", tableLayout: "auto", margin: 0 }}>
            <thead>
              <tr>
                <td
                  className="FontTextWhite10px border theme-gradient-cell"
                  style={{ color: "#fff " }}
                  height={25}
                  align="center">
                  #
                </td>
                <td
                  className="FontTextWhite10px border theme-gradient-cell"
                  style={{ color: "#fff " }}
                  align="center">
                  RUNNER NAME
                </td>
                <td
                  className="FontTextWhite10px border theme-gradient-cell"
                  style={{ color: "#fff " }}
                  align="center">
                  TYPE
                </td>
                <td
                  className="FontTextWhite10px border theme-gradient-cell"
                  style={{ color: "#fff " }}
                  valign="middle"
                  align="center">
                  PRICE
                </td>
                <td
                  className="FontTextWhite10px border theme-gradient-cell"
                  style={{ color: "#fff " }}
                  valign="middle"
                  align="center">
                  VALUE
                </td>
                <td
                  className="FontTextWhite10px border theme-gradient-cell"
                  style={{ color: "#fff " }}
                  valign="middle"
                  align="center">
                  AMOUNT
                </td>
                <td
                  className="FontTextWhite10px border theme-gradient-cell"
                  style={{ color: "#fff " }}
                  align="center">
                  RESULT
                </td>
                <td
                  className="FontTextWhite10px border theme-gradient-cell"
                  style={{ color: "#fff " }}
                  align="center">
                  STATUS
                </td>
              </tr>
            </thead>
            <tbody id="MySessionCompletedBets">
              {completedSessionBets?.map((items, index) => {
                const isYes = !!items?.back;
                const rowBackground = isYes
                  ? "var(--yes-color)"
                  : "var(--no-color)";
                return (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #ccc",
                      background: rowBackground,
                    }}>
                    <td
                      style={{
                        borderRight: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                        textAlign: "center",
                      }}>
                      {index + 1}
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                        whiteSpace: "wrap",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}>
                      {items?.nation}
                    </td>

                    <td
                      style={{
                        textAlign: "center",
                        borderRight: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}>
                      {items?.back ? "YES" : "NOT"}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderRight: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}>
                      {items?.priveValue ?? items?.rate}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderRight: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}>
                      {(items?.amount * items?.rate).toFixed(2)}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderRight: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}>
                      {items?.amount}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderRight: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}>
                      {items?.declared}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderRight: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                        color: items?.netPnl > 0 ? "green" : "red",
                        fontWeight: "bold",
                      }}>
                      {items?.netPnl > 0 ? "WON" : "LOSS"}
                    </td>
                  </tr>
                );
              })}
              {/* TOTAL ROW */}
              <tr style={{ borderTop: "2px solid #000" }}>
                <td
                  colSpan={4}
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    padding: "10px",
                    borderRight: "1px solid #ccc",
                  }}>
                  TOTAL PLUS MINUS
                </td>
                <td
                  colSpan={4}
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: totalPnl >= 0 ? (totalPnl === 0 ? "red" : "green") : "red",
                  }}>
                  {totalPnl}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>

      <Modal
        title={
          <div
            style={{
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}>
            ALL EVENTS
          </div>
        }
        centered
        open={openAllEvents}
        onCancel={() => setOpenAllEvents(false)}
        closeIcon={<span style={{ color: "#fff", fontSize: "20px" }}>×</span>}
        footer={null}
        width={780}
        styles={{
          header: {
            padding: "15px",
            marginBottom: "0",
            borderBottom: "none",
          },
          content: {
            padding: "0",
            overflow: "hidden",
            background: "#fff",
          },
          body: {
            padding: "12px",
            maxHeight: "65vh",
            overflowY: "auto",
          },
        }}
        className="all-events-modal">
        <style>{`
            @keyframes pulse-dot { 0% { transform: scale(0.8); opacity: 0.5; } 100% { transform: scale(2.4); opacity: 0; } }
            @keyframes blink-text { 0% {color: #c2e884;} 20% {color: #c2e884;} 40% {color: #ff7f00;} 60% {color: #ff7f00;} 80% {color: #36cb3b;} 100% {color: #36cb3b;} }
          `}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", padding: "16px 16px 16px" }}>
          {(activeMatches?.length ? activeMatches : activeEventData?.data || []).map((event: any, index: number) => {
            const title = event?.matchName || event?.gameName || "UNKNOWN SERIES";
            const eventType =
              event?.eventTypeName || event?.seriesName || event?.eventType || "";
            const isLive = !!event?.inPlay;
            return (
              <div
                key={index}
                className="theme-gradient-card"
                style={{
                  borderRadius: "6px",
                  padding: "14px 16px",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.35)",
                }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      textTransform: "uppercase",
                    }}>
                    {title}
                  </div>
                  {eventType && (
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        opacity: 0.9,
                      }}>
                      {eventType}
                    </div>
                  )}
                </div>

                <div className="row" style={{ alignItems: "center" }}>
                  <div className="col-sm-8 col-8">
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase" }}>
                        <ClockIcon />
                        <span>{moment(event?.openDate).format("hh:mm A")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-4" style={{ display: "flex", justifyContent: "flex-end" }}>
                    {isLive && (
                      <div style={{ display: "flex", alignItems: "center", fontSize: "13px", color: "rgb(255, 71, 87)", textTransform: "uppercase", fontWeight: "700" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fadb14", position: "relative", flexShrink: 0, marginRight: "7px" }}>
                          <span style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderWidth: "1px", borderStyle: "solid", borderColor: "inherit", borderRadius: "50%", animation: "pulse-dot 1.2s ease-in-out infinite", content: '""' }}></span>
                        </span>
                        LIVE
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default MatchBets;
