import { LockFilled } from "@ant-design/icons";
import React from "react";
import { useGetCasinoLabilityQuery } from "../../../store/service/userServices/userServices";
import "../Teen/teenpatti.scss";

// Type definitions
interface TeenItem {
  marketId: string;
  mid: string;
  sectionId: string;
  nation: string;
  b1: number;
  l1: number;
  pnl?: number;
  gstatus: string; // "SUSPENDED" or "ACTIVE"
  sid?: string;
  [key: string]: any; // fallback for extra fields
}

interface TeenProps {
  t1: any;
  odds: { t1: TeenItem[] };
  setBetState: React.Dispatch<React.SetStateAction<any>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToBet: React.RefObject<HTMLDivElement | null>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setIsBetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TeenOneDay: React.FC<TeenProps> = ({
  odds,
  setBetState,
  setOpen,
  scrollToBet,
  setTimer,
  t1,
  setIsBetModal,
}) => {
  const t2: TeenItem[] = odds?.t1 || [];

  const { data } = useGetCasinoLabilityQuery(
    { roundId: t1?.mid || "" },
    { pollingInterval: 1000 }
  );

  const isLocked = (item: TeenItem) =>
    item?.gstatus === "SUSPENDED" || item?.gstatus === "0" || item?.gstatus === false;

  const handleClick = (item: TeenItem, odds: any, color: string) => {
    const nationLabel = (item?.nation || "").toString().toLowerCase();
    const selectionLabel = nationLabel.includes("player a")
      ? "A"
      : nationLabel.includes("player b")
        ? "B"
        : item?.nation;
    setBetState?.((prev: any) => ({
      ...prev,
      nation: item?.nation,
      selectionName: selectionLabel,
      casinoName: 2,
      isBack: color === "back" ? true : false,
      odds: Number(odds),
      selectionId: item?.sectionId,
      colorName: color,
    }));

    scrollToBet?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setIsBetModal(true);
    setOpen(true);
    setTimer(10);
  };

  const renderRow = (item: TeenItem, idx: number) => {
    const locked = isLocked(item);
    const pnl = data?.data?.find(
      (pnlData) => Number(pnlData?.sid) === Number(item?.sectionId)
    )?.liability;

    return (
      <div key={idx} className="tp-row tp-row--dual">
        <div className="tp-runner-info">
          <div className="tp-runner-name">{item?.nation}</div>
          <div className={`tp-pnl ${(pnl ?? 0) > 0 ? "positive" : "negative"}`}>
            {pnl?.toFixed(2)}
          </div>
        </div>

        <div
          className="tp-bet-cell back"
          onClick={() => !locked && handleClick(item, item?.b1, "back")}
        >
          {locked ? (
            <div className="tp-lock">
              <LockFilled />
            </div>
          ) : (
            <div className="tp-rate">{item?.b1?.toFixed(2)}</div>
          )}
        </div>

        <div
          className="tp-bet-cell lay"
          onClick={() => !locked && handleClick(item, item?.l1, "lay")}
        >
          {locked ? (
            <div className="tp-lock">
              <LockFilled />
            </div>
          ) : (
            <div className="tp-rate">{item?.l1?.toFixed(2)}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="teen-patti-container">
      <div className="tp-card">
        <div className="tp-main-header tp-main-header--dual">
          <div className="header-left" />
          <div className="header-right">
            <div className="header-col">BACK</div>
            <div className="header-col">LAY</div>
          </div>
        </div>

        {t2.map((item, idx) => renderRow(item, idx))}
      </div>
    </div>
  );
};

export default TeenOneDay;
