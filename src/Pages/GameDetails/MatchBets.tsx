const MatchBets = () => {
  return (
    <>
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
          style={{ whiteSpace: "nowrap" }}>
          <thead>
            <tr>
              <td
                className="FontTextWhite10px border"
                style={{
                  color: "#fff ",
                  background: "#7d5c0e",
                }}
                height={25}
                align="center">
                TEAM{" "}
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                RATE
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                AMOUNT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                MODE
              </td>
              {/*<td class="FontTextWhite10px border" style="color: #fff ;"  align="center">P&L</td>*/}
            </tr>
          </thead>
          <tbody id="MyTeamBets"></tbody>
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
          style={{ whiteSpace: "nowrap" }}>
          <thead>
            <tr>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                height={25}
                align="center">
                SESSION{" "}
              </td>
              {/*<td class="FontTextWhite10px border" style="color: #fff ;white-space:nowrap;"   align="center">DATE </td>*/}
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                RUN
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                RATE
              </td>
              {/*<td class="FontTextWhite10px border" style="color: #fff ;"   align="center">RESULT</td>*/}
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                AMOUNT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                MODE
              </td>
              {/*<td class="FontTextWhite10px border" style="color: #fff ;"  align="center">P&L</td>*/}
            </tr>
          </thead>
          <tbody id="MySessionBets"></tbody>
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
          style={{ whiteSpace: "nowrap" }}>
          <thead>
            <tr>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                height={25}
                align="center">
                RUNNER{" "}
              </td>
              <td
                className="FontTextWhite10px border"
                style={{
                  color: "#fff ",
                  whiteSpace: "nowrap",
                  background: "#7d5c0e",
                }}
                align="center">
                DATE{" "}
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                RUN
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                RATE
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                RESULT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                AMOUNT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                MODE
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                P&amp;L
              </td>
            </tr>
          </thead>
          <tbody id="MySessionCompletedBets"></tbody>
        </table>
      </div>
    </>
  );
};

export default MatchBets;
