import { useParams } from "react-router-dom";
import { isAntPro } from "../CasinoDetails/Constant";

interface Props {
  showFull: boolean;
  showTv: boolean;
}

const TvSection = ({ showFull, showTv }: Props) => {
  const { id } = useParams();
  return (
    <>
      {showTv && (
        <iframe
          width="100%"
          // ref={ref}
          className="tv-iframe"
          title="tv-live-match-container"
          height={"200px"}
          style={{
            marginBottom: "-9px",
          }}
          src={`https://tv.tresting.com/?eventid=${id}`}
        />
      )}
      <iframe
        src={
          isAntPro
            ? `https://score.trovetown.co/socket-iframe-1/crickexpo/${id}`
            : `https://score.trovetown.co/socket-iframe-10/crickexpo/${id}`
        }
        id="score_fs"
        className={showFull ? "fs_match_size_full" : "fs_match_size"}
      />
    </>
  );
};

export default TvSection;
