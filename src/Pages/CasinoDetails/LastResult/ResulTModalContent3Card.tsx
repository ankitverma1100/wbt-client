import { FaTrophy } from "react-icons/fa";
import { Col, Row } from "antd";
import CardComp from "../VideoSection/CardComp";

const ResulTModalContent3Card = ({ result }: any) => {
  const cardArr = result[0]?.cards?.split(",");
  return (
    <div className="casino-result-modal">
      <div className="casino-result-round-id">
        <span>
          <b>Round Id: </b> {result[0]?.mid}
        </span>
      </div>

      <Row>
        <Col xs={24}>
          <div className=" three-card-result-container">
            <div className="text-center">Player A</div>
            <div className=" three-card-result">
              <CardComp shown={true} card={cardArr[0]} />
              <CardComp shown={true} card={cardArr[2]} />
              <CardComp shown={true} card={cardArr[4]} />
              {result[0]?.win === "1" && (
                <FaTrophy className="tropth_win trophyIcon" />
              )}
            </div>
            <div></div>
          </div>
        </Col>
        <Col xs={24} style={{ marginTop: "5px" }}>
          <div className=" three-card-result-container">
            <div className="text-center">Player B</div>
            <div className="three-card-result">
              <CardComp shown={true} card={cardArr[1]} />
              <CardComp shown={true} card={cardArr[3]} />
              <CardComp shown={true} card={cardArr[5]} />
              <div>
                {result[0]?.win !== "1" && (
                  <FaTrophy className="tropth_win trophyIcon trophyIcon1" />
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", marginTop: "17px" }}>
        <Col xs={24} md={6}>
          <div className="casino-result-desc">
            <div className="casino-result-desc-item">
              <div>Winner: </div>
              <div className="font_bold">
                {result[0]?.win === "1" ? "Player A" : "Player B"}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResulTModalContent3Card;
