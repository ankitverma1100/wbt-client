interface Props {
  tabs: string[];
  active: string;
  setActive: (v: string) => void;
}

export default function GameTabs({ tabs, active, setActive }: Props) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
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
