import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useCasinoListQuery } from "../../store/service/userServices/userServices";

const CasinoHome = () => {
  const nav = useNavigate();
  const { data } = useCasinoListQuery();

  // API से सिर्फ tableIds collect कर लो
  const activeTableIds = data?.data?.map((item) => item.tableId) || [];

  const liveCasinos = [
    { id: "54", img: "/img/andar-bahar.jpeg", name: "Andar Bahar" },
    { id: "51", img: "/img/teen-patti2.jpeg", name: "Teen Patti" },
    { id: "53", img: "/img/lucky7.jpeg", name: "Lucky7" },
    { id: "52", img: "/img/rg_dragon_tiger.jpg", name: "Dragon Tiger" },
    { id: "56", img: "/img/amar-akhbar.jpg", name: "Amar Akbar Anthony" },
    // { id: "100", img: "/img/worli-matka-tvs.jpeg", name: "Worli Matka" },
    { id: "61", img: "/img/1-Day-Teen-Patti.jpg", name: "1 Day Teen Patti" },
    { id: "62", img: "/img/Dragon Tiger.jpg", name: "Dragon Tiger Line" },
  ];

  return (
    <div className="container-fluid p-2">
      <div className="new-heading mt-2">Virtual Casino</div>
      <div className="flexdiv">
        <div className="casino-game">
          <img
            src="/img/dus-ka-dam.jpeg"
            style={{ borderRadius: 5 }}
            className="w-100"
          />
        </div>
        <div className="casino-game">
          <img
            src="/img/roultee.jpeg"
            style={{ borderRadius: 5 }}
            className="w-100"
          />
        </div>
        <div className="casino-game">
          <img
            src="/img/andar-bahar (1).jpeg"
            style={{ borderRadius: 5 }}
            className="w-100"
          />
        </div>
      </div>

      <div className="new-heading mt-2">Live Casino</div>
      <div className="flexdiv" style={{ justifyContent: "center" }}>
        {liveCasinos.map((casino) => {
          const isActive = activeTableIds.includes(casino.id);
          return (
            <div
              key={casino.id}
              className={`casino-game ${isActive ? "active" : "inactive"}`}
              onClick={() => isActive && nav(`/main/casino/${casino.id}`)}
              style={{
                cursor: isActive ? "pointer" : "not-allowed",
              }}>
              <img src={casino.img} alt={casino.name} className="w-100" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CasinoHome;
