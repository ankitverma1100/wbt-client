import { useNavigate } from "react-router-dom";

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
  const nav = useNavigate();
  const chips = formatAmount(userBalance?.balance);
  const expo = formatAmount(userBalance?.liability);

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
            onClick={() => nav("/main/pending")}
          >
            Expo :{""}
            <span className="exposer_wallet" style={{ color: "red" }}>
              {expo}
            </span>
          </span>
          <button type="button" className="bet-btn">
            <span>Bets</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Balance;
