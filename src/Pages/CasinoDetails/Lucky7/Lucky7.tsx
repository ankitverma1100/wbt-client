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

  // console.log("t2", t2);

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
    <>
      <div className="gx-mt-1 gx-mx-1 gx-border-2 gx-border-dark">
        <div className="gx-w-100">
          <Row
            justify={"space-between"}
            className="gx-w-100 gx-pl-1"
            style={{
              marginLeft: "-2px",
              marginRight: "-2px",
              rowGap: 4,
            }}>
            <Col
              xs={10}
              md={10}
              className="gx-w-100"
              style={{ paddingLeft: 2, paddingRight: 2 }}>
              <div className="gx-w-100">
                <Row justify={"center"} align="middle">
                  <span className="ant-typography gx-uppercase gx-fs-lg gx-p-2 gx-font-weight-semi-bold">
                    {t2[0]?.rate}
                  </span>
                </Row>
                <div
                  className="gx-position-relative"
                  onClick={() =>
                    t2?.[0]?.gstatus != "0" && handleClick(t2?.[0])
                  }>
                  <div className="gx-w-100 gx-h-100 gx-py-2 gx-text-white gx-items-center gx-text-center gx-fs-md gx-px-4 gx-font-weight-semi-bold gx-text-uppercase gx-bg-grey gx-pointer">
                    {t2[0]?.nation}
                  </div>
                  {t2?.[0]?.gstatus == "0" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined style={{ color: "#fff" }} />
                      </div>
                    </div>
                  )}
                </div>
                <Row justify={"center"} align="middle">
                  <span
                    style={{ color: t2[0]?.pnl > 0 ? "green" : "red" }}
                    className="ant-typography gx-d-flex gx-justify-content-center ant-space-align-center gx-font-weight-semi-bold gx-text-green-0">
                    {t2[0]?.pnl}
                  </span>
                </Row>
              </div>
            </Col>
            <Col
              xs={4}
              md={4}
              className="gx-w-100 gx-bg-flex gx-justify-content-center ant-space-align-center gx-w-full"
              style={{ paddingLeft: 2, paddingRight: 2 }}>
              <div
                className="gx-d-flex gx-justify-content-center ant-space-align-center"
                onClick={() => t2?.[2]?.gstatus != "0" && handleClick(t2?.[2])}>
                <img
                  src="/card/7.jpg"
                  alt="aaaaaa"
                  style={{ height: 54, width: 50 }}
                />
              </div>
            </Col>
            <Col
              xs={10}
              md={10}
              className="gx-w-100"
              style={{ paddingLeft: 2, paddingRight: 2 }}>
              <div className="gx-w-100">
                <Row justify={"center"} align="middle">
                  <span className="ant-typography gx-uppercase gx-fs-lg gx-p-2 gx-font-weight-semi-bold">
                    {t2?.[1]?.rate}
                  </span>
                </Row>
                <div
                  className="gx-position-relative"
                  onClick={() =>
                    t2?.[1]?.gstatus != "0" && handleClick(t2?.[1])
                  }>
                  <div className="gx-w-100 gx-h-100 gx-py-2 gx-text-white gx-items-center gx-text-center gx-fs-md gx-px-4 gx-font-weight-semi-bold gx-text-uppercase gx-bg-grey gx-pointer">
                    {t2?.[1]?.nation}
                  </div>
                  {t2?.[1]?.gstatus == "0" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined style={{ color: "#fff" }} />
                      </div>
                    </div>
                  )}
                </div>
                <Row justify={"center"} align="middle">
                  <span
                    style={{ color: t2[1]?.pnl > 0 ? "green" : "red" }}
                    className="ant-typography gx-d-flex gx-justify-content-center ant-space-align-center gx-font-weight-semi-bold gx-text-green-0">
                    {t2?.[1]?.pnl}
                  </span>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Row
        className="gx-mt-1 gx-mx-1 gx-border-2 gx-border-dark"
        style={{ marginLeft: "-8px", marginRight: "-8px", rowGap: 16 }}>
        <Col xs={24} md={12} style={{ paddingLeft: 8, paddingRight: 8 }}>
          <Row
            style={{
              marginLeft: "-4px",
              marginRight: "-4px",
              rowGap: 8,
            }}>
            <Col xs={12} style={{ paddingLeft: 4, paddingRight: 4 }}>
              <div className="gx-w-100">
                <Row justify={"center"} align="middle">
                  <span className="ant-typography gx-uppercase gx-fs-lg gx-p-2 gx-font-weight-semi-bold">
                    {t2[2]?.rate}
                  </span>
                </Row>
                <div
                  className="gx-position-relative"
                  onClick={() =>
                    t2?.[2]?.gstatus != "0" && handleClick(t2?.[2])
                  }>
                  <div className="gx-w-100 gx-h-100 gx-py-2 gx-text-white gx-items-center gx-text-center gx-fs-md gx-px-4 gx-font-weight-semi-bold gx-text-uppercase gx-bg-grey gx-pointer">
                    {t2[2]?.nation}
                  </div>
                  {t2?.[2]?.gstatus == "0" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined style={{ color: "#fff" }} />
                      </div>
                    </div>
                  )}
                </div>
                <div className="ant-row ant-row-center ant-row-middle">
                  <span
                    style={{ color: t2[2]?.pnl > 0 ? "green" : "red" }}
                    className="ant-typography gx-d-flex gx-justify-content-center ant-space-align-center gx-font-weight-semi-bold gx-text-green-0">
                    {t2[2]?.pnl}
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} style={{ paddingLeft: 4, paddingRight: 4 }}>
              <div className="gx-w-100">
                <Row justify={"center"} align="middle">
                  <span className="ant-typography gx-uppercase gx-fs-lg gx-p-2 gx-font-weight-semi-bold">
                    {t2?.[3]?.rate}
                  </span>
                </Row>
                <div
                  className="gx-position-relative"
                  onClick={() =>
                    t2?.[3]?.gstatus != "0" && handleClick(t2?.[3])
                  }>
                  <div className="gx-w-100 gx-h-100 gx-py-2 gx-text-white gx-items-center gx-text-center gx-fs-md gx-px-4 gx-font-weight-semi-bold gx-text-uppercase gx-bg-grey gx-pointer">
                    {t2?.[3]?.nation}
                  </div>
                  {t2?.[3]?.gstatus == "0" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined style={{ color: "#fff" }} />
                      </div>
                    </div>
                  )}
                </div>
                <div className="ant-row ant-row-center ant-row-middle">
                  <span
                    style={{ color: t2[3]?.pnl > 0 ? "green" : "red" }}
                    className="ant-typography gx-d-flex gx-justify-content-center ant-space-align-center gx-font-weight-semi-bold gx-text-green-0">
                    {t2?.[3]?.pnl}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12} style={{ paddingLeft: 8, paddingRight: 8 }}>
          <Row
            style={{
              marginLeft: "-4px",
              marginRight: "-4px",
              rowGap: 8,
            }}>
            <Col xs={12} style={{ paddingLeft: 4, paddingRight: 4 }}>
              <div className="gx-w-100">
                <Row justify={"center"} align="middle">
                  <span className="ant-typography gx-uppercase gx-fs-lg gx-p-2 gx-font-weight-semi-bold">
                    {t2?.[4]?.rate}
                  </span>
                </Row>
                <div
                  className="gx-position-relative"
                  onClick={() =>
                    t2?.[4]?.gstatus != "0" && handleClick(t2?.[4])
                  }>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="gx-bg-grey gx-w-100 ant-space-align-center gx-py-2 gx-fs-lg gx-font-weight-medium gx-text-red gx-rounded-sm">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2" />
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                    </svg>
                  </div>
                  {t2?.[4]?.gstatus == "0" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined style={{ color: "#fff" }} />
                      </div>
                    </div>
                  )}
                </div>
                <div className="ant-row ant-row-center ant-row-middle">
                  <span
                    style={{ color: t2[4]?.pnl > 0 ? "green" : "red" }}
                    className="ant-typography gx-d-flex gx-justify-content-center ant-space-align-center gx-font-weight-semi-bold gx-text-green-0">
                    {t2?.[4]?.pnl}
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} style={{ paddingLeft: 4, paddingRight: 4 }}>
              <div className="gx-w-100">
                <Row justify={"center"} align="middle">
                  <span className="ant-typography gx-uppercase gx-fs-lg gx-p-2 gx-font-weight-semi-bold">
                    {t2?.[5]?.rate}
                  </span>
                </Row>
                <div
                  className="gx-position-relative"
                  onClick={() =>
                    t2?.[4]?.gstatus != "0" && handleClick(t2?.[4])
                  }>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="gx-bg-grey gx-w-100 ant-space-align-center gx-py-2 gx-fs-lg gx-font-weight-medium gx-text-black gx-rounded-sm">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5" />
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907" />
                    </svg>
                  </div>
                  {t2?.[5]?.gstatus == "0" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined style={{ color: "#fff" }} />
                      </div>
                    </div>
                  )}
                </div>
                <div className="ant-row ant-row-center ant-row-middle">
                  <span
                    style={{ color: t2[5]?.pnl > 0 ? "green" : "red" }}
                    className="ant-typography gx-d-flex gx-justify-content-center ant-space-align-center gx-font-weight-semi-bold gx-text-green-0">
                    {t2?.[5]?.pnl}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Lucky7;
