import { useNavigate } from "react-router-dom";

interface BalanceProps {
  userBalance: any;
}
const Balance = ({ userBalance }: BalanceProps) => {
  const nav = useNavigate();
  return (
    <>
      <div className="chips_section">
        <span className="chips-value" style={{ color: "green" }}>
          Chips:{""}
          <span className="user_wallet">
            {/* {userBalance?.balance?.toFixed(2)} */}
            1000
          </span>
        </span>{" "}
       <div className="expo-combo">
         <span className="chips-value " style={{ color: "red" }} onClick={() => nav("/main/pending")}>
          Expo :{""}
          <span className="exposer_wallet" style={{ color: "red" }}>
            {/* {userBalance?.liability?.toFixed(2)} */}
            0 
          </span>
        </span>
        <button type="button" className="bet-btn"><span>Bets</span></button>
       </div>
      </div>
    </>
  );
};

export default Balance;
