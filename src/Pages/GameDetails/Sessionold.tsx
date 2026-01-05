/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "react-router-dom";
import {
  useGetFancyBookMutation,
} from "../../store/service/userServices/userServices";
import { Modal } from "antd";
import { useState } from "react";

interface Fancy2 {
  sid: string;
  srno: number;
  nation: string;
  gstatus: string;
  l1: number;
  ls1: number;
  b1: number;
  bs1: number;
  mid: string;
}

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
  minMax: any;
}

const Session = ({
  oddsData,
  handleBetData,
  focusAmountInput,
  minMax,
}: OddsData) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams() as { id: string };
  const [trigger, { data }] = useGetFancyBookMutation();

  const handleShowFancyBook = (fancyId: string) => {
    trigger({ matchId: id ?? "", fancyId });
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-responsive">
      <table className="bookmaker-table bet-table" width="100%">
        <thead>
          <tr>
            <th className="bm-head">SESSION</th>
            <th className="bm-head bm-khai">NOT</th>
            <th className="bm-head bm-lagai">YES</th>
          </tr>
        </thead>

        <tbody>
          {[...(oddsData || [])]
            .sort((a, b) => Number(a.srno) - Number(b.srno))
            .map((session, index) => {
              const minMaxData = minMax?.find(
                (item: any) => item?.fancyid === session?.sid
              );

              const suspended =
                session?.gstatus?.toLowerCase() === "suspended";

              return (
                <tr
                  key={index}
                  className={`bm-row ${
                    suspended ? "suspen" : ""
                  }`}
                >
                  {/* SESSION NAME */}
                  <td className="bm-team">
                    {session.nation}
                    <span className="bm-pl">
                      MAX : {minMaxData?.maxbet}
                    </span>

                    {/* LADDER ICON */}
                    <img
                      src="/img/inplay/ladder.svg"
                      alt="Book"
                      className="bm-book-icon"
                      onClick={() => handleShowFancyBook(session.sid)}
                    />
                  </td>

                  {/* NOT */}
                  <td
                    className="bm-lay"
                    onClick={() => {
                      if (!suspended) {
                        handleBetData(
                          true,
                          false,
                          session.l1,
                          "Fancy2",
                          session.sid,
                          session.ls1,
                          session.mid,
                          session.nation,
                          "No",
                          new Date()
                        );
                        focusAmountInput();
                      }
                    }}
                  >
                    <div>{session.l1}</div>
                    <div className="bm-size">{session.ls1}</div>
                  </td>

                  {/* YES */}
                  <td
                    className="bm-back"
                    onClick={() => {
                      if (!suspended) {
                        handleBetData(
                          true,
                          true,
                          session.b1,
                          "Fancy2",
                          session.sid,
                          session.bs1,
                          session.mid,
                          session.nation,
                          "Yes",
                          new Date()
                        );
                        focusAmountInput();
                      }
                    }}
                  >
                    <div>{session.b1}</div>
                    <div className="bm-size">{session.bs1}</div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* FANCY BOOK MODAL */}
      <Modal
        title="Fancy Book"
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <table className="bookmaker-table bet-table" width="100%">
          <thead>
            <tr>
              <th className="bm-head">RUN</th>
              <th className="bm-head">PNL</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length ? (
              data.data.map((item: any, idx: number) => (
                <tr key={idx}>
                  <td align="center">{item.odds}</td>
                  <td
                    align="center"
                    className={item.pnl > 0 ? "text-success" : "text-danger"}
                  >
                    {item.pnl}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} align="center">
                  No Data Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Modal>
    </div>
  );
};

export default Session;
