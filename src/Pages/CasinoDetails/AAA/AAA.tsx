import { Col, Row } from "antd";
import { LockOutlined } from "@ant-design/icons";

interface AAAProps {
  t1: any;
  odds: any;
  setBetState: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToBet: React.RefObject<HTMLDivElement | null>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setIsBetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AAA = ({
  t1,
  odds,
  setBetState,
  setOpen,
  scrollToBet,
  setTimer,
  setIsBetModal,
}: AAAProps) => {
  const t2 = odds?.t2 || [];

  const getName = (item: any) => (item?.nation || item?.nat || "").toString();

  const isLocked = (item: any) =>
    item?.gstatus !== "ACTIVE" && item?.gstatus !== true;

  const findBy = (keywords: string[], fallbackIndex: number) => {
    const found = t2.find((item: any) =>
      keywords.some((key) => getName(item).toLowerCase().includes(key))
    );
    return found ?? t2?.[fallbackIndex];
  };

  const getRank = (nation?: string) => {
    if (!nation) return "";
    const cleaned = nation
      .replace(/card/i, "")
      .replace(/[^A-Za-z0-9]/g, " ")
      .trim();
    const token = cleaned.split(/\s+/).pop() || "";
    const match = token.match(/^(A|K|Q|J|10|[2-9])$/i);
    if (match) return match[0].toUpperCase();
    const alt = nation.match(/(A|K|Q|J|10|[2-9])/i);
    return alt ? alt[0].toUpperCase() : "";
  };

  const handleClick = (t2Data: any, isBack: boolean) => {
    setBetState &&
      setBetState((prev: any) => ({
        ...prev,
        nation: t2Data?.nation,
        selectionName: getRank(t2Data?.nation) || t2Data?.nation,
        casinoName: 2,
        isBack,
        odds: isBack ? Number(t2Data?.b1) : Number(t2Data?.l1),
        selectionId: t2Data?.sid,
        colorName: "back",
        matchId: "56",
      }));
    setOpen(true);
    scrollToBet?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setIsBetModal(true);
    setTimer(10);
  };

  const amar = findBy(["amar"], 0);
  const akbar = findBy(["akbar"], 1);
  const anthony = findBy(["anthony"], 2);

  const even = findBy(["even"], 3);
  const odd = findBy(["odd"], 4);
  const red = findBy(["red", "heart", "diamond"], 5);
  const black = findBy(["black", "spade", "club"], 6);

  return (
    <>
      <div className="aaa-section">
        <div className="aaa-odds-row">
          {[amar, akbar, anthony].map((item, index) => (
            <div key={index} className="aaa-odds-cell">
              <div className="aaa-odds-label">
                {(getName(item) || "").toUpperCase()}
              </div>
              <button
                type="button"
                className={`aaa-odds-btn ${isLocked(item) ? "is-locked" : "is-unlocked"}`}
                onClick={() => item && !isLocked(item) && handleClick(item, true)}
                disabled={!item || isLocked(item)}>
                {item?.b1 ?? 0}
                {isLocked(item) && (
                  <span className="aaa-odds-lock">
                    <LockOutlined style={{ fontSize: 14, color: "white" }} />
                  </span>
                )}
              </button>
              <div
                className="aaa-odds-pnl"
                style={{ color: item?.pnl > 0 ? "green" : "red" }}>
                {item?.pnl ?? 0}
              </div>
            </div>
          ))}
        </div>

        <div className="lucky7-odds-row lucky7-secondary-row">
          {[even, odd, red, black].map((item, idx) => (
            <div key={idx} className="lucky7-odds-cell">
              <div className="lucky7-odds-rate">{item?.rate ?? 0}</div>
              <button
                type="button"
                className={`lucky7-odds-btn ${isLocked(item) ? "is-locked" : "is-unlocked"}`}
                onClick={() => item && !isLocked(item) && handleClick(item, true)}
                disabled={!item || isLocked(item)}>
                {getName(item).toUpperCase()}
                {isLocked(item) && (
                  <span className="lucky7-odds-lock">
                    <LockOutlined style={{ fontSize: 14, color: "white" }} />
                  </span>
                )}
              </button>
              <div
                className="lucky7-odds-pnl"
                style={{ color: item?.pnl > 0 ? "green" : "red" }}>
                {item?.pnl ?? 0}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AAA;
