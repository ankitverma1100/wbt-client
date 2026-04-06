import { useLogOutMutation } from "../../store/service/userServices/userServices";
import logoRolex from "../../assets/logo-rolex.png";
import Balance from "../../Common/Balance";

import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface Props {
    onClose: () => void;
    userBalance?: {
        balance?: number;
        liability?: number;
    };
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
        <div className=" header_wrapper">
            <div className="main-nav">
                <div className="row align-items-center py-2">
                    <div className="col-4">
                        <div className="d-flex">
                            <Link to="/main/dashboard">
                                <img
                                    src={logoRolex}
                                    className="logo-img"
                                />
                            </Link>

                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <Link to="/main/profile">
                            <div className="profile-header-details">
                                <div className="user-name">
                                    {userId} ({username})
                                </div>
                                {/* <div className="chips_amount">
                                Chips :{" "}
                                <span className="user_wallet">{userBalance?.toFixed(2)}</span>
                            </div> */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <a
                            data-toggle="modal"
                            data-target="#sidebar_modal"
                            className="humburger-icon"
                            onClick={onClose}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <Balance userBalance={userBalance} />


        </div>
    );
};

export default Header;
