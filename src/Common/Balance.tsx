import { useGetUserBalanceQuery } from "../store/service/userServices/userServices";

const Balance = () => {
  const { data: userBalance } = useGetUserBalanceQuery(undefined, {
    pollingInterval: 1000,
    refetchOnMountOrArgChange: true,
  });
  return (
    // <div className="gx-py-1 gx-bg-flex gx-justify-content-center gx-bg-white gx-box-shadow">
    //   {userBalance?.data?.balance?.toFixed(2)}
    //   <a href="/main/pending-bets">
    //     {" "}
    //     | Exp: <span className="gx-text-red">0.00</span>
    //   </a>
    // </div>
    <>
      <div className="chips_section">
        <span>
          Chips: <span className="user_wallet">7000</span>
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
