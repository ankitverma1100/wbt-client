import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetCasinoResyltByRoundIdMutation } from "../../../store/service/casino/casinoServices";
import "./resultModalContent.scss";
import ResulTModalContent3Card from "./ResulTModalContent3Card";
import { titleById } from "../Constant";
import AndarBharResult from "./AndarBharResult";
import DTLResult from "./DTLResult";
import AAAResult from "./AAAResult";
import DRAGONRules from "./DRAGONRules";

const ResultModalContainer = ({ mid, tableId, open, setOpen }: any) => {
  const { id } = useParams();

  const [trigger, { data, isLoading }] = useGetCasinoResyltByRoundIdMutation();

  useEffect(() => {
    if (mid) {
      trigger(mid);
    }
  }, [mid]);

  useEffect(() => {
    if (open) {
      document.querySelector("body")?.classList.add("modal-open-sus");
    } else {
      document.querySelector("body")?.classList.remove("modal-open-sus");
    }
    return () => {};
  }, [open]);

  return (
    <div>
      {isLoading && (
        <p className="place-lodder">
          <div>
            <i className="fa fa-spinner fa-spin"></i>
          </div>
        </p>
      )}
      <div>
        <div className="modal_overall">
          <div className="modal_overlay"></div>
          <div className={"modal_container lg"}>
            {(id === "51" || id === "57" || id === "61") && data?.data && (
              <ResulTModalContent3Card result={data?.data} />
            )}
            {id === "54" && data?.data && (
              <AndarBharResult result={data?.data} />
            )}
            {(id === "52" || id === "62") && data?.data && (
              <DRAGONRules result={data?.data} />
            )}
            {(id === "56" || id === "55" || id === "53") && data?.data && (
              <AAAResult id={id} result={data?.data} />
            )}
            {/* {id === "61" && data?.data && (
              <DTLResult id={id} result={data?.data} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModalContainer;
