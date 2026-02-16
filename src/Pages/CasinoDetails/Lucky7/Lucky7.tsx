import { Col, Row } from "antd";
import React from "react";
import { LockOutlined } from "@ant-design/icons";

interface AAAProps {
  t1: any;
  odds: any;
  setBetState: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToBet: React.RefObject<HTMLDivElement | null>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setIsBetModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Lucky7 = ({
  t1,
  odds,
  setBetState,
  setOpen,
  scrollToBet,
  setTimer,
  setIsBetModal
}: AAAProps) => {
  const t2 = odds?.t2 || [];

  const getName = (item: any) => (item?.nation || item?.nat || "").toString();

  const isLocked = (item: any) =>
    item?.gstatus === "0" || item?.gstatus === false || item?.gstatus === "SUSPENDED";

  const findBy = (keywords: string[], fallbackIndex: number) => {
    const found = t2.find((item: any) =>
      keywords.some((key) => getName(item).toLowerCase().includes(key))
    );
    return found ?? t2?.[fallbackIndex];
  };

  const getRank = (nation?: string) => {
    if (!nation) return "";
    const cleaned = nation
      .replace(/card/i, "")
      .replace(/[^A-Za-z0-9]/g, " ")
      .trim();
    const token = cleaned.split(/\s+/).pop() || "";
    const match = token.match(/^(A|K|Q|J|10|[2-9])$/i);
    if (match) return match[0].toUpperCase();
    const alt = nation.match(/(A|K|Q|J|10|[2-9])/i);
    return alt ? alt[0].toUpperCase() : "";
  };

  const getSelectionLabel = (nation?: string) => {
    const lower = (nation || "").toLowerCase();
    if (lower.includes("low")) return "LOW";
    if (lower.includes("high")) return "HIGH";
    return getRank(nation) || nation || "";
  };

  const handleClick = (t2Data: any) => {
    setBetState &&
      setBetState((prev: any) => ({
        ...prev,
        nation: t2Data?.nation,
        selectionName: getSelectionLabel(t2Data?.nation),
        casinoName: 2,
        isBack: true,
        odds: Number(t2Data?.rate),
        selectionId: t2Data?.sid,
        colorName: "back",
      }));
    setOpen(true);
    scrollToBet?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setIsBetModal(true);
    setTimer(10);
  };

  const low = findBy(["low"], 0);
  const high = findBy(["high"], 1);
  const centerCard = findBy(["card"], 2);
  const even = findBy(["even"], 2);
  const odd = findBy(["odd"], 3);
  const red = findBy(["red", "heart", "diamond"], 4);
  const black = findBy(["black", "spade", "club"], 5);

  const cardRank = "7";

  const stripItems = t2.filter((item: any) => getName(item).toLowerCase().includes("card"));
  const rankOrder = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const byRank: Record<string, any> = {};
  stripItems.forEach((item: any) => {
    const rank = getRank(getName(item));
    if (rank) byRank[rank] = item;
  });
  const orderedStrip = rankOrder.map((rank) => ({ rank, item: byRank[rank] }));
  const stripLocked = stripItems.length > 0 && stripItems.every(isLocked);
  const stripSample = stripItems[0];

  return (
    <>
      <div className="lucky7-section">
        <div className="lucky7-odds-row">
          <div className="lucky7-odds-cell lucky7-odds-left">
            <div className="lucky7-odds-rate">{low?.rate}</div>
            <button
              type="button"
              className={`lucky7-odds-btn ${isLocked(low) ? "is-locked" : "is-unlocked"}`}
              onClick={() => low && !isLocked(low) && handleClick(low)}
              disabled={!low || isLocked(low)}>
              {getName(low).toLowerCase().replace(/\s*card\s*/gi, " ").trim()}
              {isLocked(low) && (
                <span className="lucky7-odds-lock">
                  <LockOutlined style={{ fontSize: 14, color: "white" }} />
                </span>
              )}
            </button>
            <div
              className="lucky7-odds-pnl"
              style={{ color: low?.pnl > 0 ? "green" : "red" }}>
              {low?.pnl ?? 0}
            </div>
          </div>
          <div className="lucky7-center-card">
            <img
              className="lucky7-center-card-img"
              src={`/cards/${cardRank}.png`}
              alt={cardRank}
              loading="lazy"
            />
          </div>
          <div className="lucky7-odds-cell lucky7-odds-right">
            <div className="lucky7-odds-rate">{high?.rate}</div>
            <button
              type="button"
              className={`lucky7-odds-btn ${isLocked(high) ? "is-locked" : "is-unlocked"}`}
              onClick={() => high && !isLocked(high) && handleClick(high)}
              disabled={!high || isLocked(high)}>
              {getName(high).toLowerCase().replace(/\s*card\s*/gi, " ").trim()}
              {isLocked(high) && (
                <span className="lucky7-odds-lock">
                  <LockOutlined style={{ fontSize: 14, color: "white" }} />
                </span>
              )}
            </button>
            <div
              className="lucky7-odds-pnl"
              style={{ color: high?.pnl > 0 ? "green" : "red" }}>
              {high?.pnl ?? 0}
            </div>
          </div>
        </div>

        {stripItems.length > 0 && (
          <div className="lucky7-strip">
            <div className="lucky7-strip-title">11</div>
            <div className="lucky7-strip-cards">
              {orderedStrip.map(({ rank, item }) => (
                <div key={rank} className="dt20-strip-card-wrap">
                  <button
                    type="button"
                    className="dt20-strip-card"
                    onClick={() => item && !isLocked(item) && handleClick(item)}
                    disabled={!item || isLocked(item)}>
                    <img
                      className="dt20-strip-card-img"
                      src={`/cards/${rank}.png`}
                      alt={rank}
                      loading="lazy"
                    />
                  </button>
                  <div className="dt20-strip-pnl">{item?.pnl ?? 0}</div>
                </div>
              ))}
              {stripLocked && (
                <div className="lucky7-strip-overlay">
                  <LockOutlined style={{ fontSize: 18, color: "white" }} />
                </div>
              )}
            </div>
            {(stripSample?.min || stripSample?.max) && (
              <div className="lucky7-strip-limits">
                MIN:{stripSample?.min ?? 0} MAX:{stripSample?.max ?? 0}
              </div>
            )}
          </div>
        )}

        <div className="lucky7-odds-row lucky7-secondary-row">
          <div className="lucky7-odds-cell lucky7-odds-left">
            <div className="lucky7-odds-rate">{even?.rate}</div>
            <button
              type="button"
              className={`lucky7-odds-btn ${isLocked(even) ? "is-locked" : "is-unlocked"}`}
              onClick={() => even && !isLocked(even) && handleClick(even)}
              disabled={!even || isLocked(even)}>
              {getName(even)}
            </button>
            <div
              className="lucky7-odds-pnl"
              style={{ color: even?.pnl > 0 ? "green" : "red" }}>
              {even?.pnl ?? 0}
            </div>
          </div>
          <div className="lucky7-odds-cell lucky7-odds-left">
            <div className="lucky7-odds-rate">{odd?.rate}</div>
            <button
              type="button"
              className={`lucky7-odds-btn ${isLocked(odd) ? "is-locked" : "is-unlocked"}`}
              onClick={() => odd && !isLocked(odd) && handleClick(odd)}
              disabled={!odd || isLocked(odd)}>
              {getName(odd)}
            </button>
            <div
              className="lucky7-odds-pnl"
              style={{ color: odd?.pnl > 0 ? "green" : "red" }}>
              {odd?.pnl ?? 0}
            </div>
          </div>
          <div className="lucky7-odds-cell lucky7-odds-right">
            <div className="lucky7-odds-rate">{red?.rate}</div>
            <button
              type="button"
              className={`lucky7-odds-btn ${isLocked(red) ? "is-locked" : "is-unlocked"}`}
              onClick={() => red && !isLocked(red) && handleClick(red)}
              disabled={!red || isLocked(red)}>
              {getName(red)}
            </button>
            <div
              className="lucky7-odds-pnl"
              style={{ color: red?.pnl > 0 ? "green" : "red" }}>
              {red?.pnl ?? 0}
            </div>
          </div>
          <div className="lucky7-odds-cell lucky7-odds-right">
            <div className="lucky7-odds-rate">{black?.rate}</div>
            <button
              type="button"
              className={`lucky7-odds-btn ${isLocked(black) ? "is-locked" : "is-unlocked"}`}
              onClick={() => black && !isLocked(black) && handleClick(black)}
              disabled={!black || isLocked(black)}>
              {getName(black)}
            </button>
            <div
              className="lucky7-odds-pnl"
              style={{ color: black?.pnl > 0 ? "green" : "red" }}>
              {black?.pnl ?? 0}
            </div>
          </div>
          {(isLocked(even) && isLocked(odd) && isLocked(red) && isLocked(black)) && (
            <div className="lucky7-row-overlay">
              <LockOutlined style={{ fontSize: 18, color: "white" }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Lucky7;
