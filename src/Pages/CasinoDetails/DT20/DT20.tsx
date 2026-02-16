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

  const isLocked = (item: any) =>
    item?.gstatus === "0" || item?.gstatus === false || item?.gstatus === "SUSPENDED";

  const handleClick = (t2Data: any) => {
    const nationLabel = (t2Data?.nation || "").toString().toLowerCase();
    const selectionLabel = nationLabel.includes("dragon")
      ? "DRAGON"
      : nationLabel.includes("tiger")
        ? "TIGER"
        : t2Data?.nation;
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
    </div>
  );
};

export default DT20;
