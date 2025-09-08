import { useEffect } from "react";
import { useGetUserLiabilityMutation } from "../../store/service/userServices/userServices";
import { Link } from "react-router-dom";
import moment from "moment";

const PendingBet = () => {
  const [trigger, { data: ledgerData }] = useGetUserLiabilityMutation();

  useEffect(() => {
    trigger();
  }, []);

  return (
    <div className="container">
      <form name="BetPlayer" method="post" action="" wfd-id={1}>
        <br />

        <div className="my-ledger-data-table">
          <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
            <tbody>
              <tr>
                <td
                  height={30}
                  align="center"
                  className="TeamCombo"
                  style={{
                    backgroundColor: "rgb(42, 54, 59)",
                  }}>
                  <p
                    style={{
                      color: "#FFF",
                      fontSize: 13,
                      fontWeight: "bold",
                      marginBottom: 0,
                    }}>
                    {" "}
                    Pending BETS
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
            <tbody>
              <tr>
                <td
                  height={30}
                  align="center"
                  className="TeamCombo"
                  style={{
                    backgroundColor: "var(--bg-color)",
                  }}>
                  <p
                    style={{
                      color: "#FFF",
                      fontSize: 13,
                      fontWeight: "bold",
                      marginBottom: 0,
                    }}>
                    {" "}
                    MATCH BETS
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            className="ledger-data"
            width="100%"
            border={0}
            cellPadding={20}
            cellSpacing={2}>
            <tbody>
              <tr>
                <td
                  width="40%"
                  height={35}
                  align="center"
                  valign="middle"
                  className="font_text_white10px"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    paddingRight: 5,
                    color: "#fff",
                    backgroundColor: "#2A363B",
                  }}>
                  Team
                </td>

                <td
                  width="15%"
                  align="center"
                  valign="middle"
                  className="font_text_white10px"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#2A363B",
                  }}>
                  Run
                </td>
                <td
                  width="15%"
                  align="center"
                  valign="middle"
                  className="font_text_white10px"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#2A363B",
                  }}>
                  AMT
                </td>
                <td
                  width="15%"
                  align="center"
                  valign="middle"
                  className="font_text_white10px"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#2A363B",
                  }}>
                  MODE
                </td>
                <td
                  width="15%"
                  align="center"
                  valign="middle"
                  className="font_text_white10px"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    paddingRight: 5,
                    color: "#fff",
                    backgroundColor: "#2A363B",
                  }}>
                  Date
                </td>
              </tr>
              {ledgerData?.data
                ?.filter((item) => item?.marketType !== "Fancy")
                .map((items: any) => {
                  return (
                    <tr>
                      <td
                        align="center"
                        valign="middle"
                        style={{ backgroundColor: "#FFFFFF" }}>
                        {items?.matchName}
                      </td>

                      <td
                        align="center"
                        valign="middle"
                        style={{ backgroundColor: "#FFFFFF" }}>
                        {items?.odds}
                      </td>
                      <td
                        align="center"
                        valign="middle"
                        style={{ backgroundColor: "#FFFFFF" }}>
                        {items?.stake}
                      </td>
                      <td
                        align="center"
                        valign="middle"
                        style={{ backgroundColor: "#FFFFFF" }}>
                        {items?.marketType === "Fancy"
                          ? items?.back
                            ? "YES"
                            : "NO"
                          : items?.back
                          ? "L"
                          : "K"}
                      </td>
                      <td
                        align="center"
                        valign="middle"
                        style={{ backgroundColor: "#FFFFFF" }}>
                        {moment(items?.date).format("DD-MM-YYYY hh:mm:ss A")}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <br />
          <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
            <tbody>
              <tr>
                <td
                  height={30}
                  align="center"
                  className="TeamCombo"
                  style={{
                    backgroundColor: "var(--bg-color)",
                  }}>
                  <p
                    style={{
                      color: "#FFF",
                      fontSize: 13,
                      fontWeight: "bold",
                      marginBottom: 0,
                    }}>
                    {" "}
                    FANCY BETS
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            className="ledger-data"
            width="100%"
            border={0}
            cellPadding={20}
            cellSpacing={2}>
            <tbody>
              <tr>
                <td
                  width="40%"
                  height={35}
                  align="center"
                  valign="middle"
                  className="font_text_white10px"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    paddingRight: 5,
                    color: "#fff",
                    backgroundColor: "#2A363B",
                  }}>
                  Team
                </td>

                <td
                  width="15%"
                  align="center"
                  valign="middle"
                  className="font_text_white10px"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#2A363B",
                  }}>
                  Run
                </td>
                <td
                  width="15%"
                  align="center"
                  valign="middle"
                  className="font_text_white10px"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#2A363B",
                  }}>
                  AMT
                </td>
                <td
                  width="15%"
                  align="center"
                  valign="middle"
                  className="font_text_white10px"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#2A363B",
                  }}>
                  MODE
                </td>
                <td
                  width="15%"
                  align="center"
                  valign="middle"
                  className="font_text_white10px"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    paddingRight: 5,
                    color: "#fff",
                    backgroundColor: "#2A363B",
                  }}>
                  Date
                </td>
              </tr>
              {ledgerData?.data
                ?.filter((item) => item?.marketType === "Fancy")
                .map((items: any) => {
                  return (
                    <tr>
                      <td
                        align="center"
                        valign="middle"
                        style={{ backgroundColor: "#FFFFFF" }}>
                        {items?.matchName}
                      </td>

                      <td
                        align="center"
                        valign="middle"
                        style={{ backgroundColor: "#FFFFFF" }}>
                        {items?.odds}
                      </td>
                      <td
                        align="center"
                        valign="middle"
                        style={{ backgroundColor: "#FFFFFF" }}>
                        {items?.stake}
                      </td>
                      <td
                        align="center"
                        valign="middle"
                        style={{ backgroundColor: "#FFFFFF" }}>
                        {items?.marketType === "Fancy"
                          ? items?.back
                            ? "YES"
                            : "NO"
                          : items?.back
                          ? "L"
                          : "K"}
                      </td>
                      <td
                        align="center"
                        valign="middle"
                        style={{ backgroundColor: "#FFFFFF" }}>
                        {moment(items?.date).format("DD-MM-YYYY hh:mm:ss A")}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <br />
        <div className="menu mt-4 w-100" id="menu">
          <ul className="nav" style={{ display: "block" }}>
            <li className="back-main-menu">
              <Link to="/main/dashboard">BACK TO MAIN MENU</Link>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default PendingBet;
