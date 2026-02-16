import { Card } from "antd";
import { LockFilled } from "@ant-design/icons";
import "./teenpatti.scss";

interface TeenProps {
    t1: any;
    odds: any;
    setBetState: any;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    scrollToBet: React.RefObject<HTMLDivElement | null>;
    setTimer: React.Dispatch<React.SetStateAction<number>>;
    setIsBetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Teen = ({
    odds,
    setBetState,
    setOpen,
    scrollToBet,
    setTimer,
    setIsBetModal,
}: TeenProps) => {
    const t2 = odds?.t2 || [];

    const isLocked = (item: any) =>
        item?.gstatus === "0" || item?.gstatus === false || item?.gstatus === "SUSPENDED";

    const handleClick = (t2: {
        nation: any;
        rate: any;
        b1: any;
        mid: any;
        sid: any;
    }, label: "A" | "B") => {
        setBetState &&
            setBetState((prev: any) => ({
                ...prev,
                nation: t2?.nation,
                casinoName: 2,
                isBack: true,
                odds: Number(t2?.rate),
                selectionId: t2?.sid,
                colorName: "back",
                selectionName: label,
            }));
        scrollToBet?.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        setOpen(true);
        setIsBetModal(true);
        setTimer(10);
    };

    const getName = (item: any) => (item?.nation || item?.nat || "").toString();
    const findBy = (keywords: string[], fallbackIndex: number) => {
        const found = t2.find((item: any) =>
            keywords.some((key) => getName(item).toLowerCase().includes(key))
        );
        return found ?? t2?.[fallbackIndex];
    };

    const playerA = findBy(["player a"], 0);
    const playerB = findBy(["player b"], 2);

    return (
        <div className="teen-patti-container">
            <Card className="tp-card mb-0">
                {/* Main Betting Table */}
                <div className="tp-main-header">
                    <div className="header-left" />
                    <div className="header-right">BACK</div>
                </div>

                {/* Player A Row */}
                <div className="tp-row">
                    <div className="tp-runner-info">
                        <div className="tp-runner-name">PLAYER A</div>
                        <div className={`tp-pnl ${playerA?.pnl > 0 ? 'positive' : 'negative'}`}>
                            {playerA?.pnl || '0.00'}
                        </div>
                    </div>
                    <div
                        className="tp-bet-cell"
                        onClick={() => playerA && !isLocked(playerA) && handleClick(playerA, "A")}
                    >
                        {isLocked(playerA) ? (
                            <div className="tp-lock">
                                <LockFilled />
                            </div>
                        ) : (
                            <div className="tp-rate">{playerA?.rate || '0.97'}</div>
                        )}
                    </div>
                </div>

                {/* Player B Row */}
                <div className="tp-row">
                    <div className="tp-runner-info">
                        <div className="tp-runner-name">PLAYER B</div>
                        <div className={`tp-pnl ${playerB?.pnl > 0 ? 'positive' : 'negative'}`}>
                            {playerB?.pnl || '0.00'}
                        </div>
                    </div>
                    <div
                        className="tp-bet-cell"
                        onClick={() => playerB && !isLocked(playerB) && handleClick(playerB, "B")}
                    >
                        {isLocked(playerB) ? (
                            <div className="tp-lock">
                                <LockFilled />
                            </div>
                        ) : (
                            <div className="tp-rate">{playerB?.rate || '0.97'}</div>
                        )}
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default Teen;
