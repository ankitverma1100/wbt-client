import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import { titleById } from "../Constant";
import CardComp from "./CardComp";

const DT20Card = ({ t1 }: any) => {
  const { id } = useParams();
  const rawTitle = (titleById as any)[id ?? ""] ?? "";
  const label = rawTitle
    .toString()
    .replace(/20-20\s*/i, "")
    .replace(/\s+/g, "");

  return (
    <Row className="dt20-card-badge gx-pt-2">
      <Col>
        <Row className="dt20-card-badge-row">
          <Col xs={12} className="dt20-card-col">
            <CardComp shown={t1?.C1 != "1"} card={t1?.C1 || "1"} />
          </Col>
          <Col xs={12} className="dt20-card-col">
            <CardComp shown={t1?.C2 != "1"} card={t1?.C2 || "1"} />
          </Col>
        </Row>
        {label && <div className="dt20-card-label">{label}</div>}
      </Col>
    </Row>
  );
};

export default DT20Card;
