interface Props {
  title: string;
  time: string;
}

export default function EventHeader({ title, time }: Props) {
  return (
    <div className="event-header">
      <div className="title">
        <span className="dot" />
        {title}
      </div>
      <div className="time">{time}</div>
    </div>
  );
}
