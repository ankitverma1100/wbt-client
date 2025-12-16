import { Link } from "react-router-dom";
import { useActiveMatchQuery } from "../../store/service/odds/oddsServices";
import moment from "moment";
import { useActiveEventMutation } from "../../store/service/userServices/userServices";
import { useEffect, useState } from "react";
import "./style.scss";

/* ---------------- ICONS ---------------- */
const CalenderIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg>
);

const ClockIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="clock-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg>
);

/* ---------------- COMPONENT ---------------- */
const Inplay = () => {
  const [activeMatches, setActiveMatches] = useState<any[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { data } = useActiveMatchQuery();
  const [getActiveEvent, { data: activeEvent }] = useActiveEventMutation();

  const token = localStorage.getItem("client-token");

  /* ---------- BANNERS ---------- */
  const banners = [
    "/img/inplay/hbh-vs-syt.jpg",
    "/img/inplay/international-leage-banner.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextSlide = () => {
    setIsAnimating(true);

    // Immediately update the slide index
    setCurrentSlideIndex((prev) => (prev + 1) % banners.length);

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Match this with your CSS transition duration
  };

  /* ---------- API ---------- */
  useEffect(() => {
    if (token) getActiveEvent();
  }, [token]);

  useEffect(() => {
    if (!data || !activeEvent) return;

    const dataActive = data?.data
      ?.flatMap((item) =>
        activeEvent.data
          .filter((m) => m?.eventId === item?.matchId)
          .map((m) => ({ ...item, active: m.active }))
      )
      ?.sort((a, b) => {
        if (a.matchName === "Twenty20 Big Bash") return -1;
        if (b.matchName === "Twenty20 Big Bash") return 1;
        return new Date(a.openDate).getTime() - new Date(b.openDate).getTime();
      });

    setActiveMatches(dataActive);
  }, [activeEvent, data]);

  // Function to determine slide position class
  const getSlidePosition = (index: number) => {
    const totalSlides = banners.length;

    if (index === currentSlideIndex) {
      return "slide-center";
    }

    // Check if this is the next slide
    const nextIndex = (currentSlideIndex + 1) % totalSlides;
    if (index === nextIndex) {
      return "slide-right";
    }

    // Check if this is the previous slide
    const prevIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    if (index === prevIndex) {
      return "slide-left";
    }

    // For all other slides (shouldn't happen with 2 slides)
    return "slide-left";
  };

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
                <img src={img} alt={`Banner ${index + 1}`} />
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
            if (!match?.active) return null;

            return (
              <div className="match-card" key={match.matchId}>
                <Link to={`/main/match-deatils/${match.matchId}`}>
                  {/* Match Header Section */}
                  <div className="match-header">
                    <div className="match-status">
                      <h3 className="match-title">{match.matchName}</h3>
                      <span className="match-format">T20 SERIES</span>
                    </div>
                  </div>
                  <div className="match-details">
                    <div className="row">
                      <div className="col-sm-6 col-8">
                        <div className="match-meta">
                          <div className="meta-item">
                            <CalenderIcon />
                            <span>{moment(match.openDate).format("ddd, MMM DD YYYY")}</span>
                          </div>
                          <div className="meta-item">
                            <ClockIcon />
                            <span>{moment(match.openDate).format("hh:mm A")}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-2">
                        <div className="live-text"><span className="live-blink"></span> {match.inPlay && <span className="live-dot" />}LIVE</div>
                      </div>
                      <div className="col-sm-3 col-2">
                        <div className="match-format-small"><span>BM</span><span>F</span></div>
                      </div>
                    </div>
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