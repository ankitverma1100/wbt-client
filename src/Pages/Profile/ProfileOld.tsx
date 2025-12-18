import "./style.scss";
import { useEffect, useState } from "react";
import {
  useGetUserBalanceQuery,
  useUpdateRateMutation,
  useUserProfileMutation,
} from "../../store/service/userServices/userServices";
import { Link } from "react-router-dom";
import moment from "moment";

const Profile = () => {
  const [rateValue, setRateValue] = useState(0);
  const [trigger, { data: userData }] = useUserProfileMutation();
  const [updateRate, { data: updateRateInfo }] = useUpdateRateMutation();

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

  const { data: userBalance } = useGetUserBalanceQuery(undefined, {
    pollingInterval: 5000,
    refetchOnMountOrArgChange: true,
  });
  return (
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
                                backgroundColor: "var(--bg-color)",
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
                                  backgroundColor: "var(--bg-color)",
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
                              {userBalance?.data?.balance?.toFixed(2)}
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
                              {moment(userData?.data?.dateOfJoining).format(
                                "DD-MM-YYYY"
                              )}
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
                                  backgroundColor: "var(--bg-color)",
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
            <Link to="/main/dashboard">BACK TO MAIN MENU</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
