import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useCasinoListQuery } from "../../store/service/userServices/userServices";

const CasinoHome = () => {
  const nav = useNavigate();
  const { data } = useCasinoListQuery();

  const activeTableIds = data?.data?.map((item) => item.tableId) || [];

  const virtualCasino = [
    { img: "/img/casino/aviator.webp", name: "AVIATOR" },
    { img: "/img/casino/dus-ka-dum.webp", name: "DUS KA DUM" },
    { img: "/img/casino/teen-patti.webp", name: "TEEN PATTI" },
    { img: "/img/casino/andar-bahar.webp", name: "ANDAR BAHAR" },
  ];

  const liveCasino = [
    { id: "52", img: "/img/casino/dragon-tiger.webp", name: "DRAGON TIGER" },
    { id: "53", img: "/img/casino/lucky-b.webp", name: "LUCKY7B" },
    { id: "56", img: "/img/casino/a-a-a.webp", name: "AMAR AKBAR ANTHONY" },
    { id: "51", img: "/img/casino/teen-patti-2020.webp", name: "TEEN PATTI 2020" },
    { id: "54", img: "/img/casino/andar-bahar-2.webp", name: "ANDAR BAHAR 2" },
    { id: "61", img: "/img/casino/teen-patti-odi.webp", name: "TEEN PATTI ODI" },
    { id: "100", img: "/img/casino/worli-matka.webp", name: "WORLI MATKA" },
    { id: "55", img: "/img/casino/lucky-a.webp", name: "LUCKY7A" },
    { id: "3", img: "/img/casino/3-card-jugdment.webp", name: "3 CARD JUDGEMENT" },
  ];

  return (
    <div className="casino-page">

      {/* ===== VIRTUAL CASINO ===== */}
      <div className="casino-section-title">VIRTUAL CASINO</div>

      <div className="casino-grid">
        {virtualCasino.map((item, index) => (
          <div key={index} className="casino-grid-item">
            <div className="casino-card">
              <img src={item.img} alt={item.name} />
              <div className="casino-card-title">{item.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== LIVE CASINO ===== */}
      <div className="casino-section-title ">LIVE CASINO</div>

      <div className="casino-grid">
        {liveCasino.map((item) => {
          const isActive = activeTableIds.includes(item.id);

          return (
            <div key={item.id} className="casino-grid-item">
              <div
                className={`casino-card ${isActive ? "active" : "inactive"}`}
                onClick={() => isActive && nav(`/main/casino/${item.id}`)}
              >
                <img src={item.img} alt={item.name} />
                <div className="casino-card-title">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default CasinoHome;
