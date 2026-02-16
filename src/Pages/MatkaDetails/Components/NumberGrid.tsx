import NumberItem from "./NumberItem";

export interface NumberGridItem {
  label: string;
  subLabel?: string | number;
  subClassName?: string;
}

interface Props {
  numbers: string[];
  onSelectNumber: (num: string) => void;
  showValue?: boolean;
  items?: NumberGridItem[];
}

export default function NumberGrid({
  numbers,
  onSelectNumber,
  showValue = false,
  items,
}: Props) {
  const gridItems =
    items && items.length > 0
      ? items
      : numbers.map((num) => ({ label: num }));

  return (
    <div className="number-grid">
      {gridItems.map((item) => (
        <NumberItem
          key={item.label}
          value={item.label}
          onClick={onSelectNumber}
          showValue={showValue}
          subLabel={item.subLabel}
          subClassName={item.subClassName}
        />
      ))}
    </div>
  );
}
