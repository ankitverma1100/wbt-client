import { useParams } from "react-router-dom";
import { useCasinoResultQuery } from "../../../store/service/casino/casinoServices";
import { LetterAndColorById, titleById } from "../Constant";
import { useState } from "react";
import ResultModalContainer from "./ResultModalContainer";
import { Modal } from "antd";

interface Props {
  matchId: any;
  casinoName: any;
}

const LastResult = ({ matchId, casinoName }: Props) => {
  const [first, setFirst] = useState("");
  const [openMod, setOpenMod] = useState(false);
  const { id } = useParams();
  const { data: resultList } = useCasinoResultQuery(casinoName, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  const handleClick = (val: string) => {
    setFirst(val);
    if (val) {
      setOpenMod(true);
    }
  };
  return (
    <div
      className="gx-my-1 gx-mx-1 "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
      <Modal
        title={`${titleById[id]} Result`}
        onCancel={() => setOpenMod(false)}
        open={openMod}
        className="betModals"
        footer={false}>
        {" "}
        <ResultModalContainer
          setOpen={setOpenMod}
          open={openMod}
          tableId={id}
          mid={first}
        />
      </Modal>

      <div className="gx-text-white gx-fs-md gx-font-weight-medium gx-bg-grey gx-p-2 gx-bg-flex gx-justify-content-between gx-align-items-center">
        <span className="">Last Result</span>
        <span className=" gx-pointer ">View All</span>
      </div>
      <div className="gx-bg-flex gx-justify-content-end gx-align-items-center gx-py-2 gx-px-2">
        {id === "51" &&
          resultList?.map((item) => {
            return (
              <div
                className="gx-rounded-circle gx-p-1 gx-ml-1 cursor-pointer gx-fs-md gx-bg-flex gx-justify-content-center gx-align-content-center gx-text-white gx-font-weight-semi-bold"
                style={{
                  backgroundColor: LetterAndColorById[id]?.[item.result]?.color,
                  width: 24,
                  height: 24,
                }}>
                <p
                  className="text-[#FFFF2E] font-normal text-sm"
                  onClick={() => handleClick(item.mid)}>
                  {" "}
                  {LetterAndColorById[id]?.[item.result]?.label}
                </p>
              </div>
            );
          })}
        {id === "61" &&
          resultList?.map((item) => {
            return (
              <div
                className="gx-rounded-circle gx-p-1 gx-ml-1 cursor-pointer gx-fs-md gx-bg-flex gx-justify-content-center gx-align-content-center gx-text-white gx-font-weight-semi-bold"
                style={{
                  backgroundColor: LetterAndColorById[id]?.[item.result]?.color,
                  width: 24,
                  height: 24,
                }}>
                <p
                  className="text-[#FFFF2E] font-normal text-sm"
                  onClick={() => handleClick(item.mid)}>
                  {" "}
                  {LetterAndColorById[id]?.[item.result]?.label}
                </p>
              </div>
            );
          })}
        {id === "53" &&
          resultList?.map((item) => {
            return (
              <div
                className="gx-rounded-circle gx-p-1 gx-ml-1 cursor-pointer gx-fs-md gx-bg-flex gx-justify-content-center gx-align-content-center gx-text-white gx-font-weight-semi-bold"
                style={{
                  backgroundColor: LetterAndColorById[id]?.[item.result]?.color,
                  width: 24,
                  height: 24,
                }}>
                <p
                  className="text-[#FFFF2E] font-normal text-sm"
                  onClick={() => handleClick(item.mid)}>
                  {" "}
                  {LetterAndColorById[id]?.[item.result]?.label}
                </p>
              </div>
            );
          })}
        {id === "56" &&
          resultList?.map((item) => {
            return (
              <div
                className="gx-rounded-circle gx-p-1 gx-ml-1 cursor-pointer gx-fs-md gx-bg-flex gx-justify-content-center gx-align-content-center gx-text-white gx-font-weight-semi-bold"
                style={{
                  backgroundColor: LetterAndColorById[id]?.[item.result]?.color,
                  width: 24,
                  height: 24,
                }}>
                <p
                  className="text-[#FFFF2E] font-normal text-sm"
                  onClick={() => handleClick(item.mid)}>
                  {" "}
                  {LetterAndColorById[id]?.[item.result]?.label}
                </p>
              </div>
            );
          })}
        {id === "52" &&
          resultList?.map((item) => {
            return (
              <div
                className="gx-rounded-circle gx-p-1 gx-ml-1 cursor-pointer gx-fs-md gx-bg-flex gx-justify-content-center gx-align-content-center gx-text-white gx-font-weight-semi-bold"
                style={{
                  backgroundColor: LetterAndColorById[id]?.[item.result]?.color,
                  width: 24,
                  height: 24,
                }}>
                <p
                  className="text-[#FFFF2E] font-normal text-sm"
                  onClick={() => handleClick(item.mid)}>
                  {" "}
                  {LetterAndColorById[id]?.[item.result]?.label}
                </p>
              </div>
            );
          })}
        {id === "62" &&
          resultList?.map((item) => {
            return (
              <div
                className="gx-rounded-circle gx-p-1 gx-ml-1 cursor-pointer gx-fs-md gx-bg-flex gx-justify-content-center gx-align-content-center gx-text-white gx-font-weight-semi-bold"
                style={{
                  backgroundColor: LetterAndColorById[id]?.[item.result]?.color,
                  width: 24,
                  height: 24,
                }}>
                <p
                  className="text-[#FFFF2E] font-normal text-sm"
                  onClick={() => handleClick(item.mid)}>
                  {" "}
                  {LetterAndColorById[id]?.[item.result]?.label}
                </p>
              </div>
            );
          })}
        {id === "54" &&
          resultList?.map((item) => {
            return (
              <div
                className="gx-rounded-circle gx-p-1 gx-ml-1 cursor-pointer gx-fs-md gx-bg-flex gx-justify-content-center gx-align-content-center gx-text-white gx-font-weight-semi-bold"
                style={{
                  backgroundColor: LetterAndColorById[id]?.[item.result]?.color,
                  width: 24,
                  height: 24,
                }}>
                <p
                  className="text-[#FFFF2E] font-normal text-sm"
                  onClick={() => handleClick(item.mid)}>
                  {" "}
                  {LetterAndColorById[id]?.[item.result]?.label}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LastResult;
