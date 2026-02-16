import { useEffect, useState } from "react";
import {
    useGetBetListLedgerMutation,
    useGetLedgerDetailsMutation,
} from "../../store/service/userServices/userServices";
import { Link } from "react-router-dom";
import moment from "moment";
import { Modal } from "antd";
import ModalsContent from "./ModalsContent";

import "./style.scss";

const Ledger = () => {
    const [casinoDate, setCasinoDate] = useState("");
    const [sportName, setSportName] = useState("");
    const [open, setOpen] = useState(false);
    const [showMatchBet, setShowMatchBet] = useState(false);
    const [casinoDataShow, setCasinoDataShow] = useState(false);

    const [trigger, { data: ledgerData }] = useGetLedgerDetailsMutation();
    const [getCasinoLedger, { data: casinoLedger }] =
        useGetBetListLedgerMutation();

    useEffect(() => {
        trigger({});
    }, []);

    const handleClose = () => setOpen(false);

    const handleOpen = (
        matchId: number | undefined,
        name: string,
        date: string,
        wonBy: string
    ) => {
        setSportName(name);
        setCasinoDate(date);
        if (matchId !== 0) {
            setOpen(true);
            setCasinoDataShow(true);
            getCasinoLedger({
                date: moment(date, "DD.MM.YYYY").format("YYYY-MM-DD"),
            });
        }
    };

    return (
        <div className="ledger-page">
            {/* Header */}
            <div className="ledger-header">
                <h2>MY LEDGER</h2>
            </div>

            {/* Summary */}
            <div className="ledger-summary">
                {(() => {
                    const lena = (ledgerData?.data || []).reduce(
                        (sum, item) => sum + (Number(item?.won) || 0),
                        0
                    );
                    const dena = (ledgerData?.data || []).reduce(
                        (sum, item) => sum + (Number(item?.lost) || 0),
                        0
                    );
                    const balance = lena - dena;
                    const isLena = balance >= 0;

                    return (
                        <>
                            <p className="credit">LENA : {lena.toFixed(2)}</p>
                            <p className="debit">DENA : - {dena.toFixed(2)}</p>
                            <p className={isLena ? "credit" : "debit"}>
                                BALANCE {isLena ? "LENA" : "DENA"} :{" "}
                                {balance.toFixed(2)}
                            </p>
                        </>
                    );
                })()}
            </div>

            {/* Table */}
            <div className="ledger-table-card">
                <div className="ledger-table-scroll">
                    <table className="ledger-table">
                        {/* ===== EQUAL COLUMN WIDTH SETUP (SAME AS STATEMENT) ===== */}
                        <colgroup>
                            <col className="ledger-big-th" />   {/* DESCRIPTION */}
                            <col className="ledger-big-th" />   {/* WON BY */}

                            <col className="ledger-small-th" /> {/* WIN */}
                            <col className="ledger-small-th" /> {/* LOSS */}
                            <col className="ledger-small-th" /> {/* HISAAB */}
                        </colgroup>

                        <thead>
                            <tr>
                                <th className="text-start">DESCRIPTION</th>
                                <th className="text-start">WON BY</th>
                                <th className="text-center">WIN</th>
                                <th className="text-center">LOSS</th>
                                <th className="text-center">HISAAB</th>
                            </tr>
                        </thead>

                        <tbody>
                            {ledgerData?.data?.length ? (
                                ledgerData.data.map((items) => (
                                    <tr key={items.matchId}>
                                        <td className="text-start">
                                            <Link
                                                onClick={() =>
                                                    items?.wonBy === "Ledger" &&
                                                    handleOpen(
                                                        items?.matchId,
                                                        items?.remark,
                                                        items?.date,
                                                        items?.wonBy
                                                    )
                                                }
                                                to={
                                                    items?.wonBy === "Ledger"
                                                        ? "#"
                                                        : `/main/ledgerDetails/${items?.matchId}`
                                                }
                                            >
                                                {items?.remark} (
                                                {moment(items?.date, [
                                                    "DD.MM.YYYY",
                                                    "YYYY-MM-DD",
                                                ]).format("DD-MM-YYYY")}
                                                )
                                            </Link>
                                        </td>

                                        <td className="text-start amount bold text-center">{items?.wonBy}</td>

                                        <td className="text-center amount credit">{items?.won}</td>

                                        <td className="text-center amount debit">{items?.lost}</td>

                                        <td
                                            className={`text-center amount ${items?.balance >= 0 ? "credit" : "debit"
                                                }`}
                                        >
                                            {Math.abs(Number(items?.balance) || 0).toFixed(2)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="no-data">
                                    <td colSpan={5}>NO DATA AVAILABLE</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>

            {/* Footer */}
            <div className="ledger-footer">
                <Link to="/main/dashboard">Back To Main Menu</Link>
            </div>

            {/* Modal */}
            <Modal
                className="casino_leder_modal"
                open={open}
                footer={null}
                onCancel={() => {
                    if (showMatchBet) {
                        setShowMatchBet(false);
                    } else {
                        setOpen(false);
                    }
                }}
                title={`Casino Bets Records ${moment(casinoDate, "DD.MM.YYYY").format(
                    "YYYY-MM-DD"
                )}`}
            >
                <ModalsContent
                    sportName={sportName}
                    handleClose={handleClose}
                    casinoData={casinoLedger?.data}
                    casinoDataShow={casinoDataShow}
                    casinoDate={casinoDate}
                    setShowMatchBet={setShowMatchBet}
                    showMatchBet={showMatchBet}
                />
            </Modal>
        </div>
    );
};

export default Ledger;
