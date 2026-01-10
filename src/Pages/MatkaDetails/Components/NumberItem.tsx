interface Props {
  value: string;
  onClick: (num: string) => void;
  showValue?: boolean;
}

export default function NumberItem({
  value,
  onClick,
  showValue = false,
}: Props) {
  return (
    <div className="number-item">
      <button onClick={() => onClick(value)}>{value}</button>
      {showValue && <span>0</span>}
    </div>
  );
}
