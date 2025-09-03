import { Link, useNavigate } from "react-router-dom";
import "./leftside.scss";
import { useLogOutMutation } from "../../store/service/userServices/userServices";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const AppSidebar = ({ visible, onClose }: Props) => {
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
    <div
      className={`modal sidebar_modal ${visible ? "show" : "hide"}`}
      style={{ display: visible ? "block" : "none" }}
      id="sidebar_modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header p-0">
            <h5 className="modal-title" id="exampleModalLabel" />
            <button
              type="button"
              className="close btn btn-danger text-white"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="side-menu-list">
              <ul data-menu="main" className="menu__level menu__level--current">
                <li className="menu__item borderBottom">
                  <Link
                    className="menu__link"
                    to="/main/dashboard"
                    onClick={onClose}>
                    <svg
                      className="svg-inline--fa fa-home fa-w-18"
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="home"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z"
                      />
                    </svg>{" "}
                    HOME{" "}
                    <svg
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      style={{ float: "right" }}
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="menu__item borderBottom">
                  <Link
                    className="menu__link"
                    to="/main/profile"
                    onClick={onClose}>
                    <svg
                      className="svg-inline--fa fa-user fa-w-14"
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                      />
                    </svg>{" "}
                    PROFILE{" "}
                    <svg
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      style={{ float: "right" }}
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="menu__item borderBottom">
                  <Link
                    className="menu__link"
                    to="/main/matches"
                    onClick={onClose}>
                    <svg
                      className="svg-inline--fa fa-play fa-w-14"
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                      />
                    </svg>{" "}
                    IN PLAY{" "}
                    <svg
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      style={{ float: "right" }}
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="menu__item borderBottom">
                  <Link
                    className="menu__link"
                    to="/main/rules"
                    onClick={onClose}>
                    <svg
                      className="svg-inline--fa fa-info fa-w-6"
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="info"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 192 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"
                      />
                    </svg>{" "}
                    RULES{" "}
                    <svg
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      style={{ float: "right" }}
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="menu__item borderBottom">
                  <Link
                    className="menu__link"
                    to="/main/ledger"
                    onClick={onClose}>
                    <svg
                      className="svg-inline--fa fa-sign-out fa-w-16"
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="sign-out"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <g>
                        <path
                          fill="currentColor"
                          d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                        />
                        <circle fill="currentColor" cx={256} cy={364} r={28}>
                          <animate
                            attributeType="XML"
                            repeatCount="indefinite"
                            dur="2s"
                            attributeName="r"
                            values="28;14;28;28;14;28;"
                          />
                          <animate
                            attributeType="XML"
                            repeatCount="indefinite"
                            dur="2s"
                            attributeName="opacity"
                            values="1;0;1;1;0;1;"
                          />
                        </circle>
                        <path
                          fill="currentColor"
                          opacity={1}
                          d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z">
                          <animate
                            attributeType="XML"
                            repeatCount="indefinite"
                            dur="2s"
                            attributeName="opacity"
                            values="1;0;0;0;0;1;"
                          />
                        </path>
                        <path
                          fill="currentColor"
                          opacity={0}
                          d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z">
                          <animate
                            attributeType="XML"
                            repeatCount="indefinite"
                            dur="2s"
                            attributeName="opacity"
                            values="0;0;1;1;0;0;"
                          />
                        </path>
                      </g>
                    </svg>{" "}
                    LEDGER{" "}
                    <svg
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      style={{ float: "right" }}
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="menu__item borderBottom">
                  <Link
                    className="menu__link"
                    to="/main/changepassword"
                    onClick={onClose}>
                    <svg
                      className="svg-inline--fa fa-key fa-w-16"
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="key"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
                      />
                    </svg>{" "}
                    PASSWORD{" "}
                    <svg
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      style={{ float: "right" }}
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      />
                    </svg>{" "}
                  </Link>
                </li>
                <li className="menu__item borderBottom">
                  <Link
                    className="menu__link"
                    to="/main/casino"
                    onClick={onClose}>
                    <svg
                      className="svg-inline--fa fa-play fa-w-14"
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                      />
                    </svg>{" "}
                    CASINO GAMES{" "}
                    <svg
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      style={{ float: "right" }}
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="menu__item borderBottom">
                  <Link className="menu__link" to="#" onClick={handleLogOut}>
                    <svg
                      className="svg-inline--fa fa-sign-out fa-w-16"
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="sign-out"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <g>
                        <path
                          fill="currentColor"
                          d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                        />
                        <circle fill="currentColor" cx={256} cy={364} r={28}>
                          <animate
                            attributeType="XML"
                            repeatCount="indefinite"
                            dur="2s"
                            attributeName="r"
                            values="28;14;28;28;14;28;"
                          />
                          <animate
                            attributeType="XML"
                            repeatCount="indefinite"
                            dur="2s"
                            attributeName="opacity"
                            values="1;0;1;1;0;1;"
                          />
                        </circle>
                        <path
                          fill="currentColor"
                          opacity={1}
                          d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z">
                          <animate
                            attributeType="XML"
                            repeatCount="indefinite"
                            dur="2s"
                            attributeName="opacity"
                            values="1;0;0;0;0;1;"
                          />
                        </path>
                        <path
                          fill="currentColor"
                          opacity={0}
                          d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z">
                          <animate
                            attributeType="XML"
                            repeatCount="indefinite"
                            dur="2s"
                            attributeName="opacity"
                            values="0;0;1;1;0;0;"
                          />
                        </path>
                      </g>
                    </svg>
                    {"  "}
                    LOGOUT{" "}
                    <svg
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      style={{ float: "right" }}
                      aria-hidden="true"
                      data-prefix="fa"
                      data-icon="arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
