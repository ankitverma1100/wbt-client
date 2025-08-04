import Marquee from "react-fast-marquee";

const News = () => {
  const host = window.location.hostname;
  return (
    <Marquee
      style={{ minHeight: 28, fontSize: "14px" }}
      className="gx-fx-xl gx-bg-grey gx-text-white gx-text-uppercase gx-font-weight-semi-bold gx-border gx-bg-flex gx-align-items-center">
      Welcome to 🙏 ${host}.
    </Marquee>
  );
};

export default News;
