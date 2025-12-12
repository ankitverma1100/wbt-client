import { Link } from "react-router-dom";
import { useActiveMatchQuery } from "../../store/service/odds/oddsServices";
import moment from "moment";
import { useActiveEventMutation } from "../../store/service/userServices/userServices";
import { useEffect, useState } from "react";

const Inplay = () => {
  const [activeMatches, setActiveMatches] = useState<any[]>([]);
  const { data } = useActiveMatchQuery();
  const [getActiveEvent, { data: activeEvent }] = useActiveEventMutation();

  const token = localStorage.getItem("client-token");

  useEffect(() => {
    if (token) {
      getActiveEvent();
    }
  }, [token]);

  useEffect(() => {
    if (!data || !activeEvent) return;

    const dataActive = data?.data
      ?.flatMap((item) =>
        activeEvent.data
          .filter((activeMathes) => activeMathes?.eventId === item?.matchId)
          .map((activeMathes) => ({
            ...item,
            active: activeMathes.active,
          }))
      )
      ?.sort((a, b) => {
        // Put "Twenty20 Big Bash" on top
        if (a.matchName === "Twenty20 Big Bash") return -1;
        if (b.matchName === "Twenty20 Big Bash") return 1;

        // Otherwise sort by openDate
        return new Date(a.openDate).getTime() - new Date(b.openDate).getTime();
      });

    setActiveMatches(dataActive);
  }, [activeEvent, data]);

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          {activeMatches?.map((match) => {
            if (!match?.active) return null;
            return (
              <div className="card single-match mt-3 carddiv">
                <Link to={`/main/match-deatils/${match.matchId}`}>
                  {match?.inPlay ? (
                    <span className="green-circle" />
                  ) : (
                    <span style={{ margin: "10px 20px" }}></span>
                  )}
                  <div className="card-content">
                    <p>
                      <span className="playbtn">
                        <img src="/img/playbtn.svg" alt="play" />
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
