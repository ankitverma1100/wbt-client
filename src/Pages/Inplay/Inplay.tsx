import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Inplay = () => {
  const nav = useNavigate();
  return (
    <div className="gx-main-content-wrapper" style={{ marginBottom: 120 }}>
      <Row justify="center" className="gx-bg-white gx-px-1">
        <Col xs={24}>
          <div
            onClick={() => nav("/main/match-deatils/34466285")}
            className="ant-row gx-pb-2 gx-flex-column gx-px-2 gx-py-3   gx-bg-flex gx-align-items-start gx-justify-content-center"
            style={{ gap: 10, borderBottom: "1px solid blue" }}>
            <div className="ant-col gx-bg-flex gx-px-3" style={{ gap: 10 }}>
              <div
                className=" gx-bg-flex gx-justify-content-center gx-align-items-center gx-rounded-sm"
                style={{ width: 20, backgroundColor: "grey", height: 20 }}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="gx-m-0 gx-text-primary gx-pb-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
                </svg>
              </div>
              <div
                className="gx-bg-flex gx-justify-content-center gx-align-items-center"
                style={{ backgroundColor: "grey", borderRadius: 5 }}>
                <div
                  className="gx-bg-green-0"
                  style={{ width: 15, borderRadius: 5, height: "100%" }}
                />{" "}
                <div className="gx-px-1 gx-fs-lg gx-font-weight-bold gx-text-white">
                  F
                </div>
              </div>
              <div
                className="gx-bg-flex gx-justify-content-center gx-align-items-center"
                style={{ backgroundColor: "grey", borderRadius: 5 }}>
                <div
                  className="gx-bg-green-0"
                  style={{ width: 15, borderRadius: 5, height: "100%" }}
                />{" "}
                <div className="gx-px-1 gx-fs-lg gx-font-weight-bold gx-text-white">
                  B
                </div>
              </div>
              <div className="gx-fs-lg gx-font-weight-semi-bold gx-bg-flex gx-align-items-center gx-justify-content-center">
                28-06-2025 13:30:00
              </div>
            </div>
            <div
              className="ant-col gx-bg-flex  gx-bg-flex gx-align-items-center gx-justify-content-center "
              style={{ gap: 10 }}>
              <div className="gx-fs-xl gx-font-weight-semi-bold">
                Zimbabwe v South Africa
              </div>
            </div>
            <div className="gx-fs-md gx-px-2 gx-d-lg-none gx-d-block gx-font-weight-semi-bold gx-pb-1">
              Test Matches
            </div>
          </div>
          <div
            onClick={() => nav("/main/match-deatils/34466285")}
            className="ant-row gx-pb-2 gx-flex-column gx-px-2 gx-py-3   gx-bg-flex gx-align-items-start gx-justify-content-center"
            style={{ gap: 10, borderBottom: "1px solid blue" }}>
            <div className="ant-col gx-bg-flex gx-px-3" style={{ gap: 10 }}>
              <div
                className=" gx-bg-flex gx-justify-content-center gx-align-items-center gx-rounded-sm"
                style={{ width: 20, backgroundColor: "grey", height: 20 }}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="gx-m-0 gx-text-primary gx-pb-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
                </svg>
              </div>
              <div
                className="gx-bg-flex gx-justify-content-center gx-align-items-center"
                style={{ backgroundColor: "grey", borderRadius: 5 }}>
                <div
                  className="gx-bg-green-0"
                  style={{ width: 15, borderRadius: 5, height: "100%" }}
                />{" "}
                <div className="gx-px-1 gx-fs-lg gx-font-weight-bold gx-text-white">
                  F
                </div>
              </div>
              <div
                className="gx-bg-flex gx-justify-content-center gx-align-items-center"
                style={{ backgroundColor: "grey", borderRadius: 5 }}>
                <div
                  className="gx-bg-green-0"
                  style={{ width: 15, borderRadius: 5, height: "100%" }}
                />{" "}
                <div className="gx-px-1 gx-fs-lg gx-font-weight-bold gx-text-white">
                  B
                </div>
              </div>
              <div className="gx-fs-lg gx-font-weight-semi-bold gx-bg-flex gx-align-items-center gx-justify-content-center">
                30-06-2025 15:30 PM{" "}
              </div>
            </div>
            <div
              className="ant-col gx-bg-flex  gx-bg-flex gx-align-items-center gx-justify-content-center "
              style={{ gap: 10 }}>
              <div className="gx-fs-xl gx-font-weight-semi-bold">
                England U19 VS India U19{" "}
              </div>
            </div>
            <div className="gx-fs-md gx-px-2 gx-d-lg-none gx-d-block gx-font-weight-semi-bold gx-pb-1">
              U19
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Inplay;
