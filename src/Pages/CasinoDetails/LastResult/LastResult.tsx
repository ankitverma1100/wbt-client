import { useParams } from "react-router-dom";
import { useCasinoResultQuery } from "../../../store/service/casino/casinoServices";
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
                    return (
                        <div
                            key={item.mid}
                            className={`tp-result-circle ${resultInfo?.label?.toLowerCase() === 'a' ? 'player-a' : resultInfo?.label?.toLowerCase() === 'b' ? 'player-b' : ''}`}
                            style={!['a', 'b'].includes(resultInfo?.label?.toLowerCase()) ? { backgroundColor: resultInfo?.color } : {}}
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
                    {/* Rows would be dynamically populated here */}
                </tbody>
            </table>
        </div>
    );
};

export default LastResult;
