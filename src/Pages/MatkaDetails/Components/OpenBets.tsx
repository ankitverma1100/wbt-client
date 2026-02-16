interface MatkaBet {
  matkaName?: string;
  priveValue?: number;
  nation?: string;
  amount?: number;
  declared?: string;
  pnl?: number;
  betTime?: string;
  date?: string;
  selectionId?: number;
  marketId?: string;
  odds?: number;
}

interface Props {
  bets: MatkaBet[];
}

const formatBetTime = (timeStr?: string) => {
  if (!timeStr) return "-";
  try {
    const [datePart, timePart] = timeStr.split(" ");
    const [year, month, day] = datePart.split("-");
    const [hours, minutes, seconds] = timePart.split(":");
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  } catch (error) {
    return timeStr;
  }
};

const getPnlClass = (pnl?: number) => {
  const value = typeof pnl === "number" ? pnl : 0;
  if (value > 0) return "pnl-positive";
  if (value < 0) return "pnl-negative";
  return "pnl-zero";
};

export default function OpenBets({ bets }: Props) {
  return (
    <div className="game-content">
      <div className="open-bets-container">
        <div className="open-bets-title">OPEN BETS</div>

        <div className="open-bets-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>RUNNER NAME</th>
                <th>BET PRICE</th>
                <th>BET VALUE</th>
                <th>BET AMOUNT</th>
                <th>BET PROFIT</th>
                <th>BET LOSS</th>
                <th>BET STATUS</th>
              </tr>
            </thead>
            <tbody>
              {bets.length === 0 ? (
                <tr>
                  <td colSpan={8}>No bets found</td>
                </tr>
              ) : (
                bets.map((bet, index) => {
                  const pnl = bet.pnl || 0;
                  const profit = pnl > 0 ? pnl : 0;
                  const loss = pnl < 0 ? Math.abs(pnl) : 0;

                  return (
                    <tr
                      key={`${bet.selectionId || "bet"}-${index}`}
                      style={{ fontWeight: "bold" }}
                    >
                      <td>{index + 1}</td>
                      <td>{bet.matkaName || "-"} {bet.nation || "-"}</td>
                      <td>{bet.priveValue ?? "-"}</td>
                      <td>{bet.nation || "-"}</td>
                      <td>{bet.amount ?? "-"}</td>
                      <td className={getPnlClass(profit)}>
                        {profit ? `${profit}` : 0}
                      </td>
                      <td className={getPnlClass(-loss)}>
                        {bet.amount ?? "-"}
                      </td>
                      <td>OPEN</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
