import { Col, Row } from "antd";
import React from "react";
import { LockOutlined } from "@ant-design/icons";

interface TeenProps {
  t1: any;
  odds: any;
  setBetState: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToBet: React.RefObject<HTMLDivElement | null>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setIsBetModal: React.Dispatch<React.SetStateAction<boolean>>
}

const DT20 = ({
  t1,
  odds,
  setBetState,
  setOpen,
  scrollToBet,
  setTimer,
  setIsBetModal,
}: TeenProps) => {
  const t2 = odds?.t2 || [];

  const rankOrder = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const getRank = (nation?: string) => {
    if (!nation) return "";
    const cleaned = nation
      .replace(/dragon\s*card/i, "")
      .replace(/tiger\s*card/i, "")
      .replace(/[^A-Za-z0-9]/g, " ")
      .trim();
    const token = cleaned.split(/\s+/).pop() || "";
    const match = token.match(/^(A|K|Q|J|10|[2-9])$/i);
    if (match) return match[0].toUpperCase();
    const alt = nation.match(/(A|K|Q|J|10|[2-9])/i);
    return alt ? alt[0].toUpperCase() : "";
  };

  const isLocked = (item: any) =>
    item?.gstatus === "0" || item?.gstatus === false || item?.gstatus === "SUSPENDED";

  const buildGroup = (label: string) => {
    const items = t2.filter((item: any) =>
      ((item?.nation || item?.nat || "") as string)
        .toLowerCase()
        .includes(label.toLowerCase())
    );
    const byRank: Record<string, any> = {};
    items.forEach((item: any) => {
      const rank = getRank(item?.nation);
      if (rank) {
        byRank[rank] = item;
      }
    });
    const ordered = rankOrder.map((rank) => ({
      rank,
      item: byRank[rank],
    }));
    const sample = items[0];
    return {
      ordered,
      min: sample?.min,
      max: sample?.max,
      locked: items.length > 0 && items.every(isLocked),
    };
  };

  const handleClick = (t2Data: any) => {
    const nationLabel = (t2Data?.nation || "").toString().toLowerCase();
    const selectionLabel = nationLabel.includes("dragon")
      ? "DRAGON"
      : nationLabel.includes("tiger")
        ? "TIGER"
        : getRank(t2Data?.nation) || t2Data?.nation;
    setBetState &&
      setBetState((prev: any) => ({
        ...prev,
        nation: t2Data?.nation,
        selectionName: selectionLabel,
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

  const renderStrip = (title: string, labelMatch: string) => {
    const group = buildGroup(labelMatch);
    if (!group.ordered.some((entry) => entry.item)) return null;

    return (
      <div className={`dt20-strip ${group.locked ? "is-locked" : "is-unlocked"}`}>
        <div className="dt20-strip-title">{title.toUpperCase()}</div>
        <div className="dt20-strip-cards">
          {group.ordered.map(({ rank, item }) => (
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
              <div className="dt20-strip-pnl">
                {item?.pnl ?? 0}
              </div>
            </div>
          ))}
          {group.locked && (
            <div className="dt20-strip-overlay">
              <LockOutlined style={{ fontSize: 18, color: "white" }} />
            </div>
          )}
        </div>
        {(group.min || group.max) && (
          <div className="dt20-strip-limits">
            MIN:{group.min ?? 0} MAX:{group.max ?? 0}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="dt20-section">
      <Row justify="center" className="dt20-odds-row">
        <Col xs={8} className="dt20-odds-col">
          <div className="dt20-odds-card">
            <div className="dt20-odds-rate">{t2?.[0]?.rate}</div>
            <div className="dt20-odds-label-wrap">
              <div
                className={`dt20-odds-label ${t2?.[0]?.gstatus == "0" ? "is-locked" : "is-unlocked"}`}
                onClick={() => t2?.[0]?.gstatus != "0" && handleClick(t2?.[0])}>
                <div>{t2?.[0]?.nation}</div>
                {t2?.[0]?.gstatus == "0" && (
                  <div className="dt20-odds-lock">
                    <LockOutlined style={{ fontSize: 16, color: "white" }} />
                  </div>
                )}
              </div>
            </div>
            <div
              className="dt20-odds-pnl"
              style={{ color: t2?.[0]?.pnl > 0 ? "green" : "red" }}>
              {t2?.[0]?.pnl}
            </div>
          </div>
        </Col>
        <Col xs={8} className="dt20-odds-col">
          <div className="dt20-odds-card">
            <div className="dt20-odds-rate">{t2?.[2]?.rate}</div>
            <div className="dt20-odds-label-wrap">
              <div
                className={`dt20-odds-label ${t2?.[2]?.gstatus == "0" ? "is-locked" : "is-unlocked"}`}
                onClick={() => t2?.[2]?.gstatus != "0" && handleClick(t2?.[2])}>
                <div>{t2?.[2]?.nation}</div>
                {t2?.[2]?.gstatus == "0" && (
                  <div className="dt20-odds-lock">
                    <LockOutlined style={{ fontSize: 16, color: "white" }} />
                  </div>
                )}
              </div>
            </div>
            <div
              className="dt20-odds-pnl"
              style={{ color: t2?.[2]?.pnl > 0 ? "green" : "red" }}>
              {t2?.[2]?.pnl}
            </div>
          </div>
        </Col>
        <Col xs={8} className="dt20-odds-col">
          <div className="dt20-odds-card">
            <div className="dt20-odds-rate">{t2?.[1]?.rate}</div>
            <div className="dt20-odds-label-wrap">
              <div
                className={`dt20-odds-label ${t2?.[1]?.gstatus == "0" ? "is-locked" : "is-unlocked"}`}
                onClick={() => t2?.[1]?.gstatus != "0" && handleClick(t2?.[1])}>
                <div>{t2?.[1]?.nation}</div>
                {t2?.[1]?.gstatus == "0" && (
                  <div className="dt20-odds-lock">
                    <LockOutlined style={{ fontSize: 16, color: "white" }} />
                  </div>
                )}
              </div>
            </div>
            <div
              className="dt20-odds-pnl"
              style={{ color: t2?.[1]?.pnl > 0 ? "green" : "red" }}>
              {t2?.[1]?.pnl}
            </div>
          </div>
        </Col>
      </Row>
      {renderStrip("DRAGON 11", "Dragon Card")}
      {renderStrip("TIGER 11", "Tiger Card")}
    </div>
  );
};

export default DT20;
