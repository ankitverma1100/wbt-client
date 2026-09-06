import Marquee from "react-fast-marquee";
import { useGetMessageQuery } from "../store/service/userServices/userServices";

const News = () => {
  const { data, isError } = useGetMessageQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 60000,
  });
  const message = data?.data;

  if (isError || data?.status === false || typeof message !== "string" || !message.trim()) {
    return null;
  }

  return (
    <div aria-label="Panel announcement" role="region">
      <Marquee
        speed={40}
        pauseOnHover
        style={{
          minHeight: 28,
          padding: "4px 0",
          background: "#111",
          color: "#fff",
          fontSize: "14px",
        }}>
        {message}
      </Marquee>
    </div>
  );
};

export default News;
