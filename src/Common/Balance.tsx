
interface BalanceProps {
  userBalance: number | undefined;
}
const Balance = ({ userBalance }: BalanceProps) => {
  return (
    <>
      <div className="chips_section">
        <span>
          Chips: <span className="user_wallet">{userBalance?.toFixed(2)}</span>
        </span>{" "}
        <span>
          Expo :{" "}
          <span className="exposer_wallet" style={{ color: "red" }}>
            0
          </span>
        </span>
      </div>
    </>
  );
};

export default Balance;
