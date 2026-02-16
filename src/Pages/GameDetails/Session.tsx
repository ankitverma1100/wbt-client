/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "react-router-dom";
import {
  useGetBetListBymatchIdQuery,
  useGetFancyBookMutation,
} from "../../store/service/userServices/userServices";
import { Modal } from "antd";
import { useState } from "react";
import React from "react";

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

interface Props {
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
  sseFancyLimits?: Record<string, any>;
}

const Session = ({
  oddsData,
  handleBetData,
  focusAmountInput,
  minMax,
  sseFancyLimits,
}: Props) => {
  const { id } = useParams() as { id: string };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFancyName, setCurrentFancyName] = useState<string>("N/A");
  const [trigger, { data }] = useGetFancyBookMutation();
  const { data: betList } = useGetBetListBymatchIdQuery(
    { matchId: id ?? "", activeBet: true },
    { pollingInterval: 1000 }
  );

  const normalizeName = (value?: string) =>
    String(value || "").trim().toLowerCase();
  const fancyBetNames = new Set(
    (betList?.data?.Fancy2Market || []).map((item: any) =>
      normalizeName(item?.nation)
    )
  );

  const handleShowFancyBook = (fancyId: string, fancyName: string) => {
    trigger({ matchId: id ?? "", fancyId });
    setCurrentFancyName(fancyName || "N/A");
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-responsive">
      <table className="bookmaker-table bet-table session-table" width="100%">
        <thead>
          <tr>
            <th className="bm-head "><span className="text-blink">SESSION</span></th>
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
              const sseLimit = session?.sid ? sseFancyLimits?.[session.sid] : undefined;

              const suspended =
                session?.gstatus?.toLowerCase() === "suspended";
              const hasFancyBet = fancyBetNames.has(
                normalizeName(session?.nation)
              );

              return (
                <React.Fragment key={index}>
                  <tr className={`bm-row ${suspended ? "suspen" : ""}`}>
                    {/* SESSION NAME */}
                    <td className="bm-team">
                      <div className="session-group">
                        <div className="session-details">
                          <span className="session-text">{session.nation}</span>
                          <span className="session-max">
                            MAX : {sseLimit?.maxBet ?? minMaxData?.maxbet}
                          </span>
                          <span className="session-max" style={{ marginLeft: 8 }}>
                            MIN : {sseLimit?.minBet ?? minMaxData?.minbet}
                          </span>
                        </div>

                        <img
                          src="/img/inplay/ladder.svg"
                          alt="Book"
                          className={`bm-book-icon ${hasFancyBet ? "bm-book-icon--active" : ""}`}
                        onClick={() =>
                          handleShowFancyBook(session.sid, session.nation)
                        }
                      />
                    </div>
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
                  {session.rem && (
                    <tr>
                      <td colSpan={3} className="fancy-rem">
                        {session.rem}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
        </tbody>
      </table>

      {/* FANCY BOOK MODAL */}
      <Modal
        title={currentFancyName || "N/A"}
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
        className="fancy-book-modal"
        width={520}
        centered
      >
        <table className="bookmaker-table bet-table fancy-book-table" width="100%">
          <thead>
            <tr>
              <th className="bm-head">RUN</th>
              <th className="bm-head">PROFIT</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length ? (
              data.data.map((item: any, idx: number) => (
                <tr key={idx}>
                  <td align="center">{item.odds}</td>
                  <td
                    align="center"
                    className={
                      item.pnl > 0 ? "text-success" : "text-danger"
                    }
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
