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

    const handleClick = (t2: {
        nation: any;
        rate: any;
        b1: any;
        mid: any;
        sid: any;
    }) => {
        setBetState &&
            setBetState((prev: any) => ({
                ...prev,
                nation: t2?.nation,
                casinoName: 2,
                isBack: true,
                odds: Number(t2?.rate),
                selectionId: t2?.sid,
                colorName: "back",
                selectionName: t2?.nation?.includes("A") ? "A" : t2?.nation?.includes("B") ? "B" : t2?.nation,
            }));
        scrollToBet?.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        setOpen(true);
        setIsBetModal(true);
        setTimer(10);
    };

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
                        <div className="tp-runner-name">{t2[0]?.nation || 'PLAYER A'}</div>
                        <div className={`tp-pnl ${t2?.[0]?.pnl > 0 ? 'positive' : 'negative'}`}>
                            {t2?.[0]?.pnl || '0.00'}
                        </div>
                    </div>
                    <div className="tp-bet-cell" onClick={() => handleClick(t2?.[0])}>
                        {!t2[0]?.gstatus ? (
                            <div className="tp-lock">
                                <LockFilled />
                            </div>
                        ) : (
                            <div className="tp-rate">{t2[0]?.rate || '0.97'}</div>
                        )}
                    </div>
                </div>

                {/* Player B Row */}
                <div className="tp-row">
                    <div className="tp-runner-info">
                        <div className="tp-runner-name">{t2[1]?.nation || 'PLAYER B'}</div>
                        <div className={`tp-pnl ${t2?.[1]?.pnl > 0 ? 'positive' : 'negative'}`}>
                            {t2?.[1]?.pnl || '0.00'}
                        </div>
                    </div>
                    <div className="tp-bet-cell" onClick={() => handleClick(t2?.[1])}>
                        {!t2[1]?.gstatus ? (
                            <div className="tp-lock">
                                <LockFilled />
                            </div>
                        ) : (
                            <div className="tp-rate">{t2[1]?.rate || '0.97'}</div>
                        )}
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default Teen;

