// import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useGetMessageQuery } from "../../store/service/userServices/userServices";
import "./style.scss"

const Dashboard = () => {
  const { data } = useGetMessageQuery(undefined, {});

  // console.log(data, "datadatadata")
  return (
    <>
      <div className="">
        {/* <div className="">
          <Marquee
            style={{
              background: "black",
              color: "white",
              textTransform: "uppercase",
              padding: "0",
              fontSize: "14px",
              font: "inherit",
            }}>
            {data?.data}
          </Marquee>
        </div> */}
        <div className="main-menu-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Link to="/main/matches">
                  <div className="menu-img-wrap">
                    <img src="/img/menu-img/inplay.png" />
                  </div>
                  <span>In Play{" "}</span>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/main/casino">
                  <div className="menu-img-wrap">
                    <img src="/img/menu-img/casino.png" />
                  </div>
                  <span> Casino{" "}</span>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/main/matka">
                  <div className="menu-img-wrap">
                    <img src="/img/menu-img/matka.png" />
                  </div>
                  <span>Matka{" "}</span>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/main/statement">
                  <div className="menu-img-wrap">
                    <img src="/img/menu-img/statement.png" />
                  </div>
                  <span>Statement{" "}</span>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/main/ledger">
                  <div className="menu-img-wrap">
                    <img src="/img/menu-img/ledger.png" />
                  </div>
                  <span>Ledger{" "}</span>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/main/profile">
                  <div className="menu-img-wrap">
                    <img src="/img/menu-img/profile.png" />
                  </div>
                  <span>Profile{" "}</span>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/main/rules">
                  <div className="menu-img-wrap">
                    <img src="/img/menu-img/rules.png" />
                  </div>
                  <span> Rules{" "}</span>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/main/changepassword">
                  <div className="menu-img-wrap">
                    <img src="/img/menu-img/password.png" />
                  </div>
                  <span>Password{" "}</span>
                </Link>
              </div>
              {/* <div className="col-6">
              <Link to="/main/freegames">
<div className="menu-img-wrap">
                <img src="/img/menu-img/inplay.png" /> Free Games</div>
              </Link>
            </div>
           
           
            <div className="col-6">
              <Link to="/main/casino">
<div className="menu-img-wrap">
                <img src="/img/menu-img/inplay.png" /> Games{" "}</div>
              </Link>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
