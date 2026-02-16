import { useEffect, useState } from "react";
import { useGetUserLiabilityMutation } from "../store/service/userServices/userServices";
import ExposureModal from "./ExposureModal";

interface BalanceData {
  balance?: number;
  liability?: number;
}

interface BalanceProps {
  userBalance?: BalanceData;
}

const formatAmount = (value?: number) => {
  const num = Number(value);
  if (Number.isNaN(num)) return "0.00";
  return num.toFixed(2);
};

const Balance = ({ userBalance }: BalanceProps) => {
  const [isExposureOpen, setIsExposureOpen] = useState(false);
  const [loadExposure, { data: exposureData, isLoading }] =
    useGetUserLiabilityMutation();
  const chips = formatAmount(userBalance?.balance);
  const expo = formatAmount(userBalance?.liability);

  useEffect(() => {
    if (isExposureOpen) {
      loadExposure();
    }
  }, [isExposureOpen, loadExposure]);

  return (
    <>
      <div className="chips_section">
        <span className="chips-value" style={{ color: "green" }}>
          Chips:{""}
          <span className="user_wallet">{chips}</span>
        </span>{" "}
        <div className="expo-combo">
          <span
            className="chips-value "
            style={{ color: "red" }}
          >
            Expo :{""}
            <span className="exposer_wallet" style={{ color: "red" }}>
              {expo}
            </span>
          </span>
          <button type="button" className="bet-btn">
            <span onClick={() => setIsExposureOpen(true)}>Bets</span>
          </button>
        </div>
      </div>

      <ExposureModal
        open={isExposureOpen}
        onClose={() => setIsExposureOpen(false)}
        isLoading={isLoading}
        bets={exposureData?.data}
      />
    </>
  );
};

export default Balance;
