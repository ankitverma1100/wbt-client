import { Col, Row } from "antd";
import { FaTrophy } from "react-icons/fa";
import CardComp from "../VideoSection/CardComp";

const DTLResult = ({ result, id }: any) => {
  const cardArr = result[0]?.cards?.split(",");

  console.log(result, "cardArrcardArrcardArrcardArr");
  return (
    <div className="casino-result-modal">
      <div className="casino-result-round-id">
        <span>
          <b>Round Id: </b> {result[0]?.mid}
        </span>
      </div>

      <Row>
        <Col xs={12} md={4}>
          <div className=" three-card-result-container">
            <div className="text-center">Dragon</div>
            <div className=" three-card-result">
              <CardComp shown={true} card={cardArr[0]} />
              <div>
                {result[0]?.win === "1" && (
                  <FaTrophy className="tropth_win trophyIcon trophyIcon1" />
                )}
              </div>
            </div>
            <div></div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="w-50 three-card-result-container">
            <div className="text-center">Tiger</div>
            <div className="three-card-result">
              <CardComp shown={true} card={cardArr[1]} />

              <div>
                {result[0]?.win === "21" && (
                  <FaTrophy className="tropth_win trophyIcon trophyIcon1" />
                )}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="w-50 three-card-result-container">
            <div className="text-center">Lion</div>
            <div className="three-card-result">
              <CardComp shown={true} card={cardArr[2]} />

              <div>
                {result[0]?.win === "41" && (
                  <FaTrophy className="tropth_win trophyIcon trophyIcon1" />
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div>
        <Row>
          <Col xs={12} md={6}>
            <div className="casino-result-desc">
              <div className="casino-result-desc-item">
                <div>Winner: </div>
                <div className="font_bold">{result[0]?.desc.split("|")[0]}</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DTLResult;
