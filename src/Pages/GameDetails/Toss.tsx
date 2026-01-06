/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  oddsData: any[] | undefined;
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
  oddsPnl: any[] | undefined;
}

const Toss = ({
  oddsData,
  handleBetData,
  focusAmountInput,
  oddsPnl,
}: Props) => {
  const data = (oddsData || []).filter(Boolean);

  return (
    <div className="overflow-responsive">
      <table className="bookmaker-table bet-table" width="100%">
        <thead>
          <tr>
            <th className="bm-head">
              <span className="text-blink">TOSS</span>
            </th>
            <th className="bm-head bm-lagai">LAGAI</th>
            <th className="bm-head bm-khai">KHAI</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            const pnlRow = oddsPnl?.find(
              (pnl) => pnl?.marketId === item?.mid
            );

            const pnl =
              pnlRow?.[item.sid as keyof typeof pnlRow] || 0;

            const isSuspended =
              item?.gstatus?.toLowerCase() === "suspended";

            return (
              <tr key={index} className="bm-row">
                {/* TEAM */}
                <td className="bm-team">
                  {item.nation}
                  <span className="bm-pl">{pnl}</span>
                </td>

                {/* LAGAI */}
                <td
                  className="bm-back"
                  onClick={() => {
                    if (!isSuspended && item.b1 > 0) {
                      handleBetData(
                        false,
                        true,
                        item.b1,
                        "Toss",
                        item.sid,
                        item.bs1,
                        item.mid,
                        item.nation,
                        "LAGAI",
                        new Date()
                      );
                      focusAmountInput();
                    }
                  }}
                >
                  {!isSuspended ? item.b1 : 0}
                </td>

                {/* KHAI */}
                <td
                  className="bm-lay"
                  onClick={() => {
                    if (!isSuspended && item.l1 > 0) {
                      handleBetData(
                        false,
                        false,
                        item.l1,
                        "Toss",
                        item.sid,
                        item.ls1,
                        item.mid,
                        item.nation,
                        "KHAI",
                        new Date()
                      );
                      focusAmountInput();
                    }
                  }}
                >
                  {!isSuspended ? item.l1 : 0}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Toss;
