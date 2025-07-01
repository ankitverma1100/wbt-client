/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import "./style.scss";
import BetplaceDesk from "./BetplaceDesk";
import BetplaceMob from "./BetplaceMob";
import TvSection from "./TvSection";
import Bookmaker from "./Bookmaker";
import Toss from "./Toss";
import Session from "./Session";

const GameDetails = () => {
  return (
    <div className="gx-main-content-wrapper main_game" style={{ marginBottom: 120 }}>
      <TvSection />

      <Row align="middle">
        <Col xs={24} sm={24} className="gx-col-full">
          <Row style={{ height: 110 }}>
            <iframe
              src="https://score.trovetown.co/socket-iframe-1/crickexpo/34466285"
              title="Score-I-frame"
              className=""
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </Row>
        </Col>
        <Bookmaker />
        <Toss />
        <Session />
      </Row>

      <BetplaceMob />
      <BetplaceDesk />
      <div className="gx-mb-2"></div>

      <Row align="middle">
        <Col xs={24} sm={24} className="gx-px-0 gx-py-0 gx-mx-0 gx-my-0">
          <div className="gx-bg-flex gx-justify-content-center gx-bg-grey gx-fs-lg gx-font-weight-semi-bold gx-text-white gx-py-1">
            FANCY BETS
          </div>
        </Col>
        <Col xs={24} sm={24} className="gx-px-0 gx-py-0 gx-mx-0 gx-my-0">
          <div className="gx-bg-flex gx-justify-content-center">
            No Data Found
          </div>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col className=" gx-px-0 gx-py-2 gx-my-1 gx-justify-content-center">
          <button
            type="button"
            className="ant-btn ant-btn-default gx-bg-grey gx-text-white gx-text-uppercase gx-font-weight-semi-bold">
            <span>Completed Bets</span>
          </button>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <div className="ant-col gx-px-0 gx-py-2 gx-my-1 gx-justify-content-center">
          <button
            type="button"
            className="ant-btn ant-btn-default gx-my-0  gx-bg-grey gx-text-white gx-text-uppercase gx-font-weight-semi-bold ">
            <span>All Matches</span>
          </button>
        </div>
      </Row>
    </div>
  );
};

export default GameDetails;
