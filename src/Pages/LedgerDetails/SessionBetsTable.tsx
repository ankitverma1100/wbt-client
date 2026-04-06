import moment from "moment";
import SectionHeader from "./SectionHeader";

const SessionBetsTable = ({ sessionBets }: { sessionBets: any[] }) => (
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
              cellSpacing={0}
            >
              <tbody>
                <tr>
                  <td align="left" valign="top" style={{ border: 0, padding: 0 }}>
                    <SectionHeader title="SESSION Bets" />
                  </td>
                </tr>
                <tr>
                  <td align="left" valign="top" style={{ border: 0, padding: 0 }}>
                    <table width="100%" border={0} cellPadding={20} cellSpacing={2}>
                      <tbody>
                        <tr>
                          <td
                            width="35%"
                            height={25}
                            align="center"
                            valign="middle"
                            className="font_text_white10px"
                            style={{
                              verticalAlign: "middle",
                              textAlign: "center",
                              paddingRight: 5,
                              color: "#fff",
                              background:
                                "linear-gradient(to right, #8C002B, #C2003B)",
                            }}
                          >
                            Runner
                          </td>
                          <td
                            width="20%"
                            align="center"
                            valign="middle"
                            className="font_text_white10px"
                            style={{
                              verticalAlign: "middle",
                              textAlign: "center",
                              paddingRight: 5,
                              color: "#fff",
                              background:
                                "linear-gradient(to right, #8C002B, #C2003B)",
                            }}
                          >
                            Date &amp; Time
                          </td>
                          <td
                            width="8%"
                            align="center"
                            valign="middle"
                            className="font_text_white10px"
                            style={{
                              verticalAlign: "middle",
                              textAlign: "center",
                              color: "#fff",
                              background:
                                "linear-gradient(to right, #8C002B, #C2003B)",
                            }}
                          >
                            Rate
                          </td>
                          <td
                            width="7%"
                            align="center"
                            valign="middle"
                            className="font_text_white10px"
                            style={{
                              verticalAlign: "middle",
                              textAlign: "center",
                              color: "#fff",
                              background:
                                "linear-gradient(to right, #8C002B, #C2003B)",
                            }}
                          >
                            Run
                          </td>
                          <td
                            width="7%"
                            align="center"
                            valign="middle"
                            className="font_text_white10px"
                            style={{
                              verticalAlign: "middle",
                              textAlign: "center",
                              color: "#fff",
                              background:
                                "linear-gradient(to right, #8C002B, #C2003B)",
                            }}
                          >
                            Amount
                          </td>
                          <td
                            width="6%"
                            align="center"
                            valign="middle"
                            className="font_text_white10px"
                            style={{
                              verticalAlign: "middle",
                              textAlign: "center",
                              color: "#fff",
                              background:
                                "linear-gradient(to right, #8C002B, #C2003B)",
                            }}
                          >
                            Mode
                          </td>
                          <td
                            width="9%"
                            align="center"
                            valign="middle"
                            className="font_text_white10px"
                            style={{
                              verticalAlign: "middle",
                              textAlign: "center",
                              color: "#fff",
                              background:
                                "linear-gradient(to right, #8C002B, #C2003B)",
                            }}
                          >
                            Result
                          </td>
                          <td
                            width="8%"
                            align="center"
                            valign="middle"
                            className="font_text_white10px"
                            style={{
                              verticalAlign: "middle",
                              textAlign: "center",
                              color: "#fff",
                              background:
                                "linear-gradient(to right, #8C002B, #C2003B)",
                            }}
                          >
                            P&amp;L
                          </td>
                        </tr>
                        {sessionBets.map((items) => {
                          const modeText = String(
                            items?.mode ||
                              items?.type ||
                              items?.betType ||
                              items?.selectionName ||
                              items?.runner ||
                              ""
                          ).toUpperCase();
                          const isLagai =
                            modeText === "LAGAI" ||
                            modeText === "YES" ||
                            modeText.includes("YES");
                          const isKhai =
                            modeText === "KHAI" ||
                            modeText === "NO" ||
                            modeText === "NOT" ||
                            modeText.includes("NO");
                          const rowClass = isLagai
                            ? "ledger-row-lagai"
                            : isKhai
                            ? "ledger-row-khai"
                            : "";
                          return (
                          <tr
                            key={items?.selectionId || items?.id || items?.selectionName}
                            className={rowClass}
                          >
                            <td align="center" valign="middle">
                              {items?.selectionName}
                            </td>
                            <td align="center" valign="middle">
                              {(() => {
                                const raw =
                                  items?.dateTime || items?.date || items?.createdAt;
                                if (!raw) {
                                  return "";
                                }
                                const parsed = moment(raw);
                                if (parsed.isValid()) {
                                  return parsed.format("YYYY-MM-DD HH:mm:ss");
                                }
                                const fallback = moment(
                                  raw,
                                  "ddd MMM DD HH:mm:ss [IST] YYYY",
                                  true
                                );
                                return fallback.isValid()
                                  ? fallback.format("YYYY-MM-DD HH:mm:ss")
                                  : "";
                              })()}
                            </td>
                            <td align="center" valign="middle">
                              {items?.rate}
                            </td>
                            <td align="center" valign="middle">
                              {items?.run}
                            </td>
                            <td align="center" valign="middle">
                              {items?.amount}
                            </td>
                            <td align="center" valign="middle">
                              {items?.mode}
                            </td>
                            <td align="center" valign="middle">
                              {items?.declared}
                            </td>
                            <td
                              align="center"
                              valign="middle"
                              style={{
                                                                color: items?.netPnl >= 0 ? "green" : "red",
                              }}
                            >
                              {items?.netPnl}
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

export default SessionBetsTable;
