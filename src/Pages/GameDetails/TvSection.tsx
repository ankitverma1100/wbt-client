import { useParams } from "react-router-dom";

interface Props {
  showFull: boolean;
}

const TvSection = ({ showFull }: Props) => {
  const { id } = useParams();
  return (
    <iframe
      src={`https://score.trovetown.co/socket-iframe-1/crickexpo/${id}`}
      id="score_fs"
      className={showFull ? "fs_match_size_full" : "fs_match_size"}
    />
  );
};

export default TvSection;
