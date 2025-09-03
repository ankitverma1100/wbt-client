interface OddsData {
  oddsData: Fancy2[] | undefined;
  handleBetData: (
    isFancy: boolean,
    isBack: boolean,
    odds: number,
    marketName: string,
    selectionId: string,
    priceValue: number,
    marketId: string,
    name: string,
    mode: string,
    date: any
  ) => void;
  focusAmountInput: () => void;
}

const Session = ({ oddsData, handleBetData, focusAmountInput }: OddsData) => {
  return (
    <div className="overflow-responsive">
      <table
        width="100%"
        cellSpacing={2}
        cellPadding={2}
        border={0}
        className="table bg-white mb-0">
        <tbody id="session_data">
          <tr>
            <td
              className="FontTextWhite10px border"
              width="50%"
              style={{
                color: "#fff ",
                fontSize: "13px ",
                background: "#7d5c0e",
              }}
              height={25}
              align="center">
              SESSION{" "}
              <a href="#">
                <svg
                  className="svg-inline--fa fa-info-circle fa-w-16 text-white"
                  style={{ float: "right" }}
                  aria-hidden="true"
                  data-prefix="fa"
                  data-icon="info-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg="">
                  <path
                    fill="currentColor"
                    d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                  />
                </svg>
              </a>
            </td>
            <td
              className="FontTextWhite10px border"
              width="25%"
              style={{
                color: "#fff ",
                fontSize: "13px ",
                background: "#7d5c0e",
              }}
              align="center">
              NOT
            </td>
            <td
              className="FontTextWhite10px border"
              width="25%"
              style={{
                color: "#fff ",
                fontSize: "13px ",
                background: "#7d5c0e",
              }}
              align="center">
              YES{" "}
            </td>
          </tr>
          {[...(oddsData || [])]
            .sort((a, b) => Number(a.srno) - Number(b.srno))
            ?.map((session, index) => (
              <tr key={index} style={{ position: "relative", height: "45px" }}>
                <td
                  className="FontTextWhite10px border"
                  style={{ color: "#000", fontSize: "13px" }}
                  align="left">
                  <span style={{ fontSize: "14px" }}>{session.nation}</span>
                  <p
                    style={{
                      marginBottom: "0px",
                      fontSize: "12px",
                      color: "#000",
                    }}>
                    Session Limit:{session?.maxBet}
                  </p>
                </td>
                {session?.gstatus.toLowerCase() === "suspended" ||
                session?.gstatus.includes("Ball") ? (
                  <td
                    style={{ height: 45 }}
                    className="FontTextWhite10px border suspen"
                    colSpan={2}>
                    {session?.gstatus?.toLocaleUpperCase()}
                  </td>
                ) : (
                  <>
                    <td
                      className={`FontTextWhite10px border`}
                      align="center"
                      style={{
                        verticalAlign: "middle",
                        background: "#FFF",
                        color: "#e02131 ",
                        fontWeight: 600,
                        fontSize: "16px",
                        cursor: "pointer",
                        position: "relative",
                      }}
                      onClick={() => {
                        if (session?.gstatus.toLowerCase() !== "suspended") {
                          handleBetData(
                            true,
                            false,
                            session?.l1,
                            "Fancy2",
                            session?.sid,
                            session?.ls1,
                            session?.mid,
                            session?.nation,
                            "No",
                            new Date()
                          );
                          focusAmountInput();
                        }
                      }}>
                      <div>{session.l1}</div>
                      <div style={{ fontSize: "10px" }}>{session.ls1}</div>
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{
                        verticalAlign: "middle",
                        backgroundColor: "#FFF",
                        fontWeight: 600,
                        color: "#3920ce ",
                        fontSize: "16px",
                        cursor: "pointer",
                        position: "relative",
                      }}
                      onClick={() => {
                        if (session?.gstatus.toLowerCase() !== "suspended") {
                          handleBetData(
                            true,
                            true,
                            session?.b1,
                            "Fancy2",
                            session?.sid,
                            session?.bs1,
                            session?.mid,
                            session?.nation,
                            "Yes",
                            new Date()
                          );
                          focusAmountInput();
                        }
                      }}
                      align="center">
                      <div>{session.b1}</div>
                      <div style={{ fontSize: "10px" }}>{session.bs1}</div>
                    </td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Session;
