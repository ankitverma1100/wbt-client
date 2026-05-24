import { useParams } from "react-router-dom";

interface Props {
  showFull: boolean;
  showTv: boolean;
}

const TvSection = ({ showFull, showTv }: Props) => {
  const { id } = useParams();
  const scoreUrl = id ? `https://admin.khelo7.com/socket-iframe-5/crickexpo/${id}` : "";

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
          src={`${import.meta.env.VITE_TV_URL}/${id}`}
        />
        // <>
        //   {loadingTv ? (
        //     <p style={{ color: "#fff", textAlign: "center" }}>
        //       Loading stream...
        //     </p>
        //   ) : tvUrl ? (
        //     typeof tvUrl === "string" && tvUrl.includes("<iframe") ? (
        //       // Response is iframe HTML
        //       <div
        //         dangerouslySetInnerHTML={{ __html: tvUrl }}
        //         style={{ width: "100%", height: "100%" }}
        //       />
        //     ) : (
        //       // Response is just a URL
        //       <iframe
        //         src={tvUrl}
        //         title="TV Stream"
        //         style={{
        //           width: "100%",
        //           height: "100%",
        //           border: "none",
        //         }}
        //         allowFullScreen
        //       />
        //     )
        //   ) : (
        //     <p style={{ color: "#fff", textAlign: "center" }}>
        //       No stream available
        //     </p>
        //   )}
        // </>
      )}
      {scoreUrl ? (
        <iframe
          src={scoreUrl}
          id="score_fs"
          title="match-scorecard"
          className={showFull ? "fs_match_size_full" : "fs_match_size"}
        />
      ) : null}
    </>
  );
};

export default TvSection;
