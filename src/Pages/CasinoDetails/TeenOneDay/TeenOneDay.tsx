import { Card, Col, Row } from "antd";
import { LockFilled } from "@ant-design/icons";
import React from "react";

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
  t1: TeenItem[];
  odds: { t1: TeenItem[] };
  setBetState: React.Dispatch<React.SetStateAction<any>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToBet: React.RefObject<HTMLDivElement | null>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}

const TeenOneDay: React.FC<TeenProps> = ({
  odds,
  setBetState,
  setOpen,
  scrollToBet,
  setTimer,
}) => {
  const t2: TeenItem[] = odds?.t1 || [];

  const handleClick = (item: TeenItem, odds: any, color: string) => {
    setBetState?.((prev: any) => ({
      ...prev,
      nation: item?.nation,
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
    setOpen(true);
    setTimer(8);
  };

  const renderRow = (item: TeenItem, idx: number) => {
    const isSuspended = item?.gstatus === "SUSPENDED";

    return (
      <Row key={idx} className="gx-text-center gx-border-bottom">
        {/* Nation + PnL */}
        <Col span={14} className="gx-border-right gx-border-white">
          <Row
            className="gx-text-center"
            style={{ background: "rgba(0,0,0,0.3)", marginBottom: "1px" }}>
            <Col
              span={24}
              className="gx-text-capitalize gx-d-flex gx-text-black gx-font-semibold gx-py-2">
              <div className="text-18 gx-w-100 gx-font-weight-semi-bold gx-text-left">
                {item?.nation}
              </div>
              <div
                className="gx-w-100"
                style={{ color: (item?.pnl ?? 0) > 0 ? "green" : "red" }}>
                {item?.pnl}
              </div>
            </Col>
          </Row>
        </Col>

        {/* Back column */}
        <Col
          span={5}
          className="back gx-position-relative"
          style={{ marginBottom: "1px" }}>
          <div className="gx-flex-column gx-justify-center gx-align-items-center gx-cursor-pointer gx-py-2">
            {isSuspended ? (
              <div
                className="gx-position-absolute gx-left-0 gx-w-100 gx-h-100 gx-top-0 gx-bg-flex gx-justify-content-center gx-align-items-center"
                style={{ zIndex: 100, backgroundColor: "rgba(0,0,0,0.3)" }}>
                <LockFilled className="gx-fs-lg gx-font-weight-heavy gx-text-white" />
              </div>
            ) : (
              <div
                className="gx-text-center gx-position-relative gx-w-100"
                onClick={() => handleClick(item, item?.b1, "back")}>
                <div className="text-18 font-semibold">
                  {item?.b1?.toFixed(2)}
                </div>
              </div>
            )}
          </div>
        </Col>

        {/* Lay column */}
        <Col
          span={5}
          className="lay gx-position-relative"
          style={{ marginBottom: "1px" }}>
          <div className="gx-flex-column gx-justify-center gx-align-items-center gx-cursor-pointer gx-py-2">
            {isSuspended ? (
              <div
                className="gx-position-absolute gx-left-0 gx-w-100 gx-h-100 gx-top-0 gx-bg-flex gx-justify-content-center gx-align-items-center"
                style={{ zIndex: 100, backgroundColor: "rgba(0,0,0,0.3)" }}>
                <LockFilled className="gx-fs-lg gx-font-weight-heavy gx-text-white" />
              </div>
            ) : (
              <div
                className="gx-text-center gx-position-relative gx-w-100"
                onClick={() => handleClick(item, item?.l1, "lay")}>
                <div className="text-18 font-semibold">
                  {item?.l1?.toFixed(2)}
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Card bordered className="gx-bg-white gx-text-white gx-my-0 gx-px-3">
      <div className="ant-card-body">
        {/* Header row */}
        <Row
          className="gx-border-bottom gx-border-white gx-text-center"
          style={{
            background: "rgba(0,0,0,0.3)",
            borderBottom: "1px solid #fff",
          }}>
          <Col span={14} className="gx-border-right gx-py-2" />
          <Col span={5} className="back gx-py-2">
            <p
              className="gx-text-white gx-text-uppercase"
              style={{ marginBottom: 0 }}>
              <strong>Back</strong>
            </p>
          </Col>
          <Col span={5} className="lay gx-py-2">
            <p
              className="gx-text-white gx-text-uppercase"
              style={{ marginBottom: 0 }}>
              <strong>Lay</strong>
            </p>
          </Col>
        </Row>

        {/* Dynamic rows */}
        {t2.map((item, idx) => renderRow(item, idx))}
      </div>
    </Card>
  );
};

export default TeenOneDay;
