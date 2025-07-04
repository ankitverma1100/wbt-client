import { Link } from "react-router-dom";
import { useActiveMatchQuery } from "../../store/service/odds/oddsServices";
import moment from "moment";

const Inplay = () => {
  const { data } = useActiveMatchQuery();
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          {data?.data.map((match) => {
            return (
              <div className="card single-match mt-3 carddiv">
                <Link to={`/main/match-deatils/${match.matchId}`}>
                  <span className="green-circle" />
                  <div className="card-content">
                    <p>
                      <span className="playbtn">
                        <img
                          src="/main/dashboardAssets/imgs/cards/playbtn.svg"
                          alt="play"
                        />
                      </span>
                      <span className="rectbox">
                        <span className="green-span" />
                        <i>F</i>{" "}
                      </span>
                      <span className="rectbox">
                        <span className="green-span" />
                        <i>B</i>{" "}
                      </span>
                      {moment(match.openDate).format("MMM DD YYYY, HH:mm A")}
                    </p>
                    <h5>{match.matchName}</h5>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Inplay;
