import NumberItem from "./NumberItem";
import type { NumberGridItem } from "./NumberGrid";

interface Props {
  title: string;
  onSelectNumber: (num: string) => void;
  items?: NumberGridItem[];
}

export default function HarupSection({
  title,
  onSelectNumber,
  items,
}: Props) {
  const sectionItems =
    items && items.length > 0
      ? items
      : Array.from({ length: 10 }, (_, i) => ({
          label: String(i),
        }));

  return (
    <div className="harup-section">
      <h3 className="harup-title">{title}</h3>
      <div className="number-grid">
        {sectionItems.map((item) => (
          <NumberItem
            key={item.label}
            value={item.label}
            onClick={onSelectNumber}
            showValue
            subLabel={item.subLabel}
            subClassName={item.subClassName}
          />
        ))}
      </div>
    </div>
  );
}
