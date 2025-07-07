import { useParams } from "react-router-dom";
import { useGetBetListBymatchIdQuery } from "../../store/service/userServices/userServices";

const MatchBets = () => {
  const { id } = useParams();
  const { data } = useGetBetListBymatchIdQuery({
    matchId: id ?? "",
    activeBet: true,
  }, {pollingInterval: 1000});
  // const { data: completed } = useGetBetListBymatchIdQuery({
  //   matchId: id ?? "",
  //   activeBet: false,
  // });


  return (
    <>
      <div
        className="fancybetdiv text-center"
        style={{ background: "#2a363b", padding: 2, letterSpacing: 1 }}>
        <h6
          className="mb-0"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px ",
            fontFamily: '"Roboto"',
          }}>
          MATCH BETS
        </h6>
      </div>
      <div className="overflow-responsive">
        <table
          width="100%"
          cellSpacing={2}
          cellPadding={2}
          border={0}
          className="table compete-game-"
          style={{ whiteSpace: "nowrap" }}>
          <thead>
            <tr>
              <td
                className="FontTextWhite10px border"
                style={{
                  color: "#fff ",
                  background: "#7d5c0e",
                }}
                height={25}
                align="center">
                TEAM{" "}
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                RATE
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                AMOUNT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                MODE
              </td>
            </tr>
          </thead>
          <tbody id="MyTeamBets">
            {data?.data?.Bookmaker?.map((items) => {
              return (
                <tr style={{ borderBottom: "1px solid #3d8282" }}>
                  <td
                    style={{
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.nation}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.rate}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.amount}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.back ? "LAGAI" : "KHAI"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <div
        className="fancybetdiv text-center"
        style={{ background: "#2a363b", padding: 2, letterSpacing: 1 }}>
        <h6
          className="mb-0"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px ",
            fontFamily: '"Roboto"',
          }}>
          FANCY BETS
        </h6>
      </div>
      <div className="overflow-responsive">
        <table
          width="100%"
          cellSpacing={2}
          cellPadding={2}
          border={0}
          className="table compete-game-"
          style={{ whiteSpace: "nowrap" }}>
          <thead>
            <tr>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                height={25}
                align="center">
                SESSION{" "}
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                RUN
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                RATE
              </td>
              {/*<td class="FontTextWhite10px border" style="color: #fff ;"   align="center">RESULT</td>*/}
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                AMOUNT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                MODE
              </td>
            </tr>
          </thead>
          <tbody id="MySessionBets">
            {data?.data?.Fancy2Market?.map((items) => {
              return (
                <tr style={{ borderBottom: "1px solid #3d8282" }}>
                  <td
                    style={{
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.nation}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.priveValue}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.rate}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.amount}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid #3d8282",
                      borderBottom: "1px solid #3d8282",
                    }}>
                    {items?.back ? "Yes" : "No"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <div
        className="fancybetdiv text-center"
        style={{ background: "#2a363b", padding: 2, letterSpacing: 1 }}>
        <h6
          className="mb-0"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px ",
            fontFamily: '"Roboto"',
          }}
          data-toggle="modal"
          data-target="#">
          COMPLETED FANCY BETS
        </h6>
      </div>
      <div className="overflow-responsive">
        <table
          width="100%"
          cellSpacing={2}
          cellPadding={2}
          border={0}
          className="table compete-game-"
          style={{ whiteSpace: "nowrap" }}>
          <thead>
            <tr>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                height={25}
                align="center">
                RUNNER{" "}
              </td>
              <td
                className="FontTextWhite10px border"
                style={{
                  color: "#fff ",
                  whiteSpace: "nowrap",
                  background: "#7d5c0e",
                }}
                align="center">
                DATE{" "}
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                RUN
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                RATE
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                RESULT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                valign="middle"
                align="center">
                AMOUNT
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                MODE
              </td>
              <td
                className="FontTextWhite10px border"
                style={{ color: "#fff ", background: "#7d5c0e" }}
                align="center">
                P&amp;L
              </td>
            </tr>
          </thead>
          <tbody id="MySessionCompletedBets"></tbody>
        </table>
      </div>
    </>
  );
};

export default MatchBets;
