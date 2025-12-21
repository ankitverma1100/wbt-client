import { useNavigate } from "react-router-dom";
import "./style.scss";

const MATKA_LIST = [
  {
    title: "21-12-2025-FARIDABAD",
    result: "06:15 PM",
    close: "05:15 PM",
    slug: "21-12-2025-faridabad",
  },
  {
    title: "21-12-2025-GHAZIABAD",
    result: "09:00 PM",
    close: "08:00 PM",
    slug: "21-12-2025-ghaziabad",
  },
  {
    title: "21-12-2025-GALI",
    result: "11:30 PM",
    close: "10:30 PM",
    slug: "21-12-2025-gali",
  },
  {
    title: "21-12-2025-DESAWAR",
    result: "05:30 AM",
    close: "04:30 AM",
    slug: "21-12-2025-desawar",
  },
];

export default function Matka() {
  const navigate = useNavigate();

  return (
    <div className="matka-wrapper">
      <div className="container">
        {MATKA_LIST.map((item) => (
        <div
          key={item.slug}
          className="matka-card"
          onClick={() => navigate(`/main/matka-details/${item.slug}`)}
        >
          <h2 className="matka-title">{item.title}</h2>
          <p>
            RESULT {item.result} | BET CLOSE TIME {item.close}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
}
