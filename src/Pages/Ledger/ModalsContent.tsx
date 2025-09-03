import { useState, type FC } from "react";

import CasinoContent from "./CasinoContent";

interface Props {
  sportName: string;
  handleClose: () => void;
  casinoData: DataBetLedger | undefined;
  casinoDataShow: boolean;
  casinoDate: string;
  setShowMatchBet: React.Dispatch<React.SetStateAction<boolean>>;
  showMatchBet: boolean;
}

const ModalsContent: FC<Props> = ({ handleClose, casinoData, casinoDate, showMatchBet, setShowMatchBet }) => {
  return (
    <div>
      <CasinoContent
        casinoData={casinoData}
        handleClose={handleClose}
        casinoDate={casinoDate}
        setShowMatchBet={setShowMatchBet}
        showMatchBet={showMatchBet}
      />
    </div>
  );
};

export default ModalsContent;
