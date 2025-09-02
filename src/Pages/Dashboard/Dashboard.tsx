import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="page-body">
        <div className="">
          <Marquee
            style={{
              background: "black",
              color: "white",
              textTransform: "uppercase",
              padding: "0",
              fontSize: "14px",
              font: "inherit",
            }}>
            {window.location.hostname} &nbsp; में आपका स्वागत है
            हमारी कोई डुप्लीकेट वेबसाइट नहीं है कृपा हमारी आधिकारिक लिंक{" "}
            <span style={{ padding: "0px 3px" }}>
              {window.location.hostname}
            </span>{" "}
            से ही लॉगिन करें"
          </Marquee>
        </div>
        <div className="container">
          <div className="row padding_space">
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/matches">
                <img src="/img/1.png" /> In Play{" "}
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/profile">
                <img src="/img/2.png" /> Profile{" "}
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/statement">
                <img src="/img/3.png" /> Statement{" "}
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/changepassword">
                <img src="/img/4.png" /> Change Password
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/freegames">
                <img src="/img/5.png" /> Free Games
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/rules">
                <img src="/img/6.png" /> Rules
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/ledger">
                <img src="/img/7.png" />
                My Ledger
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/casino">
                <img src="/img/8.png" /> Games{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
