import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useLoginMutation } from "../../store/service/authService";
import { isAntPro } from "../CasinoDetails/Constant";
import { toast } from "react-toastify";
import { FaLock, FaUser } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { CiLock } from "react-icons/ci";

const Login_New = () => {
  const nav = useNavigate();

  const [trigger, { data: loginData }] = useLoginMutation();

  // State for form values
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formData?.username) {
      toast.error("Username is requird!");
      return;
    }
    if (!formData?.password) {
      toast.error("Password is requird!");
      return;
    }
    trigger({
      password: formData.password,
      userId: formData.username,
      url: window.location.hostname,
      // url: "nsgpro99.com",
      // url: "antpro.co",
    });
  };

  useEffect(() => {
    if (loginData) {
      if (loginData.token) {
        localStorage.setItem("isLogin", "1");
        localStorage.setItem("client-token", loginData.token);
        localStorage.setItem("userId", loginData.userId);
        localStorage.setItem("username", loginData.username);
        nav("/main/rules");
      } else {
        const errorMessage =
          loginData.message || "Login failed. Please try again.";
        if (isAntPro) {
          document.getElementById("captcha_err_msg")!.innerText = errorMessage;
        } else {
          toast.error(errorMessage);
        }
      }
    }
  }, [loginData]);

  const hostname = window.location.hostname;

  return (
    <>
      <div className="limiter login_page">
        {isAntPro ? (
          <div className="container-login10 bg-area">
            <div className="row w-100 align-items-center">
              <div className="col-lg-6">
                <div className="imgdiv text-center">
                  <img
                    src={isAntPro ? "/img/logo.png" : "/img/logo12.png"}
                    alt="logo"
                    className="login-logo-img"
                    style={{
                      height: isAntPro ? "" : "60px",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="wrap-login100" style={{ margin: "0 auto" }}>
                  <form
                    id="login_form"
                    className="login100-form validate-form p-b-33"
                    style={{
                      background: "transparent!important",
                      padding: "10px 20px",
                    }}>
                    <h5 className="text-center text-white mb-4 font-weight-bold">
                      Please Login to Continue
                    </h5>

                    <div
                      className="validate-input"
                      data-validate="Enter username">
                      <input
                        className="input100"
                        type="text"
                        name="username"
                        placeholder="Username"
                        autoComplete="off"
                        value={formData.username}
                        onChange={handleChange}
                      />
                      <span className="focus-input100" data-placeholder="" />
                    </div>

                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Enter password"
                      style={{ display: "inline-flex" }}>
                      <input
                        className="input100"
                        id="pass_log_id"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <span className="focus-input100" data-placeholder="" />
                    </div>

                    <div className="container-login100-form-btn">
                      <button
                        onClick={handleLogin}
                        className="login100-fom-btn loginbtn"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 2,
                        }}>
                        Login
                        <img src="/img/login-ar.png" height={12} />
                      </button>
                    </div>
                    {loginData?.message && (
                      <i style={{ color: "red" }} id="captcha_err_msg">
                        <div className="alert alert-warning alert-dismissible">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="alert">
                            ×
                          </button>
                        </div>
                      </i>
                    )}
                  </form>

                  <h6 className="footer-text text-center mt-2">
                    <a href="#">
                      Privacy Policy <span className="text-white">|</span>
                    </a>{" "}
                    <a href="#">
                      Terms &amp; Condition{" "}
                      <span className="text-white">|</span>
                    </a>
                    <br />
                    <a href="#">Rules &amp; Regulation</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="login-container-main">
            <div className="logo">
              <img
                // src={"/img/logo12.png"}
                src={
                  hostname.includes("mumbaiexchange9")
                    ? "/img/mum-img.png"
                    : "/img/logo12.png"
                }
                alt="logo"
                className="login-logo-img"
                height={50}
                style={{
                  height: isAntPro ? "" : "60px",
                }}
              />
            </div>

            <div className="login-box">
              <div className="input-group">
                <AiOutlineUser className="input-icon" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-group">
                <CiLock className="input-icon" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                />
              </div>
              <button onClick={handleLogin} className="login-btn">
                Login Now
              </button>
              <div className="footer-note">
                ©️ 2025 nsgpro99 | Not for restricted territories
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login_New;
