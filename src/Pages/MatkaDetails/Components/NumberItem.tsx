interface Props {
  value: string;
  onClick: (num: string) => void;
}

export default function NumberItem({ value, onClick }: Props) {
  return (
    <div className="number-item">
      <button onClick={() => onClick(value)}>{value}</button>
      <span>0</span>
    </div>
  );
}
