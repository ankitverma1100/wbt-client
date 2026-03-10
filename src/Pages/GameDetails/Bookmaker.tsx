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
  minMax: any;
  sseMarketLimits?: Record<string, any>;
}

const Bookmaker = ({
  oddsData,
  handleBetData,
  focusAmountInput,
  oddsPnl,
  minMax,
  sseMarketLimits,
}: Props) => {
  const filteredBookData = (oddsData || []).filter(Boolean);
  const processedBookData = [...filteredBookData];

  if (processedBookData.length >= 2) {
    const allB1Same = processedBookData.every(
      (item) => Number(item?.b1) === Number(processedBookData[0]?.b1)
    );

    if (allB1Same) {
      // ✅ New condition: check if all l1 are also the same
      const allL1Same = processedBookData.every(
        (item) => Number(item?.l1) === Number(processedBookData[0]?.l1)
      );

      if (!allL1Same) {
        // If same b1 but different l1, keep the one with higher l1
        const maxL1Index = processedBookData.reduce(
          (maxIdx, curr, idx, arr) =>
            Number(curr?.l1) > Number(arr[maxIdx]?.l1) ? idx : maxIdx,
          0
        );

        processedBookData.forEach((item, index) => {
          if (index !== maxL1Index) {
            processedBookData[index] = {
              ...item,
              b1: 0,
              l1: 0,
            };
          }
        });
      }
    } else {
      const minB1Index = processedBookData.reduce((minIdx, curr, idx, arr) => {
        const currStatus = curr?.gstatus?.toLowerCase();
        const minStatus = arr[minIdx]?.gstatus?.toLowerCase();

        if (currStatus === "suspended") return minIdx;
        if (minStatus === "suspended") return idx;

        return Number(curr?.b1) < Number(arr[minIdx]?.b1) ? idx : minIdx;
      }, 0);

      processedBookData.forEach((item, index) => {
        if (index !== minB1Index) {
          processedBookData[index] = {
            ...item,
            b1: 0,
            l1: 0,
          };
        }
      });
    }
  }

  const minMaxData = minMax?.find(
    (item: any) => item?.marketid === oddsData?.[0]?.mid
  );
  const sseLimit = oddsData?.[0]?.mid
    ? sseMarketLimits?.[oddsData?.[0]?.mid]
    : undefined;

  const formatMax = (value?: number) => {
    if (value === undefined || value === null) return "";
    if (value >= 1000) {
      return `${Math.round(value / 1000)}K`;
    }
    return String(value);
  };

  const formatMin = (value?: number) => {
    if (value === undefined || value === null) return "";
    if (value >= 1000) {
      return `${Math.round(value / 1000)}K`;
    }
    return String(value);
  };

  const displayMax = sseLimit?.maxBet ?? minMaxData?.maxbet;
  const displayMin = sseLimit?.minBet ?? minMaxData?.minbet;

  return (
    <div className="overflow-responsive">
      <table className="bookmaker-table bet-table" width="100%">
        <thead>
          <tr>
            <th className="bm-head">
              <span className="text-blink">BOOKMAKER</span>
              <span className="bm-max text-blink">
                MAX: {formatMax(displayMax)}
              </span>
              <span className="bm-max text-blink" style={{ marginLeft: 8 }}>
                MIN: {formatMin(displayMin)}
              </span>
            </th>
            <th className="bm-head bm-lagai">LAGAI</th>
            <th className="bm-head bm-khai">KHAI</th>
          </tr>
        </thead>

        <tbody>
          {processedBookData?.map((bookmaker, index) => {
            const isSuspended =
              bookmaker?.gstatus?.toLowerCase() === "suspended";
            const pnlRow = oddsPnl?.find(
              (pnl) => pnl?.marketId === bookmaker?.mid
            );
            const pnl =
              pnlRow
                ? bookmaker.sid === pnlRow.selection1
                  ? pnlRow.pnl1
                  : bookmaker.sid === pnlRow.selection2
                  ? pnlRow.pnl2
                  : bookmaker.sid === pnlRow.selection3
                  ? pnlRow.pnl3
                  : 0
                : 0;
            return (
              <tr key={index} className="bm-row">
                {/* TEAM */}
                <td className="bm-team">
                  {bookmaker.nation}
                  <span
                    className={`bm-pl bm-pl-float ${pnl >= 0 ? "bm-pl-positive" : "bm-pl-negative"}`}
                  >
                    {pnl}
                  </span>
                </td>

                {/* LAGAI */}
                <td
                  className="bm-back"
                  onClick={() => {
                    if (!isSuspended) {
                      handleBetData(
                        false,
                        true,
                        bookmaker.b1,
                        "Bookmaker",
                        bookmaker.sid,
                        bookmaker.bs1,
                        bookmaker.mid,
                        bookmaker.nation,
                        "LAGAI",
                        new Date()
                      );
                      focusAmountInput();
                    }
                  }}
                >
                  {!isSuspended ? bookmaker.b1 : 0}
                </td>

                {/* KHAI */}
                <td
                  className="bm-lay"
                  onClick={() => {
                    if (!isSuspended) {
                      handleBetData(
                        false,
                        false,
                        bookmaker.l1,
                        "Bookmaker",
                        bookmaker.sid,
                        bookmaker.ls1,
                        bookmaker.mid,
                        bookmaker.nation,
                        "KHAI",
                        new Date()
                      );
                      focusAmountInput();
                    }
                  }}
                >
                  {!isSuspended ? bookmaker.l1 : 0}
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
