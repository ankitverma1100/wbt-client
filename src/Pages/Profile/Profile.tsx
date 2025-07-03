import { Col, Row, Select } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useUpdateRateMutation,
  useUserProfileMutation,
} from "../../store/service/userServices/userServices";
import Loder from "../../Common/Loder";

const Profile = () => {
  const [rateValue, setRateValue] = useState(0);
  const [trigger, { data: userData }] = useUserProfileMutation();
  const [updateRate, { data: updateRateInfo, isLoading }] =
    useUpdateRateMutation();

  useEffect(() => {
    if (userData && userData?.data?.rateDifference) {
      setRateValue(userData?.data?.rateDifference);
    }
  }, [userData]);

  useEffect(() => {
    trigger();
  }, []);

  const handleRateChange = (e: string) => {
    setRateValue(parseInt(e));
  };

  const handleUpadetRate = () => {
    updateRate({ rateDifference: rateValue });
  };

  useEffect(() => {
    if (updateRateInfo) {
      if (updateRateInfo?.status) {
        trigger();
      } else {
      }
    }
  }, [updateRateInfo]);
  return (
    // <div
    //   className="gx-main-content-wrapper profile_sec"
    //   style={{ marginBottom: 120 }}>
    //   {isLoading && <Loder />}
    //   <Row justify="center">
    //     <Col className="gx-col-full " xs={24} sm={24} md={20} xl={14} xxl={14}>
    //       {" "}
    //       <div className="ant-table-wrapper gx-table-responsive">
    //         <div className="ant-spin-nested-loading">
    //           <div className="ant-spin-container">
    //             <div className="ant-table ant-table-small ant-table-bordered">
    //               <div className="ant-table-container">
    //                 <div className="ant-table-content">
    //                   <table style={{ tableLayout: "auto" }}>
    //                     <colgroup />
    //                     <thead className="ant-table-thead">
    //                       <tr>
    //                         <th colSpan={3} className="ant-table-cell">
    //                           Rate Information
    //                         </th>
    //                       </tr>
    //                     </thead>
    //                     <tbody className="ant-table-tbody">
    //                       <tr
    //                         data-row-key={1}
    //                         className="ant-table-row ant-table-row-level-0">
    //                         <td className="ant-table-cell">Rate Difference</td>
    //                         <td
    //                           className="ant-table-cell"
    //                           style={{ textAlign: "center" }}>
    //                           <Select
    //                             value={rateValue.toString()}
    //                             showSearch
    //                             onChange={handleRateChange}
    //                             options={[
    //                               { value: "1", label: "1" },
    //                               { value: "2", label: "2" },
    //                               { value: "3", label: "3" },
    //                               { value: "4", label: "4" },
    //                               { value: "5", label: "5" },
    //                             ]}
    //                             style={{
    //                               width: 50,
    //                               height: "24px",
    //                               borderRadius: "2px",
    //                             }}
    //                           />
    //                         </td>
    //                         <td
    //                           className="ant-table-cell"
    //                           style={{ textAlign: "center" }}
    //                           onClick={handleUpadetRate}>
    //                           <div className="gx-text-white gx-w-100 gx-pointer gx-font-weight-semi-bold gx-bg-green-0 gx-py-2 gx-px-2">
    //                             UPDATE
    //                           </div>
    //                         </td>
    //                       </tr>
    //                     </tbody>
    //                   </table>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="ant-table-wrapper gx-table-responsive">
    //         <div className="ant-spin-nested-loading">
    //           <div className="ant-spin-container">
    //             <div className="ant-table ant-table-small ant-table-bordered">
    //               <div className="ant-table-container">
    //                 <div className="ant-table-content">
    //                   <table style={{ tableLayout: "auto" }}>
    //                     <colgroup />
    //                     <thead className="ant-table-thead">
    //                       <tr>
    //                         <th colSpan={2} className="ant-table-cell">
    //                           Personal Information
    //                         </th>
    //                       </tr>
    //                     </thead>
    //                     <tbody className="ant-table-tbody">
    //                       <tr
    //                         data-row-key={1}
    //                         className="ant-table-row ant-table-row-level-0">
    //                         <td className="ant-table-cell">Client Name:</td>
    //                         <td className="ant-table-cell">
    //                           {userData?.data?.userId}
    //                         </td>
    //                       </tr>
    //                       <tr
    //                         data-row-key={2}
    //                         className="ant-table-row ant-table-row-level-0">
    //                         <td className="ant-table-cell">Client Code:</td>
    //                         <td className="ant-table-cell">
    //                           {userData?.data?.username}
    //                         </td>
    //                       </tr>
    //                       <tr
    //                         data-row-key={3}
    //                         className="ant-table-row ant-table-row-level-0">
    //                         <td className="ant-table-cell">Chip:</td>
    //                         <td className="ant-table-cell">0.00</td>
    //                       </tr>
    //                       <tr
    //                         data-row-key={4}
    //                         className="ant-table-row ant-table-row-level-0">
    //                         <td className="ant-table-cell">Content No.</td>
    //                         <td className="ant-table-cell">
    //                           {userData?.data?.contact || 0}
    //                         </td>
    //                       </tr>
    //                       <tr
    //                         data-row-key={5}
    //                         className="ant-table-row ant-table-row-level-0">
    //                         <td className="ant-table-cell">Date Of Joining</td>
    //                         <td className="ant-table-cell">
    //                           {userData?.data?.dateOfJoining}
    //                         </td>
    //                       </tr>
    //                       <tr
    //                         data-row-key={6}
    //                         className="ant-table-row ant-table-row-level-0">
    //                         <td className="ant-table-cell">Address</td>
    //                         <td className="ant-table-cell">
    //                           {userData?.data?.address}
    //                         </td>
    //                       </tr>
    //                     </tbody>
    //                   </table>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="ant-table-wrapper gx-table-responsive">
    //         <div className="ant-spin-nested-loading">
    //           <div className="ant-spin-container">
    //             <div className="ant-table ant-table-small ant-table-bordered">
    //               <div className="ant-table-container">
    //                 <div className="ant-table-content">
    //                   <table style={{ tableLayout: "auto" }}>
    //                     <colgroup />
    //                     <thead className="ant-table-thead">
    //                       <tr>
    //                         <th colSpan={2} className="ant-table-cell">
    //                           Company Information
    //                         </th>
    //                       </tr>
    //                     </thead>
    //                     <tbody className="ant-table-tbody">
    //                       <tr
    //                         data-row-key={1}
    //                         className="ant-table-row ant-table-row-level-0">
    //                         <td className="ant-table-cell">Help Line No:</td>
    //                         <td className="ant-table-cell">
    //                           {userData?.data?.helpline || 0}
    //                         </td>
    //                       </tr>
    //                     </tbody>
    //                   </table>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    //   <div className="gx-py-4">
    //     <Row justify="center">
    //       <Col sm={18} xs={24} md={16} lg={10} xl={14} xxl={14}>
    //         <Link to="/dashboard">
    //           <div className="gx-bg-grey gx-py-2 gx-text-white gx-font-weight-semi gx-bg-flex gx-justify-content-center">
    //             BACK TO MAIN MENU
    //           </div>
    //         </Link>
    //       </Col>
    //     </Row>
    //   </div>
    //   <div className="notification-container notification-container-empty">
    //     <div />
    //   </div>
    // </div>

    <div className="profile-data-table profile_dddd container">
      <table
        className=""
        width="100%"
        border={0}
        cellSpacing={0}
        cellPadding={0}>
        <tbody>
          <tr>
            <td valign="top" className="tbl-inr">
              <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td align="left" valign="top">
                      <table
                        width="100%"
                        border={0}
                        cellSpacing={0}
                        cellPadding={0}>
                        <tbody>
                          <tr>
                            <td
                              height={25}
                              align="center"
                              className="TeamCombo"
                              style={{
                                paddingLeft: 5,
                                border: "none ",
                                backgroundColor: "#7d5c0e",
                              }}>
                              <p
                                style={{
                                  color: "#fff",
                                  fontFamily: "Roboto",
                                  fontSize: 13,
                                  fontWeight: "bold",
                                }}>
                                RATE INFORMATION{" "}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" valign="top">
                      <table
                        width="100%"
                        border={0}
                        cellPadding={2}
                        cellSpacing={2}>
                        <tbody>
                          <tr>
                            <td
                              height={25}
                              width="50%"
                              align="left"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              Rate Difference :
                            </td>
                            <td
                              align="center"
                              width="20%"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "center",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              <select
                                value={rateValue.toString()}
                                onChange={(e) =>
                                  handleRateChange(e.target.value)
                                }>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </td>
                            <td
                              width="30%"
                              style={{
                                padding: "5px 10px",
                                borderLeft: "1px solid #3d8282 ",
                                backgroundColor: "#FFFFFF",
                              }}>
                              <button
                                onClick={handleUpadetRate}
                                className="btnprofile"
                                type="button">
                                Update
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      valign="bottom"
                      style={{ backgroundColor: "#FFFFFF" }}
                    />
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td valign="top" className="tbl-inr">
              <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td align="left" valign="top">
                      <table
                        width="100%"
                        border={0}
                        cellSpacing={0}
                        cellPadding={0}>
                        <tbody>
                          <tr>
                            <td
                              height={25}
                              align="center"
                              className="TeamCombo"
                              style={{ border: "none " }}>
                              <p
                                style={{
                                  color: "#fff",
                                  fontFamily: "Roboto",
                                  fontSize: 13,
                                  fontWeight: "bold",
                                  backgroundColor: "#7d5c0e",
                                }}>
                                PERSONAL INFORMATION{" "}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" valign="top">
                      <table
                        width="100%"
                        border={0}
                        cellPadding={2}
                        cellSpacing={2}>
                        <tbody>
                          <tr>
                            <td
                              height={25}
                              width="60%"
                              align="left"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              Client Code :
                            </td>
                            <td
                              align="center"
                              width="40%"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              {userData?.data?.userId}
                            </td>
                          </tr>
                          <tr>
                            <td
                              height={25}
                              align="left"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              Client Name :
                            </td>
                            <td
                              align="center"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              {userData?.data?.username}
                            </td>
                          </tr>
                          <tr>
                            <td
                              height={25}
                              align="left"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              Chips :
                            </td>
                            <td
                              align="center"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              7000
                            </td>
                          </tr>
                          <tr>
                            <td
                              height={25}
                              align="left"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              Contact No :
                            </td>
                            <td
                              align="center"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              {userData?.data?.contact || 0}
                            </td>
                          </tr>
                          <tr>
                            <td
                              height={25}
                              align="left"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              Date Of Joining :
                            </td>
                            <td
                              align="center"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              {userData?.data?.dateOfJoining}
                            </td>
                          </tr>
                          <tr>
                            <td
                              height={25}
                              align="left"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              Address :
                            </td>
                            <td
                              align="center"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              {userData?.data?.address}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      valign="bottom"
                      style={{ backgroundColor: "#FFFFFF" }}
                    />
                  </tr>
                  <tr>
                    <td valign="top"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td valign="top" className="tbl-inr">
              <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td align="left" valign="top">
                      <table
                        width="100%"
                        border={0}
                        cellSpacing={0}
                        cellPadding={0}>
                        <tbody>
                          <tr>
                            <td
                              height={25}
                              align="center"
                              className="TeamCombo"
                              style={{ border: "none " }}>
                              <p
                                style={{
                                  color: "#fff",
                                  fontFamily: "Roboto",
                                  fontSize: 13,
                                  fontWeight: "bold",
                                  backgroundColor: "#7d5c0e",
                                }}>
                                COMPANY INFORMATION{" "}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" valign="top">
                      <table
                        width="100%"
                        border={0}
                        cellPadding={2}
                        cellSpacing={2}>
                        <tbody>
                          <tr>
                            <td
                              height={25}
                              width="50%"
                              align="left"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                              HELP LINE NO :
                            </td>
                            <td
                              align="center"
                              width="50%"
                              className="FontTextBlue"
                              style={{
                                verticalAlign: "middle",
                                textAlign: "left",
                                padding: 6,
                                backgroundColor: "#FFFFFF",
                              }}>
                               {userData?.data?.helpline || 0}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      valign="bottom"
                      style={{ backgroundColor: "#FFFFFF" }}
                    />
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="menu mt-4 w-100" id="menu">
        <ul className="nav" style={{ display: "block" }}>
          <li className="back-main-menu">
            <a href="https://antspro3.com/client/menu">BACK TO MAIN MENU</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
