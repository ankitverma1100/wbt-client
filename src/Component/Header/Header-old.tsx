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

  const hostname = window.location.hostname;

  return (
    <div className="body-top-bar header_wrapper">
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col-md-6 col-8">
          <div className="d-flex">
            <Link to="/main/dashboard">
              <img
                src={
                  isAntPro
                    ? "/img/wbt-logo.png"
                    : hostname.includes("mumbaiexchange9")
                    ? "/img/mum-img.png"
                    : "/img/logo12.png"
                }
                className="logo-img"
              />
            </Link>
            <Link to="/main/profile">
              <div className="profile-header-details">
                <div className="user-name">
                  {userId} ({username})
                </div>
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
            {/* <div className="col-md-3">
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
            </div> */}
            <div className="col-md-7">
              {/* <ul className="header-listing">
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
              </ul> */}
              <a
                data-toggle="modal"
                data-target="#sidebar_modal"
                className="humburger-icon"
                onClick={onClose}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
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
