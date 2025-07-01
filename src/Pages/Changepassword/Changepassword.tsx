/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row, Form, Input, Button } from "antd";
import "./changepassword.scss";


const Changepassword = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form Submitted:", values);
    // Add password update logic here
  };

  return (
    <div className="gx-main-content-wrapper" style={{ marginBottom: 120 }}>
      <Row justify="center">
        <Col xs={20} sm={14} md={11} lg={7} xl={5} xxl={5}>
          <div className="gx-rounded-sm gx-bg-grey-revers">
            <div
              className="gx-bg-grey-revers gx-py-3 gx-rounded-lg gx-bg-flex gx-justify-content-center gx-align-content-center gx-text-white"
              style={{ height: 70 }}>
              <div className="gx-h-100 gx-bg-flex gx-justify-content-center gx-align-content-center gx-fs-xl gx-pt-2 fw-ch">
                Change Password
              </div>
            </div>
            <div className="gx-px-4 gx-bg-grey-revers">
              <Form
                form={form}
                layout="vertical"
                className="gx-py-3"
                onFinish={handleSubmit}>
                <Form.Item
                  name="oldPassword"
                  rules={[
                    { required: true, message: "Please enter old password" },
                  ]}>
                  <Input.Password
                    placeholder="Enter Old Password"
                    className="gx-border-redius btn-height"
                    iconRender={() => null}
                  />
                </Form.Item>

                <Form.Item
                  name="newPassword"
                  rules={[
                    { required: true, message: "Please enter new password" },
                  ]}>
                  <Input.Password
                    placeholder="Enter New Password"
                    className="gx-border-redius btn-height"
                    iconRender={() => null}
                  />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  dependencies={["newPassword"]}
                  rules={[
                    { required: true, message: "Please confirm your password" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newPassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The two passwords do not match!")
                        );
                      },
                    }),
                  ]}>
                  <Input.Password
                    placeholder="Enter Confirm Password"
                    className="gx-border-redius btn-height"
                    iconRender={() => null}
                  />
                </Form.Item>

                <Form.Item>
                  <div className="gx-bg-flex gx-justify-content-center">
                    <Button
                      type="primary"
                      htmlType="submit"
                      danger
                      className="gx-rounded-xxl danger-btn gx-my-2 gx-text-white">
                      Done
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Changepassword;
