// import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import "./style.scss"

const MENU_ITEMS = [
  {
    to: "/main/matches",
    img: "/img/menu-img/inplay.png",
    label: "In Play",
  },
  {
    to: "/main/casino",
    img: "/img/menu-img/casino.png",
    label: "Casino",
  },
  {
    to: "/main/matka",
    img: "/img/menu-img/matka.png",
    label: "Matka",
  },
  {
    to: "/main/statement",
    img: "/img/menu-img/statement.png",
    label: "Statement",
  },
  {
    to: "/main/ledger",
    img: "/img/menu-img/ledger.png",
    label: "Ledger",
  },
  {
    to: "/main/profile",
    img: "/img/menu-img/profile.png",
    label: "Profile",
  },
  {
    to: "/main/rules",
    img: "/img/menu-img/rules.png",
    label: "Rules",
  },
  {
    to: "/main/changepassword",
    img: "/img/menu-img/password.png",
    label: "Password",
  },
];

const MenuCard = ({ to, img, label }: (typeof MENU_ITEMS)[number]) => (
  <div className="col-6">
    <Link to={to}>
      <div className="menu-img-wrap">
        <img src={img} alt={label} loading="lazy" />
      </div>
      <span>{label}</span>
    </Link>
  </div>
);

const Dashboard = () => {
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
              {MENU_ITEMS.map((item) => (
                <MenuCard key={item.to} {...item} />
              ))}
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
