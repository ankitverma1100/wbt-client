import { Col, Row } from "antd";
import { FaTrophy } from "react-icons/fa";
import CardComp from "../VideoSection/CardComp";

const AAAResult = ({ result, id }: any) => {
  const cardArr = result[0]?.cards?.split(",");

  return (
    <div className="casino-result-modal">
      <div className="casino-result-round-id">
        <span>
          <b>Round Id: </b> {result[0]?.mid}
        </span>
      </div>

      <Row>
        <Col xs={24} md={24}>
          <div className=" three-card-result-container">
            {/* <div className="text-center">Dragon</div> */}
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
      </Row>
      <div>
        <Row style={{ justifyContent: "center", marginTop: "12px" }}>
          <Col xs={26} md={12}>
            <div className="casino-result-desc">
              <div className="casino-result-desc-item">
                <div>Winner: </div>
                <div className="font_bold">{result[0]?.desc.split("|")[0]}</div>
              </div>
              {id === "55" ? (
                <>
                  <div className="casino-result-desc-item">
                    <div>Odd: </div>
                    <div className="font_bold">
                      {result[0]?.desc.split("|")[1] === "Even" ? "No" : "Yes"}
                    </div>
                  </div>
                  <div className="casino-result-desc-item">
                    <div>Dulha Dulhan/Barati: </div>
                    <div className="font_bold">
                      {result[0]?.desc.split("|")[3]}
                    </div>
                  </div>
                  <div className="casino-result-desc-item">
                    <div>Color: </div>
                    <div className="font_bold">
                      {result[0]?.desc.split("|")[2]}
                    </div>
                  </div>
                </>
              ) : id === "53" ? (
                <>
                  <div className="casino-result-desc-item">
                    <div>Odd/Even: </div>
                    <div className="font_bold">
                      {result[0]?.desc.split("||")[2]}
                    </div>
                  </div>
                  <div className="casino-result-desc-item">
                    <div>Color: </div>
                    <div className="font_bold">
                      {result[0]?.desc.split("||")[1]}
                    </div>
                  </div>

                  <div className="casino-result-desc-item">
                    <div>Card: </div>
                    <div className="font_bold">
                      {result[0]?.desc.split("||")[3]}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="casino-result-desc-item">
                    <div>Card: </div>
                    <div className="font_bold">
                      {result[0]?.desc.split("|")[2]}
                    </div>
                  </div>
                  <div className="casino-result-desc-item">
                    <div>Color: </div>
                    <div className="font_bold">
                      {result[0]?.desc.split("|")[1]}
                    </div>
                  </div>
                  <div className="casino-result-desc-item">
                    <div>Under/Over: </div>
                    <div>{result[0]?.desc.split("|")[3]}</div>
                  </div>
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AAAResult;
