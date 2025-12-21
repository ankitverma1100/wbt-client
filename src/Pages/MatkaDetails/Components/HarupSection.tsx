import NumberItem from "./NumberItem";

interface Props {
  title: string;
  onSelectNumber: (num: string) => void;
}

export default function HarupSection({ title, onSelectNumber }: Props) {
  return (
    <div className="harup-section">
      <h3 className="harup-title">{title}</h3>

      <div className="number-grid harup-grid">
        {Array.from({ length: 10 }, (_, i) => (
          <NumberItem
            key={i}
            value={String(i)}
            onClick={() => onSelectNumber(String(i))}
          />
        ))}
      </div>
    </div>
  );
}
