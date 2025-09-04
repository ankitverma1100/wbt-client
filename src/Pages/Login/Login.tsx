import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { isAntPro } from "../CasinoDetails/Constant";

const Login = () => {
  const nav = useNavigate();
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
            <Form name="basic" className="gx-signin-form gx-form-row0">
              <Form.Item
                label=""
                name="username"
                rules={[
                  { required: true, message: "UserName can not be blank!" },
                ]}>
                <Input
                  type="text"
                  defaultValue="C67329"
                  placeholder="USERNAME"
                  className="gx-border-redius0"
                />
              </Form.Item>
              <Form.Item
                label=""
                name="username"
                rules={[
                  {
                    required: true,
                    message: "User Password can not be blank!",
                  },
                ]}>
                <Input
                  name="password"
                  type="Password"
                  defaultValue="C67329"
                  placeholder="Password"
                  className="gx-border-redius0"
                />
              </Form.Item>
              <Button
                onClick={() => nav("/main/dashboard")}
                // type="submit"
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
