import { Card, Col, Row } from "antd";
import { LockFilled } from "@ant-design/icons";

interface TeenProps {
  t1: any;
  odds: any;
  setBetState: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToBet: React.RefObject<HTMLDivElement | null>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}

const AndarBhar = ({
  t1,
  odds,
  setBetState,
  setOpen,
  scrollToBet,
  setTimer,
}: TeenProps) => {
  const t2 = odds?.t2 || [];

  const handleClick = (t2: {
    nation: any;
    rate: any;
    b1: any;
    mid: any;
    sid: any;
  }) => {
    setBetState &&
      setBetState((prev: any) => ({
        ...prev,
        nation: t2?.nation,
        casinoName: 2,
        isBack: true,
        odds: Number(t2?.rate),
        selectionId: t2?.sid,
        colorName: "back",
      }));
    scrollToBet?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setOpen(true);
    setTimer(8);
  };

  return (
    <Card bordered className="gx-bg-white gx-text-white gx-my-0 gx-px-3">
      <div className="ant-card-body">
        <Row
          className="gx-border-bottom gx-border-white gx-text-center"
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            borderBottom: "1px solid #fff",
          }}>
          <Col span={16} className="gx-border-right gx-py-2" />
          <Col span={8} className="gx-bg-grey gx-py-2">
            <p
              style={{
                marginBottom: "0px",
              }}
              className="gx-text-white gx-text-uppercase">
              <strong>Back</strong>
            </p>
          </Col>
        </Row>

        <Row className="gx-text-center gx-border-bottom">
          <Col span={16} className="gx-border-right gx-border-white">
            <Row
              className="gx-text-center"
              style={{ background: "rgba(0, 0, 0, 0.3)", marginBottom: "1px" }}>
              <Col
                span={24}
                className="gx-text-capitalize gx-d-flex gx-text-black gx-font-semibold gx-py-2">
                <div className=" text-18 gx-w-100 gx-fs-lg gx-font-weight-semi-bold gx-text-left">
                  Ander
                </div>
                <div
                  className="gx-text-green-0 gx-w-100"
                  style={{
                    color: t2[0]?.pnl > 0 ? "green" : "red",
                    textAlign: "right",
                    paddingRight: "3px",
                  }}>
                  {t2[0]?.pnl}
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            span={8}
            className="gx-bg-grey gx-position-relative"
            style={{ marginBottom: "1px" }}>
            <div className="gx-flex-column gx-bg-grey gx-justify-center gx-align-items-center gx-cursor-pointer gx-py-2">
              {!t2[0]?.gstatus ? (
                <div
                  className="gx-position-absolute gx-left-0 gx-w-100 gx-h-100 gx-top-0 gx-bg-flex gx-justify-content-center gx-align-items-center"
                  style={{
                    zIndex: 100,
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  }}>
                  <LockFilled className="gx-fs-lg gx-font-weight-heavy gx-text-white" />
                </div>
              ) : (
                <div
                  className="gx-text-center gx-position-relative gx-w-100"
                  onClick={() => t2[0]?.gstatus && handleClick(t2[0])}>
                  <div className="text-18 font-semibold">{t2[0]?.rate}</div>
                </div>
              )}
            </div>
          </Col>
        </Row>

        <Row className="gx-text-center gx-border-bottom">
          <Col span={16} className="gx-border-right gx-border-white">
            <Row
              className="gx-text-center"
              style={{ background: "rgba(0, 0, 0, 0.3)" }}>
              <Col
                span={24}
                className="gx-text-capitalize gx-d-flex gx-text-black gx-font-semibold gx-py-2">
                <div className="text-18 gx-w-100 gx-fs-lg gx-font-weight-semi-bold gx-text-left">
                  Bahar
                </div>
                <div
                  className="gx-text-green-0 gx-w-100"
                  style={{
                    color: t2[0]?.pnl > 0 ? "green" : "red",
                    textAlign: "right",
                    paddingRight: "3px",
                  }}>
                  {t2[13]?.pnl}
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={8} className="gx-bg-grey gx-position-relative">
            <div className="gx-flex-column gx-bg-grey gx-justify-center gx-align-items-center gx-cursor-pointer gx-py-2">
              {!t2[13]?.gstatus ? (
                <div
                  className="gx-position-absolute gx-left-0 gx-w-100 gx-h-100 gx-top-0 gx-bg-flex gx-justify-content-center gx-align-items-center"
                  style={{
                    zIndex: 100,
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  }}>
                  <LockFilled className="gx-fs-lg gx-font-weight-heavy gx-text-white" />
                </div>
              ) : (
                <div
                  className="gx-text-center gx-position-relative gx-w-100"
                  onClick={() => t2[13]?.gstatus && handleClick(t2[13])}>
                  <div className="text-18 font-semibold">{t2[13]?.rate}</div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default AndarBhar;
