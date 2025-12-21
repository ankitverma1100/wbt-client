interface Props {
  active: string;
  setActive: (v: string) => void;
}

export default function GameTabs({ active, setActive }: Props) {
  return (
    <div className="tabs">
      {["Single Jodi", "Harup", "Open Bets"].map((tab) => (
        <button
          key={tab}
          className={active === tab ? "active" : ""}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
