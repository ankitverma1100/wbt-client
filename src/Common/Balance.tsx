import { useGetUserBalanceQuery } from "../store/service/userServices/userServices";

const Balance = () => {
  const { data: userBalance } = useGetUserBalanceQuery(undefined, {
    pollingInterval: 1000,
    refetchOnMountOrArgChange: true,
  });
  return (
    <div className="gx-py-1 gx-bg-flex gx-justify-content-center gx-bg-white gx-box-shadow">
      {userBalance?.data?.balance?.toFixed(2)}
      <a href="/main/pending-bets">
        {" "}
        | Exp: <span className="gx-text-red">0.00</span>
      </a>
    </div>
  );
};

export default Balance;
