interface Props {
  oddsData: BookmakerData[] | undefined;
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
  oddsPnl: OdssPnl[] | undefined;
}

const Bookmaker = ({
  oddsData,
  handleBetData,
  focusAmountInput,
  oddsPnl,
}: Props) => {
  return (
    <div className="overflow-responsive">
      <table
        width="100%"
        cellSpacing={2}
        cellPadding={2}
        border={0}
        className="table bg-white lagai_khai_tbl"
        style={{ marginBottom: "0rem " }}>
        <tbody>
          <tr>
            <td
              className="FontTextWhite10px"
              style={{ color: "#fff ", background: "#7d5c0e" }}
              width="45%"
              valign="middle"
              height={25}
              align="center">
              Min : {oddsData?.[0]?.minBet} Max : {oddsData?.[0]?.maxBet}
            </td>
            <td
              className="FontTextWhite10px"
              style={{ color: "#fff ", background: "#7d5c0e" }}
              width="15%"
              valign="middle"
              align="center">
              LAGAI
            </td>
            <td
              className="FontTextWhite10px"
              style={{ color: "#fff ", background: "#7d5c0e" }}
              width="15%"
              valign="middle"
              align="center">
              KHAI
            </td>
            <td
              className="FontTextWhite10px"
              style={{ color: "#fff ", background: "#7d5c0e" }}
              width="15%"
              valign="middle"
              align="center">
              POS.
            </td>
          </tr>
          {oddsData?.map((bookmaker, index: number) => {
            const oddsData = oddsPnl?.filter(
              (item) => item?.marketId === bookmaker?.mid
            );
            const oddsPnlData = oddsData?.[0]
              ? {
                  [oddsData?.[0].selection1]: oddsData?.[0].pnl1,
                  [oddsData?.[0].selection2]: oddsData?.[0].pnl2,
                  [oddsData?.[0].selection3]: oddsData?.[0].pnl3,
                }
              : {};
            return (
              <tr key={index}>
                <td
                  className="FontTextBlue dsk-visible"
                  style={{ verticalAlign: "middle", background: "#fff" }}
                  valign="middle"
                  align="center">
                  <span
                    className="FontTextBlue"
                    style={{
                      verticalAlign: "middle",
                      display: "flex",
                      fontWeight: 400,
                      paddingLeft: 10,
                    }}>
                    {bookmaker.nation} <br /> <span style={{ color: "#f00" }} />
                  </span>
                </td>
                <td
                  className="FontTextBlue mobi-visible"
                  style={{ verticalAlign: "middle", background: "#fff" }}
                  valign="middle"
                  align="left">
                  <span
                    className="FontTextBlue"
                    style={{
                      verticalAlign: "middle",
                      display: "flex",
                      fontWeight: 400,
                      paddingLeft: 10,
                    }}>
                    {bookmaker.nation}
                  </span>
                </td>
                <td
                  style={{
                    verticalAlign: "middle",
                    backgroundColor: "#FFF",
                    fontWeight: 600,
                    color: "#3920ce ",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                  valign="middle"
                  color="green"
                  align="center"
                  onClick={() => {
                    if (bookmaker?.gstatus.toLowerCase() !== "suspended") {
                      handleBetData(
                        false,
                        true,
                        bookmaker?.b1,
                        "Bookmaker",
                        bookmaker?.sid,
                        bookmaker?.bs1,
                        bookmaker?.mid,
                        bookmaker?.nation,
                        "LAGAI",
                        new Date()
                      );
                      focusAmountInput();
                    }
                  }}>
                  {bookmaker.b1}
                </td>
                <td
                  className="textTeamHead"
                  style={{
                    verticalAlign: "middle",
                    background: "#FFF",
                    color: "#e02131 ",
                    fontWeight: 600,
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (bookmaker?.gstatus.toLowerCase() !== "suspended") {
                      handleBetData(
                        false,
                        false,
                        bookmaker?.l1,
                        "Bookmaker",
                        bookmaker?.sid,
                        bookmaker?.ls1,
                        bookmaker?.mid,
                        bookmaker?.nation,
                        "KHAI",
                        new Date()
                      );
                      focusAmountInput();
                    }
                  }}
                  valign="middle"
                  align="center">
                  {bookmaker.l1}
                </td>
                <td
                  className="FontTextWhite"
                  id="Positiont562"
                  style={{
                    color:
                      oddsPnlData[parseInt(bookmaker?.sid)] > 0
                        ? "green"
                        : "#f00",
                    fontWeight: 400,
                    verticalAlign: "middle",
                    background: "#FFF",
                  }}
                  valign="middle"
                  align="center">
                  {oddsPnlData[parseInt(bookmaker?.sid)] || 0}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Bookmaker;
