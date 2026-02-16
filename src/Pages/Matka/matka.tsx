import { useNavigate } from "react-router-dom";
import { useMatkaListQuery } from "../../store/service/userServices/userServices";
import "./style.scss";

export default function Matka() {
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useMatkaListQuery();
  const matkaList = data?.data ?? [];
  const isLoadingList = isLoading || isFetching;

  const formatTime = (timeStr?: string) => {
    if (!timeStr) return "";
    return timeStr.replace("To", "|");
  };

  return (
    <div className="matka-wrapper">
      <div className="container">
        {isLoadingList ? (
          <div className="matka-empty">Loading matka games...</div>
        ) : matkaList.length === 0 ? (
          <div className="matka-empty">No matka games available</div>
        ) : (
          matkaList.map((item) => (
            <div
              key={item.id}
              className="matka-card"
              onClick={() => navigate(`/main/matka-details/${item.id}`)}
            >
              <h2 className="matka-title">{item.name}</h2>
              <p>{formatTime(item.time)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
