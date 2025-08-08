import { useNavigate } from "react-router-dom";

interface BalanceProps {
  userBalance: any;
}
const Balance = ({ userBalance }: BalanceProps) => {
  const nav = useNavigate();
  return (
    <>
      <div className="chips_section">
        <span>
          Chips:{" "}
          <span className="user_wallet">
            {userBalance?.balance?.toFixed(2)}
          </span>
        </span>{" "}
        <span onClick={() => nav("/main/pending")}>
          Expo :{" "}
          <span className="exposer_wallet" style={{ color: "red" }}>
            {userBalance?.liability?.toFixed(2)}
          </span>
        </span>
      </div>
    </>
  );
};

export default Balance;
