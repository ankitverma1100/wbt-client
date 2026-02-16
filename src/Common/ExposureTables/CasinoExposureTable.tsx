type Props = {
  items: any[];
};

const formatRoundId = (matchName?: string, dateStr?: string) => {
  if (!matchName && !dateStr) return "-";
  const datePart = dateStr?.split(" ")[0];
  if (!datePart) return matchName || "-";
  const [year, month, day] = datePart.split("-");
  if (!year || !month || !day) return matchName || "-";
  const formattedDate = `${day}-${month}-${year}`;
  return matchName ? `${formattedDate}-${matchName}` : formattedDate;
};

const CasinoExposureTable = ({ items }: Props) => {
  if (!items || items.length === 0) return null;

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>
        CASINO OPEN BETS
      </div>
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          borderRadius: "8px 8px 0 0",
          maxWidth: "100%",
          WebkitOverflowScrolling: "touch",
          display: "block",
        }}
      >
        <table
          width="100%"
          cellSpacing={0}
          cellPadding={6}
          style={{ borderCollapse: "collapse", minWidth: 900, borderRadius: "8px 8px 0 0" }}
        >
          <thead>
            <tr style={{ background: "#0B6CCF", color: "#fff" }}>
              <th style={{ border: "1px solid #000" }}>#</th>
              <th style={{ border: "1px solid #000" }}>ROUND ID</th>
              <th style={{ border: "1px solid #000" }}>RUNNER NAME</th>
              <th style={{ border: "1px solid #000" }}>BET PRICE</th>
              <th style={{ border: "1px solid #000" }}>BET VALUE</th>
              <th style={{ border: "1px solid #000" }}>BET AMOUNT</th>
              <th style={{ border: "1px solid #000" }}>BET PROFIT</th>
              <th style={{ border: "1px solid #000" }}>BET LOSS</th>
              <th style={{ border: "1px solid #000" }}>BET STATUS</th>
            </tr>
          </thead>
          <tbody style={{ background: "#FFB1C1" }}>
            {items.map((item, index) => {
              const roundId = formatRoundId(item?.matchName, item?.date);
              const runner = item?.selectionName ?? item?.runnerName ?? "-";
              const betPrice = item?.odds ?? item?.price ?? "-";
              const betValue = item?.selectionName ?? item?.nation ?? "-";
              const betAmount = item?.stake ?? item?.amount ?? "-";
              const betProfit = item?.profit ?? item?.pnl ?? "-";
              const betLoss = item?.loss ?? item?.liability ?? "-";
              const betStatus = item?.status ?? "OPEN";
              return (
                <tr key={`${roundId}-${index}`}>
                <td style={{ border: "1px solid #fff" }}>{index + 1}</td>
                <td style={{ border: "1px solid #fff" }}>{roundId}</td>
                <td style={{ border: "1px solid #fff" }}>{runner}</td>
                <td style={{ border: "1px solid #fff" }}>{betPrice}</td>
                <td style={{ border: "1px solid #fff" }}>{betValue}</td>
                <td style={{ border: "1px solid #fff" }}>{betAmount}</td>
                <td style={{ border: "1px solid #fff" }}>{betProfit}</td>
                <td style={{ border: "1px solid #fff" }}>{betLoss}</td>
                <td style={{ border: "1px solid #fff" }}>{betStatus}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CasinoExposureTable;
