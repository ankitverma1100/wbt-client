import { Col, Row } from "antd";

const BetplaceDesk = () => {
  return (
    <Row id="betPLaceModal" className="hide-mob" align="middle" justify="center">
      <Col
        xs={24}
        sm={22}
        className="gx-px-0 gx-py-0 gx-rounded-lg gx-mx-0 gx-my-0"
        style={{ border: "2px solid rgb(139, 128, 0)" }}>
        <div className="gx-my-1 gx-lg-block gx-d-none gx-d-lg-block gx-mx-1">
          <div className="gx-bg-flex gx-align-items-center gx-fs-xl  gx-px-5 ">
            <div style={{ gap: 40 }}>
              <span>TOTAL MATCH RUNS(NK VS LL)</span>
              <span>
                Rate : 248 [1]
                <span style={{ color: "rgb(250, 169, 186)" }}>(No)</span>
              </span>
            </div>
            <span
              className="gx-bg-grey gx-bg-flex gx-justify-content-center gx-align-items-center gx-rounded-circle gx-font-weight-semi-bold gx-fs-xl gx-text-white gx-text-center"
              style={{ width: 30, height: 30 }}>
              <span>7</span>
            </span>
          </div>
          <div
            className="gx-bg-flex  gx-justify-content-center gx-align-items-center"
            style={{ gap: 10 }}>
            <span>Amount</span>
            <span>
              <input
                type="number"
                className="ant-input gx-font-weight-semi-bold gx-fs-lg"
                defaultValue={0}
              />
            </span>
            <button
              type="button"
              className="ant-btn ant-btn-default gx-bg-primary gx-text-white gx-text-uppercase  gx-mb-0 gx-px-2">
              <span>Done</span>
            </button>
          </div>
          <div className="gx-text-center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 10,
                gap: 30,
                padding: "0px 10px",
              }}>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                100
              </button>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                500
              </button>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                1000
              </button>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                2000
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 10,
                gap: 30,
                padding: "0px 10px",
              }}>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                5000
              </button>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                10000
              </button>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                25000
              </button>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                50000
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 10,
                gap: 30,
                padding: "0px 10px",
              }}>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                100000
              </button>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                200000
              </button>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                300000
              </button>
              <button
                type="button"
                className="ant-btn ant-btn-default gx-px-5 gx-font-weight-semi-bold gx-text-white gx-bg-grey gx-bg-grey"
                style={{ margin: 5 }}>
                500000
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 5,
              }}>
              <button
                type="button"
                className="ant-btn ant-btn-danger gx-text-uppercase">
                <span>Clear</span>
              </button>
              <button
                type="button"
                className="ant-btn ant-btn-danger gx-text-uppercase">
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BetplaceDesk;
