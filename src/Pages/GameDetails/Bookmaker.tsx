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
}

const Bookmaker = ({
  oddsData,
  handleBetData,
  focusAmountInput,
  oddsPnl,
  minMax,
}: Props) => {
  const filteredBookData = (oddsData || []).filter(Boolean);
  const processedBookData = [...filteredBookData];

  if (processedBookData.length >= 2) {
    const allB1Same = processedBookData.every(
      (item) => item.b1 === processedBookData[0].b1
    );

    if (allB1Same) {
      // ✅ New condition: check if all l1 are also the same
      const allL1Same = processedBookData.every(
        (item) => item.l1 === processedBookData[0].l1
      );

      if (!allL1Same) {
        // If same b1 but different l1, keep the one with higher l1
        const maxL1Index = processedBookData.reduce(
          (maxIdx, curr, idx, arr) => (curr.l1 > arr[maxIdx].l1 ? idx : maxIdx),
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

        return curr.b1 < arr[minIdx].b1 ? idx : minIdx;
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

  return (
    <div className="overflow-responsive">
      <table className="bookmaker-table bet-table" width="100%">
        <thead>
          <tr>
            <th className="bm-head ">
             <span className="text-blink"> BOOKMAKER</span>
              <span className="bm-max text-blink">MAX: {minMaxData?.maxbet}</span>
            </th>
            <th className="bm-head bm-lagai">LAGAI</th>
            <th className="bm-head bm-khai">KHAI</th>
          </tr>
        </thead>

        <tbody>
          {(filteredBookData.length > 3
            ? filteredBookData
            : processedBookData
          )?.map((bookmaker, index) => {
            const oddsData = oddsPnl?.filter(
              (item) => item?.marketId === bookmaker?.mid
            );

            const oddsPnlData = oddsData?.[0]
              ? {
                [oddsData[0].selection1]: oddsData[0].pnl1,
                [oddsData[0].selection2]: oddsData[0].pnl2,
                [oddsData[0].selection3]: oddsData[0].pnl3,
              }
              : {};

            return (
              <tr key={index} className="bm-row">
                {/* TEAM */}
                <td className="bm-team">
                  {bookmaker.nation}
                  <span className="bm-pl">
                    {oddsPnlData[parseInt(bookmaker.sid)] || 0}
                  </span>
                </td>

                {/* LAGAI */}
                <td
                  className="bm-back"
                  onClick={() => {
                    if (bookmaker?.gstatus?.toLowerCase() !== "suspended") {
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
                  {bookmaker?.gstatus?.toLowerCase() !== "suspended"
                    ? bookmaker.b1
                    : 0}
                </td>

                {/* KHAI */}
                <td
                  className="bm-lay"
                  onClick={() => {
                    if (bookmaker?.gstatus?.toLowerCase() !== "suspended") {
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
                  {bookmaker?.gstatus?.toLowerCase() !== "suspended"
                    ? bookmaker.l1
                    : 0}
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
