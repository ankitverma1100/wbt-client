import { Card, Col, Row } from "antd";
import { useParams } from "react-router-dom";
import AAACard from "./AAACard";
import TeenCard from "./TeenCard";
import DT20Card from "./DT20Card";
import AndarBaharCardOnVideo from "./AndarBaharCardOnVideo";
import CardComp from "./CardComp";
import OneDayCard from "./OneDayCard";

const VideoSection = ({ t1, t3, t2 }: any) => {
  const { id } = useParams();

  const videoData: Record<string, string> = {
    "52": "3035",
    "55": "3041",
    "53": "3058",
    "56": "3056",
    "51": "3030",
    "61": "3047",
    "60": "3053",
  };


  return (
    <Card
      bordered={true}
      className="gx-bg-black gx-text-white p-0 gx-my-0  ant-space-align-center gx-position-relative">
      <iframe
        title=" "
        className="gx-w-100"
        src={`https://casino.loki7exch.com/route/?id=${videoData[id]}`}
        style={{ height: 350 }}
      />
      <div className="gx-w-100 gx-p-3 gx-position-absolute gx-top-0 gx-left-0">
        {(id === "53" || id === "56") && <AAACard t1={t1} />}
        {id === "51" && <TeenCard t1={t1} />}
        {id === "52" && <DT20Card t1={t1} />}
        {id === "62" && <DT20Card t1={t1} />}
        {id === "54" && <AndarBaharCardOnVideo t3={t3} />}
        {id === "61" && <OneDayCard t2={t2} />}
      </div>
      <div
        className=" gx-position-absolute"
        style={{ bottom: 16, right: "50%" }}>
        <div className="flip-countdown theme-dark size-small">
          <span className="flip-countdown-piece">
            <span className="flip-countdown-card">
              <span className="flip-countdown-card-sec two flip">
                <span
                  className="card__top"
                  style={{ color: "#000", fontSize: "18px" }}>
                  {t1.autotime}
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default VideoSection;
