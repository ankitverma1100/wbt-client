import { useParams } from "react-router-dom";
import { useGetChIdsQuery } from "../../store/service/tvServices";
import { useGetTvScoreDataQuery } from "../../store/service/userServices/userServices";
import { useGetMyIpQuery } from "../../store/service/odds/oddsServices";
import { useEffect, useState } from "react";

interface Props {
  showFull: boolean;
  showTv: boolean;
}

const TvSection = ({ showFull, showTv }: Props) => {
  const [loadingTv, setLoadingTv] = useState(false);
  const [tvUrl, setTvUrl] = useState<string>("");
  const { id } = useParams();

  const { data: tvScoreData } = useGetTvScoreDataQuery({
    matchId: id ?? "",
  });
  const { data: chids } = useGetChIdsQuery({
    matchId: id ?? "",
  });

  const { data: userIp } = useGetMyIpQuery({});

  const channelId = chids?.data?.channelId;

  const fetchTvStream = async () => {
    if (!channelId) return;
    setLoadingTv(true);

    try {
      const response = await fetch("https://api2.dbm9.com/api/tv-stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          channel: channelId,
          ipv4: userIp?.ip ?? "",
        }),
      });

      const result = await response.json();
      console.log("TV Stream API:", result);

      if (result.status === 1 && typeof result.data === "string") {
        const match = result.data.match(/src=['"]([^'"]+)['"]/);
        const srcUrl = match ? match[1] : null;
        setTvUrl(srcUrl);
      } else {
        console.error("Stream not found");
      }
    } catch (error) {
      console.error("TV Stream Error:", error);
    } finally {
      setLoadingTv(false);
    }
  };

  useEffect(() => {
    if (showTv) fetchTvStream();
  }, [showTv, channelId, userIp]);

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
          src={tvUrl}
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
      {/* {isAntPro ? (
        <Score showFull={showFull} />
      ) : ( */}
      <iframe
        src={tvScoreData?.data?.scoreUrl}
        id="score_fs"
        className={showFull ? "fs_match_size_full" : "fs_match_size"}
      />
      {/* )} */}
    </>
  );
};

export default TvSection;
