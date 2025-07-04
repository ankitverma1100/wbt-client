import { useGetUserBalanceQuery } from "../store/service/userServices/userServices";

const Balance = () => {
  const { data: userBalance } = useGetUserBalanceQuery(undefined, {
    pollingInterval: 1000,
    refetchOnMountOrArgChange: true,
  });
  return (
    <>
      <div className="chips_section">
        <span>
          Chips:{" "}
          <span className="user_wallet">
            {userBalance?.data?.balance?.toFixed(2)}
          </span>
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
