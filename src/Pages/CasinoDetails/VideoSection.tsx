import { Card } from "antd";
import { useParams } from "react-router-dom";

const VideoSection = ({ t1, t3 }: any) => {
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
        <div
          className="ant-row gx-pt-2"
          style={{
            marginLeft: "-8px",
            marginRight: "-8px",
            rowGap: 8,
          }}>
          <div
            className="ant-col ant-col-24"
            style={{ paddingLeft: 8, paddingRight: 8 }}>
            <span className="ant-typography gx-text-white">
              <strong>Card</strong>
            </span>
          </div>
          <div className="ant-col" style={{ paddingLeft: 8, paddingRight: 8 }}>
            <img
              src="/card/1.png"
              alt="card"
              className=" gx-rounded-sm"
              style={{ height: "3rem" }}
            />
          </div>
        </div>
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
