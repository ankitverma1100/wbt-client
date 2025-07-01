import { Drawer } from "antd";
import "./leftside.scss";
import { Link } from "react-router-dom";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const AppSidebar = ({ visible, onClose }: Props) => {
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      open={visible}
      width={378}
      mask={true}
      className="gx-drawer-sidebar gx-drawer-sidebar-dark">
      <div className="gx-layout-sider-header">
        <div
          className=" gx-w-100 gx-bg-flex gx-justify-content-end"
          onClick={onClose}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="gx-text-white"
            height={30}
            width={30}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M9 12h12l-3 -3" />
            <path d="M18 15l3 -3" />
          </svg>
        </div>
      </div>
      <div className="gx-sidebar-content">
        <ul
          className="ant-menu ant-menu-root ant-menu-inline ant-menu-dark"
          dir="ltr"
          role="menu"
          tabIndex={0}
          data-menu-list="true">
          <li
            className="ant-menu-item ant-menu-item-selected ant-menu-item-only-child gx-border-bottom-2"
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/dashboard">
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <Link onClick={onClose}
                  className="gx-bg-flex gx-text-white gx-justify-content-start gx-align-items-center "
                  to="/main/dashboard"
                  style={{ gap: 10 }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 576 512"
                    height={25}
                    width={25}
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                  </svg>
                  <span className="gx-fs-lg gx-font-weight-semi-bold">
                    Home
                  </span>
                </Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child gx-border-bottom-2 "
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/inplay"
            style={{ paddingLeft: 24 }}>
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <Link onClick={onClose}
                  className="gx-bg-flex gx-justify-content-start gx-align-items-center gx-text-white "
                  to="/main/matches"
                  style={{ gap: 10 }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                  </svg>
                  <span className="gx-fs-lg gx-font-weight-semi-bold">
                    Inplay
                  </span>
                </Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child gx-border-bottom-2"
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/casino"
            style={{ paddingLeft: 24 }}>
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <Link onClick={onClose}
                  className="gx-bg-flex gx-text-white gx-justify-content-start gx-align-items-center "
                  to="/main/casino"
                  style={{ gap: 10 }}>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304z" />
                    <path d="M15 4h1a1 1 0 0 1 1 1v3.5" />
                    <path d="M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374" />
                  </svg>
                  <span className="gx-fs-lg gx-font-weight-semi-bold">
                    CASINO
                  </span>
                </Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child gx-border-bottom-2"
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/freegame"
            style={{ paddingLeft: 24 }}>
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <Link onClick={onClose}
                  className="gx-bg-flex gx-text-white gx-justify-content-start gx-align-items-center "
                  to="/main/freegame"
                  style={{ gap: 10 }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 576 512"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z" />
                  </svg>
                  <span className="gx-fs-lg  gx-font-weight-semi-bold">
                    {" "}
                    FREE GAMES
                  </span>
                </Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child gx-border-bottom-2"
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/ledger"
            style={{ paddingLeft: 24 }}>
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <Link onClick={onClose}
                  className="gx-bg-flex gx-text-white gx-justify-content-start gx-align-items-center "
                  to="/main/ledger"
                  style={{ gap: 10 }}>
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={18}
                    width={18}
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                  </svg>
                  <span className="gx-fs-lg gx-font-weight-semi-bold">
                    {" "}
                    LEDGER
                  </span>
                </Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child gx-border-bottom-2"
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/statement"
            style={{ paddingLeft: 24 }}>
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <Link onClick={onClose}
                  className="gx-bg-flex gx-text-white gx-justify-content-start gx-align-items-center "
                  to="/main/statement"
                  style={{ gap: 10 }}>
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height={17}
                    width={17}
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93 71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.89 15.89 0 0 0-5.46-12A143 143 0 0 0 202.24 74zm279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 0 0-32.31 20.78 15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61z" />
                  </svg>
                  <span className="gx-fs-lg gx-font-weight-semi-bold">
                    {" "}
                    ACCOUNT STATEMENT
                  </span>
                </Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child gx-border-bottom-2"
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/exposure"
            style={{ paddingLeft: 24 }}>
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <Link onClick={onClose}
                  className="gx-bg-flex gx-text-white gx-justify-content-start gx-align-items-center "
                  to="/main/pending-bets"
                  style={{ gap: 10 }}>
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 576 512"
                    height={15}
                    width={15}
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM128 416H64V352c35.3 0 64 28.7 64 64zM64 224V160h64c0 35.3-28.7 64-64 64zM448 352c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM384 256c0 61.9-43 112-96 112s-96-50.1-96-112s43-112 96-112s96 50.1 96 112zM252 208c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z" />
                  </svg>
                  <span className="gx-fs-lg gx-font-weight-semi-bold">
                    {" "}
                    EXPOSURE
                  </span>
                </Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child gx-border-bottom-2"
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/profile"
            style={{ paddingLeft: 24 }}>
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <Link onClick={onClose}
                  className="gx-bg-flex gx-text-white gx-justify-content-start gx-align-items-center "
                  to="/main/profile"
                  style={{ gap: 10 }}>
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="gx-fs-lg gx-font-weight-semi-bold">
                    {" "}
                    PROFILE
                  </span>
                </Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child gx-border-bottom-2"
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/rules"
            style={{ paddingLeft: 24 }}>
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <Link onClick={onClose}
                  className="gx-bg-flex gx-text-white gx-justify-content-start gx-align-items-center "
                  to="/main/rules"
                  style={{ gap: 10 }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 192 512"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" />
                  </svg>
                  <span className="gx-fs-lg gx-font-weight-semi-bold">
                    {" "}
                    RULES
                  </span>
                </Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child gx-border-bottom-2"
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/password"
            style={{ paddingLeft: 24 }}>
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <Link onClick={onClose}
                  className="gx-bg-flex gx-text-white gx-justify-content-start gx-align-items-center "
                  to="/main/changepassword"
                  style={{ gap: 10 }}>
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height={18}
                    width={18}
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="none"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 1 1-32-32 32 32 0 0 1 32 32z"
                    />
                  </svg>
                  <span className="gx-fs-lg gx-font-weight-semi-bold">
                    {" "}
                    PASSWORD
                  </span>
                </Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child gx-border-bottom-2"
            role="menuitem"
            tabIndex={-1}
            data-menu-id="rc-menu-uuid-19430-1-main/logout"
            style={{ paddingLeft: 24 }}>
            <span className="ant-menu-title-content">
              <div className="gx-bg-flex gx-justify-content-between gx-align-items-center ">
                <div
                  className="gx-bg-flex gx-justify-content-start gx-align-items-center "
                  style={{ gap: 10 }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16zm299.31-11.31-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62z" />
                  </svg>{" "}
                  <span className="gx-fs-lg gx-font-weight-semi-bold">
                    LOGOUT{" "}
                  </span>
                </div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </span>
          </li>
        </ul>
        <div aria-hidden="true" style={{ display: "none" }} />
      </div>
    </Drawer>
  );
};

export default AppSidebar;
