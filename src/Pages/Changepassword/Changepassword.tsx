/* eslint-disable @typescript-eslint/no-explicit-any */
import "./changepassword.scss";

const Changepassword = () => {
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
              <label className="text-danger p" />
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
                  <li className="active">
                    <button
                      type="submit"
                      name="submit"
                      value={1}
                      id="but"
                      className="pswrdbtn">
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
