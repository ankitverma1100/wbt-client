import NumberItem from "./NumberItem";

interface Props {
  onSelectNumber: (num: string) => void;
}

export default function NumberGrid({ onSelectNumber }: Props) {
  return (
    <div className="number-grid">
      {Array.from({ length: 100 }, (_, i) => (
        <NumberItem
          key={i}
          value={String(i).padStart(2, "0")}
          onClick={onSelectNumber}
        />
      ))}
    </div>
  );
}
