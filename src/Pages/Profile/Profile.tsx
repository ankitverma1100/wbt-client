import { Col, Row, Select } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div
      className="gx-main-content-wrapper profile_sec"
      style={{ marginBottom: 120 }}>
      <Row justify="center">
        <Col className="gx-col-full " xs={24} sm={24} md={20} xl={14} xxl={14}>
          {" "}
          <div className="ant-table-wrapper gx-table-responsive">
            <div className="ant-spin-nested-loading">
              <div className="ant-spin-container">
                <div className="ant-table ant-table-small ant-table-bordered">
                  <div className="ant-table-container">
                    <div className="ant-table-content">
                      <table style={{ tableLayout: "auto" }}>
                        <colgroup />
                        <thead className="ant-table-thead">
                          <tr>
                            <th colSpan={3} className="ant-table-cell">
                              Rate Information
                            </th>
                          </tr>
                        </thead>
                        <tbody className="ant-table-tbody">
                          <tr
                            data-row-key={1}
                            className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell">Rate Difference</td>
                            <td
                              className="ant-table-cell"
                              style={{ textAlign: "center" }}>
                              <Select
                                showSearch
                                options={[
                                  { value: "1", label: "1" },
                                  { value: "2", label: "2" },
                                  { value: "3", label: "3" },
                                  { value: "4", label: "4" },
                                  { value: "5", label: "5" },
                                ]}
                                style={{
                                  width: 50,
                                  height: "24px",
                                  borderRadius: "2px",
                                }}
                              />
                            </td>
                            <td
                              className="ant-table-cell"
                              style={{ textAlign: "center" }}>
                              <div className="gx-text-white gx-w-100 gx-pointer gx-font-weight-semi-bold gx-bg-green-0 gx-py-2 gx-px-2">
                                UPDATE
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ant-table-wrapper gx-table-responsive">
            <div className="ant-spin-nested-loading">
              <div className="ant-spin-container">
                <div className="ant-table ant-table-small ant-table-bordered">
                  <div className="ant-table-container">
                    <div className="ant-table-content">
                      <table style={{ tableLayout: "auto" }}>
                        <colgroup />
                        <thead className="ant-table-thead">
                          <tr>
                            <th colSpan={2} className="ant-table-cell">
                              Personal Information
                            </th>
                          </tr>
                        </thead>
                        <tbody className="ant-table-tbody">
                          <tr
                            data-row-key={1}
                            className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell">Client Name:</td>
                            <td className="ant-table-cell">C67329</td>
                          </tr>
                          <tr
                            data-row-key={2}
                            className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell">Client Code:</td>
                            <td className="ant-table-cell">clientdemo</td>
                          </tr>
                          <tr
                            data-row-key={3}
                            className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell">Chip:</td>
                            <td className="ant-table-cell">0.00</td>
                          </tr>
                          <tr
                            data-row-key={4}
                            className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell">Content No.</td>
                            <td className="ant-table-cell">0</td>
                          </tr>
                          <tr
                            data-row-key={5}
                            className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell">Date Of Joining</td>
                            <td className="ant-table-cell">12-08-2023</td>
                          </tr>
                          <tr
                            data-row-key={6}
                            className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell">Address</td>
                            <td className="ant-table-cell">INDIA</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ant-table-wrapper gx-table-responsive">
            <div className="ant-spin-nested-loading">
              <div className="ant-spin-container">
                <div className="ant-table ant-table-small ant-table-bordered">
                  <div className="ant-table-container">
                    <div className="ant-table-content">
                      <table style={{ tableLayout: "auto" }}>
                        <colgroup />
                        <thead className="ant-table-thead">
                          <tr>
                            <th colSpan={2} className="ant-table-cell">
                              Company Information
                            </th>
                          </tr>
                        </thead>
                        <tbody className="ant-table-tbody">
                          <tr
                            data-row-key={1}
                            className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell">Help Line No:</td>
                            <td className="ant-table-cell">+91 1234567890</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="gx-py-4">
        <Row justify="center">
          <Col sm={18} xs={24} md={16} lg={10} xl={14} xxl={14}>
            <Link to="/dashboard">
              <div className="gx-bg-grey gx-py-2 gx-text-white gx-font-weight-semi gx-bg-flex gx-justify-content-center">
                BACK TO MAIN MENU
              </div>
            </Link>
          </Col>
        </Row>
      </div>
      <div className="notification-container notification-container-empty">
        <div />
      </div>
    </div>
  );
};

export default Profile;
