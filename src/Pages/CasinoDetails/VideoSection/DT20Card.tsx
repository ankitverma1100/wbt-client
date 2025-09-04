import { Col, Row } from "antd";
import CardComp from "./CardComp";

const DT20Card = ({ t1 }: any) => {
  return (
    <Row
      className="gx-pt-2"
      style={{ marginLeft: "-8px", marginRight: "-8px", rowGap: 8 }}>
      <Col style={{ paddingLeft: 8, paddingRight: 8 }}>
        <Row style={{ marginLeft: "-4px", marginRight: "-4px", rowGap: 8 }}>
          <Col xs={12} style={{ paddingLeft: 4, paddingRight: 4 }}>
            <CardComp shown={t1?.C1 != "1"} card={t1?.C1 || "1"} />
          </Col>
          <Col xs={12} style={{ paddingLeft: 4, paddingRight: 4 }}>
            <CardComp shown={t1?.C2 != "1"} card={t1?.C2 || "1"} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DT20Card;
