import { isAntPro } from "../../Pages/CasinoDetails/Constant";
import { useLogOutMutation } from "../../store/service/userServices/userServices";
import "./style.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface Props {
  onClose: () => void;
  userBalance: number | undefined;
}

const Header = ({ onClose, userBalance }: Props) => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentPath = pathSegments[pathSegments.length - 1];
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");

  const nav = useNavigate();
  const [trigger] = useLogOutMutation();

  const handleLogOut = async () => {
    const res: any = await trigger().unwrap();
    if (res) {
      localStorage.clear();
      nav("/login");
      onClose();
    }
  };

  return (
    <div className="body-top-bar header_wrapper">
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col-md-6 col-8">
          <div className="d-flex">
            <Link to="/main/dashboard">
              <img
                 src={isAntPro ? "/img/logo.png" : "/img/logo12.png"}
                className="logo-img"
              />
            </Link>
            <Link to="/main/profile">
              <div className="profile-header-details">
                <div className="user-name">{userId} ({username})</div>
                <div className="chips_amount">
                  Chips :{" "}
                  <span className="user_wallet">{userBalance?.toFixed(2)}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-4">
          <div className="row">
            <div className="col-md-3">
              {currentPath !== "dashboard" && (
                <Link to="/main/dashboard">
                  <div className="page_title">
                    {pathSegments?.[1]?.includes("match-deatils")
                      ? "MATCHES"
                      : currentPath?.includes("changepassword")
                      ? "PASSWORD"
                      : currentPath?.includes("freegames")
                      ? "Free Games"
                      : currentPath?.includes("casino")
                      ? "GAMES"
                      : pathSegments?.[1]?.includes("casino")
                      ? "GAMES"
                      : pathSegments?.[1]?.includes("ledgerDetails")
                      ? "LEDGER"
                      : currentPath?.toUpperCase()}
                  </div>
                </Link>
              )}
            </div>
            <div className="col-md-7">
              <ul className="header-listing">
                <li>
                  <Link to="/main/dashboard">
                    <img src="/img/home-icon.png" />{" "}
                    <span className="menu-name">HOME</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={handleLogOut}>
                    <img src="/img/logout.png" />{" "}
                    <span className="menu-name">LOGOUT</span>
                  </Link>
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
