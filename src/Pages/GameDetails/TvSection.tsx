import { Row } from "antd";


const TvSection = () => {
  return (
    <Row
      justify="space-between"
      align="middle"
      className="gx-bg-flex gx-bg-grey">
      <div>
        <span className="gx-bg-primary gx-px-3 gx-py-1 gx-font-weight-semi-bold gx-text-white">
          TV
        </span>
      </div>
      <div className="gx-py-1">
        <span className="gx-bg-primary gx-px-3 gx-py-1 gx-font-weight-semi-bold gx-text-white">
          FS
        </span>
      </div>
    </Row>
  );
};

export default TvSection;
