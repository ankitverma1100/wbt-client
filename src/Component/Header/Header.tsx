import { MenuOutlined } from "@ant-design/icons";

interface Props {
  onClose: () => void;
}

const Header = ({ onClose }: Props) => {
  return (
    <header className="ant-layout-header gx-bg-flex gx-w-100 gx-justify-content-between  gx-align-content-center ">
      <div>
        <a className=" gx-pointer" href="/main/dashboard">
          <img alt="" src="/img/logo.png" width={130} height={40} />
        </a>
      </div>
      <div className="gx-text-white">
        <span>C67329 (clientdemo)</span>
        <br />
      </div>
      <div>
        <ul
          className="gx-header-notifications gx-ml-auto gx-text-white hide-mob"
          style={{ height: 53 }}>
          <a className="gx-text-white gx-fs-xl" href="/main/dashboard">
            <li className="gx-notify gx-px-5 gx-font-weight-semi-bold">
              <span
                role="img"
                aria-label="home"
                className="anticon anticon-home">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="home"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true">
                  <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                </svg>
              </span>
              &nbsp;&nbsp; HOME
            </li>
          </a>
          <li className="gx-msg gx-px-5 gx-font-weight-semi-bold gx-pointer">
            <span
              role="img"
              aria-label="logout"
              className="anticon anticon-logout">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="logout"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true">
                <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" />
              </svg>
            </span>
            &nbsp;&nbsp; LOGOUT
          </li>
          <li className="gx-language" />
        </ul>

        <ul
          className="gx-header-notifications gx-ml-auto gx-text-white hide-desk"
          style={{ height: 53 }}>
          <li className="gx-language" />
          <div className="gx-lineba" onClick={onClose}>
            {/* <i className="gx-icon-btn icon icon-menu" /> */}
            <MenuOutlined />
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
