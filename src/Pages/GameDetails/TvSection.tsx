import { useParams } from "react-router-dom";
import { useGetTvScoreDataQuery } from "../../store/service/userServices/userServices";

interface Props {
  showFull: boolean;
  showTv: boolean;
}

const TvSection = ({ showFull, showTv }: Props) => {
  const { id } = useParams();

  const { data: tvScoreData } = useGetTvScoreDataQuery({ matchId: id ?? "" });

  return (
    <>
      {showTv && (
        <iframe
          width="100%"
          className="tv-iframe"
          title="tv-live-match-container"
          height={"200px"}
          style={{ marginBottom: "-9px" }}
          src={tvScoreData?.data?.tvUrl}
        />
      )}
      <iframe
        src={tvScoreData?.data?.scoreUrl}
        id="score_fs"
        title="match-scorecard"
        className={showFull ? "fs_match_size_full" : "fs_match_size"}
      />
    </>
  );
};

export default TvSection;
