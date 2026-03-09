import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { isAntPro } from "../CasinoDetails/Constant";
import { useLoginMutation } from "../../store/service/authService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const nav = useNavigate();
  const [trigger, { data: loginData, isLoading }] = useLoginMutation();
  const [loginError, setLoginError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && loginData) {
      if (loginData?.status === false) {
        const message = loginData.message || "Invalid UserId or Password";
        setLoginError(message);
        console.error("Login failed:", message);
        return;
      }

      const resolvedData = loginData?.data ?? loginData;
      const token = resolvedData?.token;
      const userId = resolvedData?.userId;
      const username = resolvedData?.username;

      if (token) {
        localStorage.setItem("isLogin", "1");
        localStorage.setItem("client-token", token);
        if (userId) localStorage.setItem("userId", userId);
        if (username) localStorage.setItem("username", username);
        setLoginError(null);
        nav("/main/rules");
      } else if (loginData?.message) {
        setLoginError(loginData.message);
        console.error("Login failed:", loginData.message);
      }
    }
  }, [loginData, isLoading, nav]);

  useEffect(() => {
    if (loginError) {
      toast.error(loginError);
    }
  }, [loginError]);

  return (
    <div
      className="gx-bg-flex gx-box-shadow gx-bg-grey  gx-justify-content-center gx-align-items-center"
      style={{ width: "100vw", height: "100vh" }}>
      <div className="gx-bg-grey-revers" style={{ maxWidth: 600 }}>
        <div className="  gx-bg-flex gx-flex-column ">
          <div className=" gx-w-100">
            <div className="gx-px-5">
              <img
                src={
                  isAntPro
                    ? "https://antpro99.pro/assets/images/logo.png"
                    : "/img/logo-nsg.png"
                }
                alt="Neature"
                width={400}
                height={200}
              />
            </div>
          </div>
          <div className="gx-app-login-content gx-w-100">
            <Form
              name="basic"
              className="gx-signin-form gx-form-row0"
              initialValues={{ username: "C67329", password: "C67329" }}
              onFinish={(values) => {
                setLoginError(null);
                trigger({
                  userId: values.username,
                  password: values.password,
                  url: "wbt24.com",
                });
              }}
            >
              <Form.Item
                label=""
                name="username"
                rules={[
                  { required: true, message: "UserName can not be blank!" },
                ]}>
                <Input
                  type="text"
                  placeholder="USERNAME"
                  className="gx-border-redius0"
                />
              </Form.Item>
              <Form.Item
                label=""
                name="password"
                rules={[
                  {
                    required: true,
                    message: "User Password can not be blank!",
                  },
                ]}>
                <Input
                  name="password"
                  type="Password"
                  placeholder="Password"
                  className="gx-border-redius0"
                />
              </Form.Item>
              <Button
                htmlType="submit"
                loading={isLoading}
                className=" gx-mb-0 gx-w-100 gx-border-redius0 gx-font-weight-semi-bold gx-fs-lg gx-text-white"
                style={{
                  backgroundColor: "rgb(42, 40, 39)",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}>
                <span> </span>
                <span className="gx-pr-2">Login</span>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
