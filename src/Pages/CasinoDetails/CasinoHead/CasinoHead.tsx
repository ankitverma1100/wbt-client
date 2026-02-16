import { Row } from "antd";
import { titleById } from "../Constant";
import { useParams } from "react-router-dom";

interface CasinoHeadProps {
  t1?: any;
}

const CasinoHead = ({ t1 }: CasinoHeadProps) => {
  const { id } = useParams();
  return (
    <div className="casino-head">
      <Row
        justify={"space-between"}
        align="middle"
        className="casino-head-row gx-fs-sm gx-font-weight-bold">
        <div className="casino-head-title">
          <div className="gx-text-white gx-uppercase">{titleById[id]}</div>
        </div>
        <div className="casino-head-round">
          <div className="gx-text-white gx-d-flex gx-justify-content-center ant-space-align-center gx-gap-2">
            <span>Round ID : {t1?.mid}</span>
            <span className="gx-pointer gx-d-flex gx-justify-content-center ant-space-align-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg">
                <path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 1 1-26 26 26 26 0 0 1 26-26zm48 226h-88a16 16 0 0 1 0-32h28v-88h-16a16 16 0 0 1 0-32h32a16 16 0 0 1 16 16v104h28a16 16 0 0 1 0 32z" />
              </svg>
            </span>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default CasinoHead;
