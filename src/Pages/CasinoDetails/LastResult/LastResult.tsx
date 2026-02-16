import { useParams } from "react-router-dom";
import { useCasinoResultQuery } from "../../../store/service/casino/casinoServices";
import { useGetCasinoMyBetQuery } from "../../../store/service/userServices/userServices";
import { LetterAndColorById, titleById } from "../Constant";
import { useState } from "react";
import ResultModalContainer from "./ResultModalContainer";
import { Modal } from "antd";
import "../Teen/teenpatti.scss";

interface Props {
    matchId: any;
    casinoName: any;
}

const LastResult = ({ matchId, casinoName }: Props) => {
    const [first, setFirst] = useState("");
    const [openMod, setOpenMod] = useState(false);
    const { id } = useParams();
    const { data: resultList } = useCasinoResultQuery(casinoName, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 5000,
    });
    const { data: openBets } = useGetCasinoMyBetQuery(
        { tableId: id ?? "", isGameCompleted: false, sportId: 5015 },
        { pollingInterval: 1000, refetchOnMountOrArgChange: true }
    );

    const handleClick = (val: string) => {
        setFirst(val);
        if (val) {
            setOpenMod(true);
        }
    };

    if (!id) return null;

    return (
        <div className="teen-patti-container">
            <Modal
                title={`${(titleById as any)[id]} Result`}
                onCancel={() => setOpenMod(false)}
                open={openMod}
                className="betModals123"
                footer={false}>
                <ResultModalContainer
                    setOpen={setOpenMod}
                    open={openMod}
                    tableId={id}
                    mid={first}
                />
            </Modal>

            <div className="tp-header">
                <h3 className="tp-header-title">LAST RESULT</h3>
                <span className="tp-view-all" onClick={() => { }}>VIEW ALL</span>
            </div>

            <div className="tp-result-container mb-0">
                {resultList?.map((item: any) => {
                    const resultInfo = (LetterAndColorById as any)[id]?.[item.result];
                    const label = resultInfo?.label?.toLowerCase();
                    const resultClass =
                        label === "a"
                            ? "player-a"
                            : label === "b"
                            ? "player-b"
                            : label === "c"
                            ? "result-c"
                            : label === "d"
                            ? "result-d"
                            : label === "t"
                            ? "result-t"
                            : label === "tie"
                            ? "result-tie"
                            : label === "l"
                            ? "result-l"
                            : label === "h"
                            ? "result-h"
                            : "";
                    const shouldInline = !["a", "b", "c", "d", "t", "tie", "l", "h"].includes(label);
                    return (
                        <div
                            key={item.mid}
                            className={`tp-result-circle ${resultClass}`}
                            style={shouldInline ? { backgroundColor: resultInfo?.color } : {}}
                            onClick={() => handleClick(item.mid)}>
                            {resultInfo?.label}
                        </div>
                    );
                })}
            </div>

            {/* Open Bets Section */}
            <div className="tp-header center-title">
                <h3 className="tp-header-title">OPEN BETS</h3>
            </div>
            <table className="tp-open-bets-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>RUNNER NAME</th>
                        <th>BET PRICE</th>
                        <th>BET VALUE</th>
                        <th>BET AMOUNT</th>
                        <th>BET PROFIT</th>
                        <th>BET LOSS</th>
                        <th>BET STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {(openBets?.data || []).map((items: any, index: number) => {
                        const price = items?.odds ?? items?.rate ?? 0;
                        const amount = items?.stake ?? items?.amount ?? 0;
                        const betValue = Number(price) * Number(amount);
                        const pnl = Number(items?.pnl ?? items?.netPnl ?? 0);
                        const profit = price * amount - amount;
                        const loss = pnl < 0 ? Math.abs(pnl) : 0;
                        return (
                            <tr
                                key={items?.id || items?.selectionId || index}
                                className="open-bets-row"
                            >
                                <td>{index + 1}</td>
                                <td>{items?.selectionName || items?.nation || "-"}</td>
                                <td>{price}</td>
                                <td>{items?.selectionName || items?.nation || "-"}</td>
                                <td>{amount}</td>
                                <td>{profit}</td>
                                <td>{amount}</td>
                                <td>OPEN</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default LastResult;
