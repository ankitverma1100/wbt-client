import { useLayoutEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./News.scss";
import { useGetMessageQuery } from "../store/service/userServices/userServices";

const News = () => {
  const { data, isError } = useGetMessageQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 60000,
  });
  const message = data?.data;
  const [headerHeight, setHeaderHeight] = useState(100);

  useLayoutEffect(() => {
    const header = document.querySelector(".header_wrapper");
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.getBoundingClientRect().height);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  if (isError || data?.status === false || typeof message !== "string" || !message.trim()) {
    return null;
  }

  return (
    <div className="panel-news-space">
      <div
        className="panel-news"
        aria-label="Panel announcement"
        role="region"
        style={{ top: headerHeight }}>
        <Marquee speed={40} pauseOnHover className="panel-news-scroll">
          <span className="panel-news-text">{message}</span>
        </Marquee>
      </div>
    </div>
  );
};

export default News;
