/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./changepassword.scss";
import { useUserCahngePasswordMutation } from "../../store/service/userServices/userServices";
import { useNavigate } from "react-router-dom";

const Changepassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const nav = useNavigate();

  const [passwordChange, { data: passData, error }] =
    useUserCahngePasswordMutation();

  const handleUpdatePassword = () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setErrorMessage("Please fill all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("New Password and Confirm Password do not match.");
      return;
    }

    passwordChange({
      currentPassword,
      newPassword,
    });
  };

  useEffect(() => {
    if (passData) {
      if (passData?.status) {
        localStorage.clear();
        nav("/login");
        // setSuccessMessage("Password changed successfully. Redirecting to login...");
        // setTimeout(() => {
        //   localStorage.clear();
        //   nav("/login");
        // }, 2000); // Give time to show the success message
      } else {
        setErrorMessage(passData?.message || "Password change failed.");
      }
    }

    if (error) {
      setErrorMessage("An error occurred during password change.");
    }
  }, [passData, error, nav]);

  return (
    <div className="container-fluid">
      <table
        border={0}
        cellSpacing={0}
        cellPadding={0}
        className="inputbox mt-5">
        <tbody>
          <tr>
            <td height={45}>
              <h4 className="title_head">Change Password</h4>
              {errorMessage && (
                <label className="text-danger p">{errorMessage}</label>
              )}
              {successMessage && (
                <label className="text-success p">{successMessage}</label>
              )}

              <table
                className="profile-table"
                width="100%"
                border={0}
                cellSpacing={0}
                cellPadding={10}>
                <form method="post" action="" />
                <tbody>
                  <tr>
                    <td className="FontTextBlack10px">&nbsp;</td>
                    <td align="center" style={{ padding: "revert-layer" }}>
                      <input
                        name="oldpassword"
                        className="form-control"
                        id="oldpass"
                        placeholder="OLD PASSWORD"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </td>
                    <td
                      className="FontTextBlack10px"
                      style={{ padding: "revert-layer" }}>
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="FontTextBlack10px"
                      style={{ padding: "revert-layer" }}>
                      &nbsp;
                    </td>
                    <td align="center" style={{ padding: "revert-layer" }}>
                      <input
                        name="newpassword"
                        className="form-control"
                        placeholder="NEW PASSWORD"
                        type="password"
                        id="newpass"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </td>
                    <td
                      className="FontTextBlack10px"
                      style={{ padding: "revert-layer" }}>
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="FontTextBlack10px"
                      style={{ padding: "revert-layer" }}>
                      &nbsp;
                    </td>
                    <td align="center" style={{ padding: "revert-layer" }}>
                      <input
                        name="conpassword"
                        className="form-control"
                        placeholder="CONFIRM PASSWORD"
                        type="password"
                        id="conpass"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </td>
                    <td
                      className="FontTextBlack10px"
                      style={{ padding: "revert-layer" }}>
                      &nbsp;
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td height={45}>
              <div id="menu" style={{ textAlign: "center" }}>
                <ul className="nav" style={{ display: "block" }}>
                  <li
                    className="active"
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}>
                    <button
                      type="button"
                      name="submit"
                      className="pswrdbtn"
                      onClick={handleUpdatePassword}>
                      DONE
                    </button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Changepassword;
