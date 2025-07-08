import { useNavigate } from "react-router-dom";
import "./style.scss";

const CasinoHome = () => {
  const nav = useNavigate();
  return (
    <div className="container-fluid p-2">
      <div className="new-heading mt-2">Virtual Casino</div>
      <div className="flexdiv">
        <div className="casino-game">
          <div className="">
            <img
              src="/img/andar-bahar.png"
              style={{ borderRadius: 5 }}
              className="w-100"
            />
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="/img/Dragon%20Tiger.png"
              style={{ borderRadius: 5 }}
              className="w-100"
            />
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="/img/Teenpatti%20One-Day%20(Virtual).png"
              style={{ borderRadius: 5 }}
              className="w-100"
            />
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="/img/7_1.png"
              style={{ borderRadius: 5 }}
              className="w-100"
            />
          </div>
        </div>
      </div>
      <div className="new-heading mt-2">Live Casino</div>
      <div className="flexdiv" style={{ justifyContent: "center" }}>
        <div
          className="casino-game"
          onClick={() => {
            nav("/main/casino/54");
          }}>
          <div className="">
            <img src="/img/andar-bahar.jpeg" className="w-100" />
          </div>
        </div>
        <div
          className="casino-game"
          onClick={() => {
            nav("/main/casino/56");
          }}>
          <div className="">
            <img src="/img/amar-akhbar.jpeg" className="w-100" />
          </div>
        </div>
        <div className="casino-game" onClick={() => {
            nav("/main/casino/53");
          }}>
          <div className="">
            <img src="/img/lucky7.jpeg" className="w-100" />
          </div>
        </div>
        <div
          className="casino-game"
          onClick={() => {
            nav("/main/casino/51");
          }}>
          <div className="">
            <img src="/img/teen-patti2.jpeg" className="w-100" />
          </div>
        </div>
        <div className="casino-game" onClick={() => {
            nav("/main/casino/52");
          }}>
          <div className="">
            <img src="/img/live-dragon-tiger2.jpeg" className="w-100" />
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img src="/img/live-dragon-tiger.jpeg" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoHome;
