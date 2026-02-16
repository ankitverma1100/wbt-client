interface Props {
  value: string;
  onClick: (num: string) => void;
  showValue?: boolean;
  subLabel?: string | number;
  subClassName?: string;
}

export default function NumberItem({
  value,
  onClick,
  showValue = false,
  subLabel,
  subClassName,
}: Props) {
  return (
    <div className="number-item">
      <button onClick={() => onClick(value)}>{value}</button>
      {(showValue || subLabel !== undefined) && (
        <span className={subClassName}>{subLabel ?? 0}</span>
      )}
    </div>
  );
}
