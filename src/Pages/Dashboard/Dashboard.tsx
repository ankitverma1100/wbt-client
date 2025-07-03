import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    // <div className="gx-main-content-wrapper" style={{ marginBottom: 120 }}>
    //   <div
    //     className="ant-row gx-flex-gap-150 gx-bg-flex gx-mb-1 ant-row-no-wrap gx-justify-content-center"
    //     style={{
    //       marginLeft: "-10px",
    //       marginRight: "-10px",
    //       rowGap: 20,
    //     }}>
    //     <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
    //       <Link to="/main/matches">
    //         <div
    //           className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
    //           style={{ width: 100 }}>
    //           <img alt="inage" src="/img/tvs-pro-inplay.png" />
    //           <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
    //             Inplay
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
    //       <Link to="/main/casino">
    //         <div
    //           className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
    //           style={{ width: 100 }}>
    //           <img alt="inage" src="/img/tvs-pro-casino.png" />
    //           <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
    //             casino
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    //   <div
    //     className="ant-row gx-flex-gap-150 gx-bg-flex gx-mb-1 ant-row-no-wrap gx-justify-content-center"
    //     style={{
    //       marginLeft: "-10px",
    //       marginRight: "-10px",
    //       rowGap: 20,
    //     }}>
    //     <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
    //       <Link to="/main/profile">
    //         <div
    //           className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
    //           style={{ width: 100 }}>
    //           <img alt="inage" src="/img/tvs-pro-profile.png" />
    //           <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
    //             Profile
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
    //       <Link to="/main/statement">
    //         <div
    //           className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
    //           style={{ width: 100 }}>
    //           <img alt="inage" src="/img/tvs-pro-statement.png" />
    //           <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
    //             statement
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    //   <div
    //     className="ant-row gx-flex-gap-150 gx-bg-flex gx-mb-1 ant-row-no-wrap gx-justify-content-center"
    //     style={{
    //       marginLeft: "-10px",
    //       marginRight: "-10px",
    //       rowGap: 20,
    //     }}>
    //     <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
    //       <Link to="/main/freegame">
    //         <div
    //           className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
    //           style={{ width: 100 }}>
    //           <img alt="inage" src="/img/tvs-pro-freegames.png" />
    //           <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
    //             free games
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
    //       <Link to="/main/rules">
    //         <div
    //           className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
    //           style={{ width: 100 }}>
    //           <img alt="inage" src="/img/tvs-pro-rules.png" />
    //           <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
    //             rules
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    //   <div
    //     className="ant-row gx-flex-gap-150 gx-bg-flex gx-mb-1 ant-row-no-wrap gx-justify-content-center"
    //     style={{
    //       marginLeft: "-10px",
    //       marginRight: "-10px",
    //       rowGap: 20,
    //     }}>
    //     <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
    //       <Link to="/main/ledger">
    //         <div
    //           className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
    //           style={{ width: 100 }}>
    //           <img alt="inage" src="/img/tvs-pro-ledger1.png" />
    //           <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
    //             my ledger
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
    //       <Link to="/main/changepassword">
    //         <div
    //           className="gx-bg-flex gx-mt-3 gx-flex-column gx-justify-content-center gx-align-items-center"
    //           style={{ width: 100 }}>
    //           <img alt="inage" src="/img/tvs-pro-password.png" />
    //           <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase gx-py-2  ">
    //             PASSWORD
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="page-body">
        <div className="">
          <marquee
            width="100%"
            direction="left"
            style={{
              background: "black",
              color: "white",
              textTransform: "uppercase",
            }}>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            very good &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            hello please place a bet quickly{" "}
          </marquee>
        </div>
        <div className="container">
          <div className="row padding_space">
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/matches">
                <img src="/img/1.png" /> In Play{" "}
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/profile">
                <img src="/img/2.png" /> Profile{" "}
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/statement">
                <img src="/img/3.png" /> Statement{" "}
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/changepassword">
                <img src="/img/4.png" /> Change Password
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/freegames">
                <img src="/img/5.png" /> Free Games
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/rules">
                <img src="/img/6.png" /> Rules
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/ledger">
                <img src="/img/7.png" />
                My Ledger
              </Link>
            </div>
            <div className="col-md-6 col-6 text-center menu-list-item">
              <Link to="/main/casino">
                <img src="/img/8.png" /> Games{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
