import type { FC } from "react";
import { useState } from "react";
import moment from "moment";
import CasinoBetLedger from "./CasinoBetLedger";

interface Props {
  casinoData: any;
  handleClose: () => void;
  casinoDate: string;
  setShowMatchBet: React.Dispatch<React.SetStateAction<boolean>>;
  showMatchBet: boolean;
}

const CasinoContent: FC<Props> = ({
  casinoData,
  handleClose,
  casinoDate,
  setShowMatchBet,
  showMatchBet,
}) => {
  const [casinoBetData, setCasinoBetData] = useState([]);

  const handleMatchBet = (name: string) => {
    setShowMatchBet(true);
    let casinoBetList = casinoData?.dataAndBets?.reduce((acc, item) => {
      if (item?.name === name) {
        acc[item?.name] = item?.betList;
      }
      return acc;
    }, {});
    setCasinoBetData(casinoBetList[name]);
  };

  const handleBack = () => {
    setShowMatchBet(false);
  };

  return (
    <div>
      <div className="modal-body">
        <div className="ng-star-inserted">
          {showMatchBet && <CasinoBetLedger ledgerData={casinoBetData} />}
          {casinoData?.dataAndBets?.map((items: any) => {
            return (
              <div
                className="popup-row"
                style={{ cursor: "pointer", color: "#2560ad" }}
                onClick={() => handleMatchBet(items?.name)}>
                {items?.name}{" "}
                <span style={{ color: items?.pnl > 0 ? "green" : "red" }}>
                  {items?.pnl > 0 ? "WON coins" : "LOST coins"}
                </span>
                <span style={{ color: items?.pnl > 0 ? "green" : "red" }}>
                  : {items?.pnl}
                </span>
              </div>
            );
          })}
          <div className="popup-row">
            Total Commission : {casinoData?.totalCommission || 0}
          </div>
          <div
            className="popup-row"
            style={{ color: casinoData?.totalWon >= 0 ? "green" : "red" }}>
            {casinoData?.totalWon >= 0 ? "WON Coins" : "LOST Coins"} :{" "}
            {casinoData?.totalWon}
          </div>
        </div>

        <div className="popup_Btn">
          <button
            type="button"
            className="popupBtn"
            onClick={handleClose}
            style={{ display: "block" }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CasinoContent;
