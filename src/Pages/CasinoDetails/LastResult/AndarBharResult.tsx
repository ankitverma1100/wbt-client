import Slider from "react-slick";
import { Col, Row } from "antd";
import CardComp from "../VideoSection/CardComp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  arrows: true,
  slidesToScroll: 1,
  slidesToShow: 11,
  responsive: [
    {
      breakpoint: 800, // screen width at which settings will change
      settings: {
        slidesToShow: 5, // number of slides to show when screen width is <= 800px
      },
    },
  ],
};

const AndarBharResult = ({ result }: any) => {
  const splitByStar = result[0]?.cards?.split("*");
  const finalResult = splitByStar.map((item) => item.split(","));

  return (
    <div className="casino-result-modal">
      <div className="casino-result-round-id">
        <span>
          <b>Round Id: </b> {result[0]?.mid}
        </span>
      </div>

      <Row style={{ margin: "12px 0px" }}>
        <Col xs={24}>
          <div className="three-card-result-container">
            <div className="text-center">Andar</div>
            <div
              className="three-card-result result_slick"
              style={{ width: "100%" }}>
              <Slider {...settings}>
                {finalResult[0]?.map((item, id) => {
                  if (item === "") return null;
                  return <CardComp key={id} shown={true} card={item} />;
                })}
              </Slider>
            </div>
          </div>
        </Col>
        <Col xs={24} style={{ marginTop: "12px" }}>
          <div className=" three-card-result-container">
            <div className="text-center">Bahar</div>
            <div className="three-card-result result_slick">
              <Slider {...settings}>
                {finalResult[1]?.map((item, id) => {
                  if (item === "") return null;
                  return <CardComp key={id} shown={true} card={item} />;
                })}
              </Slider>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AndarBharResult;
