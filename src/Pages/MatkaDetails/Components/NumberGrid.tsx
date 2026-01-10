import NumberItem from "./NumberItem";

interface Props {
  numbers: string[];
  onSelectNumber: (num: string) => void;
  showValue?: boolean;
}

export default function NumberGrid({
  numbers,
  onSelectNumber,
  showValue = false,
}: Props) {
  return (
    <div className="number-grid">
      {numbers.map((num) => (
        <NumberItem
          key={num}
          value={num}
          onClick={onSelectNumber}
          showValue={showValue}
        />
      ))}
    </div>
  );
}
