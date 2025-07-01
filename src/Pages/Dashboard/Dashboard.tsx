import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="gx-main-content-wrapper" style={{ marginBottom: 120 }}>
      <div
        className="ant-row gx-flex-gap-150 gx-bg-flex gx-mb-1 ant-row-no-wrap gx-justify-content-center"
        style={{
          marginLeft: "-10px",
          marginRight: "-10px",
          rowGap: 20,
        }}>
        <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Link to="/main/matches">
            <div
              className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
              style={{ width: 100 }}>
              <img alt="inage" src="/img/tvs-pro-inplay.png" />
              <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
                Inplay
              </div>
            </div>
          </Link>
        </div>
        <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Link to="/main/casino">
            <div
              className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
              style={{ width: 100 }}>
              <img alt="inage" src="/img/tvs-pro-casino.png" />
              <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
                casino
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div
        className="ant-row gx-flex-gap-150 gx-bg-flex gx-mb-1 ant-row-no-wrap gx-justify-content-center"
        style={{
          marginLeft: "-10px",
          marginRight: "-10px",
          rowGap: 20,
        }}>
        <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Link to="/main/profile">
            <div
              className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
              style={{ width: 100 }}>
              <img alt="inage" src="/img/tvs-pro-profile.png" />
              <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
                Profile
              </div>
            </div>
          </Link>
        </div>
        <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Link to="/main/statement">
            <div
              className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
              style={{ width: 100 }}>
              <img alt="inage" src="/img/tvs-pro-statement.png" />
              <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
                statement
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div
        className="ant-row gx-flex-gap-150 gx-bg-flex gx-mb-1 ant-row-no-wrap gx-justify-content-center"
        style={{
          marginLeft: "-10px",
          marginRight: "-10px",
          rowGap: 20,
        }}>
        <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Link to="/main/freegame">
            <div
              className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
              style={{ width: 100 }}>
              <img alt="inage" src="/img/tvs-pro-freegames.png" />
              <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
                free games
              </div>
            </div>
          </Link>
        </div>
        <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Link to="/main/rules">
            <div
              className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
              style={{ width: 100 }}>
              <img alt="inage" src="/img/tvs-pro-rules.png" />
              <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
                rules
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div
        className="ant-row gx-flex-gap-150 gx-bg-flex gx-mb-1 ant-row-no-wrap gx-justify-content-center"
        style={{
          marginLeft: "-10px",
          marginRight: "-10px",
          rowGap: 20,
        }}>
        <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Link to="/main/ledger">
            <div
              className="gx-bg-flex gx-flex-column gx-justify-content-center gx-align-items-center"
              style={{ width: 100 }}>
              <img alt="inage" src="/img/tvs-pro-ledger1.png" />
              <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase">
                my ledger
              </div>
            </div>
          </Link>
        </div>
        <div className="ant-col" style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Link to="/main/changepassword">
            <div
              className="gx-bg-flex gx-mt-3 gx-flex-column gx-justify-content-center gx-align-items-center"
              style={{ width: 100 }}>
              <img alt="inage" src="/img/tvs-pro-password.png" />
              <div className="gx-font-weight-bold gx-text-black gx-text-center gx-text-uppercase gx-py-2  ">
                PASSWORD
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
