import { Link } from "react-router-dom";
import "./style.scss";

type BackToMainMenuProps = {
  to: string;
  label?: string;
  className?: string;
};

const BackToMainMenu = ({
  to,
  label = "Back To Main Menu",
  className,
}: BackToMainMenuProps) => {
  const wrapperClassName = ["back-to-main-menu", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName}>
      <Link to={to}>{label}</Link>
    </div>
  );
};

export default BackToMainMenu;
