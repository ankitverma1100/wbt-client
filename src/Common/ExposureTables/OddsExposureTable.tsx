type Props = {
  items: any[];
};

const OddsExposureTable = ({ items }: Props) => {
  if (!items || items.length === 0) return null;

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>
        MATCH OPEN BETS
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
              <th style={{ border: "1px solid #000" }}>RUNNER NAME</th>
              <th style={{ border: "1px solid #000" }}>BET PRICE</th>
              <th style={{ border: "1px solid #000" }}>BET VALUE</th>
              <th style={{ border: "1px solid #000" }}>BET AMOUNT</th>
              <th style={{ border: "1px solid #000" }}>BET PROFIT</th>
              <th style={{ border: "1px solid #000" }}>BET LOSS</th>
              <th style={{ border: "1px solid #000" }}>BET STATUS</th>
            </tr>
          </thead>
          <tbody style={{ background: "#79B9FF" }}>
            {items.map((item, index) => {
              const match = item?.matchName ?? item?.eventName ?? "-";
              const runner = item?.selectionName ?? item?.runnerName ?? "-";
              const betPrice = item?.odds ?? item?.price ?? "-";
              const betAmount = item?.stake ?? item?.amount ?? "-";
              const mode = item?.back ? "L" : "K";
              const betProfit = item?.profit ?? item?.pnl ?? "-";
              const betLoss = item?.loss ?? item?.liability ?? "-";
            const betStatus = item?.status ?? "OPEN";
            return (
              <tr key={`${match}-${runner}-${index}`}>
                <td style={{ border: "1px solid #fff" }}>{index + 1}</td>
                <td style={{ border: "1px solid #fff" }}>{runner}</td>
                <td style={{ border: "1px solid #fff" }}>{betPrice}</td>
                <td style={{ border: "1px solid #fff" }}>0</td>
                <td style={{ border: "1px solid #fff" }}>{betAmount}</td>
                <td style={{ border: "1px solid #fff" }}>{betProfit}</td>
                <td style={{ border: "1px solid #fff" }}>{betLoss}</td>
                <td style={{ border: "1px solid #fff" }}>
                  <span
                    style={{
                      background: "#f6ffed",
                      color: "#389e0d",
                      border: "1px solid #b7eb8f",
                      padding: "2px 8px",
                      borderRadius: 6,
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    {betStatus}
                  </span>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OddsExposureTable;
