import "./style.scss";
import { Link, useLocation } from "react-router-dom";

interface Props {
  onClose: () => void;
}

const Header = ({ onClose }: Props) => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentPath = pathSegments[pathSegments.length - 1];
  const userId = localStorage.getItem("userId");

  return (
    <div className="body-top-bar header_wrapper">
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col-md-6 col-6">
          <div className="d-flex">
            <a href="/main/dashboard">
              <img
                src="https://antspro3.com/assets/img/logo/TBT Pro Logo-Transparent (1).png"
                className="logo-img"
              />
              {/*<div class="logo-name"><span class="text-yellow">TBT</span> Pro</div>*/}
            </a>
            <Link to="/main/profile">
              <div className="profile-header-details">
                <div className="user-name">{userId}</div>
                <div className="chips_amount">
                  Chips : <span className="user_wallet">7000</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-6">
          <div className="row">
            <div className="col-md-3">
              <a href="/main/dashboard">
                <div className="page_title">{currentPath?.toUpperCase()}</div>
              </a>
            </div>
            <div className="col-md-7">
              <ul className="header-listing">
                <li>
                  <a href="/main/dashboard">
                    <img src="/main/dashboardAssets/img/home-icon.png" />{" "}
                    <span className="menu-name">HOME</span>
                  </a>
                </li>
                <li>
                  <a href="https://antspro3.com/Login/logout?type=Client">
                    <img src="/main/dashboardAssets/img/logout.png" />{" "}
                    <span className="menu-name">LOGOUT</span>
                  </a>
                </li>
              </ul>
              <a
                data-toggle="modal"
                data-target="#sidebar_modal"
                className="d-lg-none d-md-none d-sm-block d-xs-block float-right"
                onClick={onClose}>
                <svg
                  className="svg-inline--fa fa-bars fa-w-14 text-white"
                  aria-hidden="true"
                  data-prefix="fa"
                  data-icon="bars"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg="">
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  />
                </svg>
                {/* <i class="fa fa-bars text-white"></i> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
