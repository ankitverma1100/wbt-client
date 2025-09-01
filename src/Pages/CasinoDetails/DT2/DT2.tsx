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
  setIsBetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DT2 = ({
  t1,
  odds,
  setBetState,
  setOpen,
  scrollToBet,
  setTimer,
  setIsBetModal,
}: TeenProps) => {
  const t2 = odds?.t2 || [];

  const handleClick = (t2Data: any) => {
    setBetState &&
      setBetState((prev: any) => ({
        ...prev,
        nation: t2Data?.nation,
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
    <Row
      justify="center"
      className="gx-w-100 gx-text-center gx-border-dark gx-border-2 gx-mt-1 gx-mx-1"
      style={{ marginLeft: "-4px", marginRight: "-4px", rowGap: 8 }}>
      <Col xs={8} style={{ paddingLeft: 4, paddingRight: 4 }}>
        <div className="gx-py-2 gx-w-100">
          <div className="gx-fs-md gx-font-weight-semi-bold gx-py-1">
            <span>{t2?.[0]?.rate}</span>
          </div>
          <div
            className="gx-fs-md gx-text-white gx-font-weight-semi-bold gx-w-100 gx-bg-flex"
            style={{ height: 33 }}>
            <div
              className="gx-w-100 gx-mx-1 gx-py-2 gx-position-relative gx-bg-grey"
              onClick={() => t2?.[0]?.gstatus != "0" && handleClick(t2?.[0])}>
              <div>{t2[0]?.nation}</div>
              {t2?.[2]?.gstatus == "0" && (
                <div
                  className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                  style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                  <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                    <LockOutlined style={{ fontSize: 16, color: "white" }} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="gx-text-green-0"
            style={{ color: t2[0]?.pnl > 0 ? "green" : "red" }}>
            {t2[0]?.pnl}
          </div>
        </div>
      </Col>
      <Col xs={8} style={{ paddingLeft: 4, paddingRight: 4 }}>
        <div className="gx-py-2 gx-w-100">
          <div className="gx-fs-md gx-font-weight-semi-bold gx-py-1">
            <span>{t2?.[2]?.rate}</span>
          </div>
          <div
            className="gx-fs-md gx-text-white gx-font-weight-semi-bold gx-w-100 gx-bg-flex"
            style={{ height: 33 }}>
            <div
              className="gx-w-100 gx-mx-1 gx-py-2 gx-position-relative gx-bg-grey"
              onClick={() => t2?.[2]?.gstatus != "0" && handleClick(t2?.[2])}>
              <div>{t2[2]?.nation}</div>
              {t2[2]?.gstatus == "0" && (
                <div
                  className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                  style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                  <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                    <LockOutlined style={{ fontSize: 16, color: "white" }} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="gx-text-green-0"
            style={{ color: t2[2]?.pnl > 0 ? "green" : "red" }}>
            {t2[2]?.pnl}
          </div>
        </div>
      </Col>
      <Col xs={8} style={{ paddingLeft: 4, paddingRight: 4 }}>
        <div className="gx-py-2 gx-w-100">
          <div className="gx-fs-md gx-font-weight-semi-bold gx-py-1">
            <span>{t2?.[1]?.rate}</span>
          </div>
          <div
            className="gx-fs-md gx-text-white gx-font-weight-semi-bold gx-w-100 gx-bg-flex"
            style={{ height: 33 }}>
            <div
              className="gx-w-100 gx-mx-1 gx-py-2 gx-position-relative gx-bg-grey"
              onClick={() => t2?.[1]?.gstatus != "0" && handleClick(t2?.[1])}>
              <div>{t2?.[1]?.nation}</div>
              {t2?.[1]?.gstatus == "0" && (
                <div
                  className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                  style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                  <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                    <LockOutlined style={{ fontSize: 16, color: "white" }} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="gx-text-green-0"
            style={{ color: t2?.[1]?.pnl > 0 ? "green" : "red" }}>
            {t2?.[1]?.pnl}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DT2;
