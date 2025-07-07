import { useParams } from "react-router-dom";

const TvSection = () => {
  const { id } = useParams();
  return (
    <iframe
      src={`https://score.trovetown.co/socket-iframe-1/crickexpo/${id}`}
      id="score_fs"
      className="fs_match_size"
    />
  );
};

export default TvSection;
