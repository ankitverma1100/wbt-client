import { useActiveMatchQuery } from "../../store/service/odds/oddsServices";
import { useEffect, useMemo, useState } from "react";
import MatchCard from "../../Common/MatchCard";
import "./style.scss";

/* ---------------- COMPONENT ---------------- */
const Inplay = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const { data } = useActiveMatchQuery();

  /* ---------- BANNERS ---------- */
  const banners = [
    "/img/inplay/hbh-vs-syt.jpg",
    "/img/inplay/international-leage-banner.jpg",
  ];

  const activeMatches = useMemo(() => {
    if (!data?.data) return [];

    return data.data
      .slice()
      .sort((a, b) => {
        if (a.matchName === "Twenty20 Big Bash") return -1;
        if (b.matchName === "Twenty20 Big Bash") return 1;
        return new Date(a.openDate).getTime() - new Date(b.openDate).getTime();
      });
  }, [data]);

  useEffect(() => {
    if (banners.length <= 1) return undefined;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="inplay-page">
      <div className="inplay-container">
        {/* ---------- LEFT-RIGHT SLIDER ---------- */}
        <div className="slider-container">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(-${currentSlideIndex * 100}%)`,
            }}
          >
            {banners.map((img, index) => (
              <div className="slide" key={index}>
                <img src={img} alt={`Banner ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>


        <div className="inplay-heading">
          <img src="/img/inplay/bat-ball-icon.png" alt="cricket" />
          <span>CRICKET</span>
        </div>

        {/* ---------------- MATCH LIST ---------------- */}
        <div className="match-list">
          {activeMatches?.map((match) => {
            return <MatchCard key={match.matchId} match={match} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Inplay;
