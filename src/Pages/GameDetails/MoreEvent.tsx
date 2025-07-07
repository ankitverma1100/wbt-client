import moment from "moment";
import { useActiveMatchQuery } from "../../store/service/odds/oddsServices";
import { useParams } from "react-router-dom";

const MoreEvent = () => {
  const { data } = useActiveMatchQuery();
  const { id } = useParams<{ id: string }>();

  return (
    <div className="overflow-hidden">
      <div className="row other-matchrow">
        {data?.data?.map((match) => {
          if (Number(match?.matchId) === Number(id)) return null; // Skip the current match
          return (
            <>
              <div className="col-1">
                <span className="green-circle" />
              </div>
              <div className="col-11 px-2">
                <a href="/main/dashboard/game/239">
                  <h6>{match?.matchName}</h6>
                  <span className="date">
                    {moment(match?.openDate).format("MMM DD YYYY HH:mm A")}{" "}
                  </span>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MoreEvent;
