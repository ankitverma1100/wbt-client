/* eslint-disable @typescript-eslint/no-explicit-any */

import "./style.scss";
import "./styleNew.scss";
import TvSection from "./TvSection";
import Bookmaker from "./Bookmaker";
import Session from "./Session";
import Toss from "./Toss";
import {useGetIpfyQuery, useOddsDataQuery,} from "../../store/service/odds/oddsServices";
import {useParams} from "react-router-dom";
import MatchBets from "./MatchBets";
import {useEffect, useRef, useState} from "react";
import moment from "moment";
import {useBetPlacedMutation, useGetOddsPnlQuery,} from "../../store/service/userServices/userServices";
import {Modal} from "antd";
import BetplaceMobNew from "./BetplaceMobNew";
import Marquee from "react-fast-marquee";
import {useFancyMinMaxQuery, useMarketMinMaxQuery,} from "../../store/service/helperServices";
import { toast } from "react-toastify";

const GameDetails = () => {
    const {id} = useParams() as { id: string };
    const SHOW_AMOUNT_KEY = "gameDetailsShowAmount";

    /* ================= STATE ================= */
    const initialShowAmount =
        typeof window !== "undefined" && localStorage.getItem(SHOW_AMOUNT_KEY) === "true";
    const [showFull, setShowFull] = useState(initialShowAmount);
    const [showTv, setShowTv] = useState(false);
    const [showAmount, setShowAmount] = useState(initialShowAmount); // 🔴 SWITCH LINK
    const showAmountRef = useRef(showAmount);
    const [showMsg, setShowMsg] = useState("");
    const [show, setShow] = useState(false); // reused as a generic "countdown active" flag
    const [isModalOpen, setisModalOpen] = useState(false);
    const [timer, setTimer] = useState<number>(8);

    const [placeBetData, setPlaceBetData] = useState<any>({
        isFancy: false,
        isBack: false,
        odds: 0,
        stake: 0,
        size: 0,
        marketName: "",
        selectionId: 0,
        priceValue: 0,
        placeTime: "",
        marketId: "",
        matchId: "",
        name: "",
        userIp: "",
        mode: "",
        deviceInfo: null,
    });

    const amountInputRef = useRef<HTMLInputElement>(null);

    /* ================= API ================= */
    const {data: oddsData} = useOddsDataQuery(id, {pollingInterval: 1000});
    const {data: oddsPnl} = useGetOddsPnlQuery(
        {matchId: id ?? ""},
        {pollingInterval: 1000}
    );

    const {data: userIp} = useGetIpfyQuery();
    const {data: marketMinMax} = useMarketMinMaxQuery(id, {pollingInterval: 5000});
    const {data: fancyMinMax} = useFancyMinMaxQuery(id, {pollingInterval: 5000});

    const [trigger, {data: betplaceData, isLoading}] =
        useBetPlacedMutation();

    /* ================= HELPERS ================= */
    const focusAmountInput = () => {
        amountInputRef.current?.focus();
    };

    const handleAmountChange = (value: string) => {
        setPlaceBetData((prev: any) => ({
            ...prev,
            stake: value,
        }));
    };

    const toggleFullAndAmount = () => {
        setShowFull((prev) => {
            const next = !prev;
            setShowAmount(next);
            showAmountRef.current = next;
            if (next) {
                setisModalOpen(false); // close modal when switching to FS flow
            }
            if (typeof window !== "undefined") {
                localStorage.setItem(SHOW_AMOUNT_KEY, String(next));
            }
            return next;
        });
    };

    /* ================= AUTO TOSS ================= */
    const bookmakerData = oddsData?.Bookmaker || [];
    const tossMarket =
        bookmakerData.filter((item: any) => (item?.t || "").toLowerCase() === "toss") || [];
    const bookmakerMarket =
        bookmakerData.filter((item: any) => (item?.t || "").toLowerCase() === "bookmaker") || [];

    /* ================= BET HANDLER ================= */
    const handleBetData = (
        isFancy: boolean,
        isBack: boolean,
        odds: number,
        marketName: string,
        selectionId: string,
        priceValue: number,
        marketId: string,
        name: string,
        mode: string,
        date: any
    ) => {
        if (!id || !userIp || odds === 0) return;

        const useAmountBar = showFull || showAmountRef.current || showAmount;
        const shouldOpenModal = !useAmountBar;

        if (useAmountBar) {
            setShowAmount(true); // ✅ ensure bar is visible in FS mode
            showAmountRef.current = true;
            if (typeof window !== "undefined") {
                localStorage.setItem(SHOW_AMOUNT_KEY, "true");
            }
            focusAmountInput(); // autofocus amount input in FS flow
        } else {
            setShowAmount(false);
            showAmountRef.current = false;
        }

        // Only show modal when amount bar is hidden; otherwise use amount bar flow
        setisModalOpen(shouldOpenModal);

        setPlaceBetData((prev: any) => ({
            ...prev,
            isFancy,
            isBack,
            odds,
            marketName,
            selectionId: !isFancy ? selectionId : 0,
            size: isFancy ? priceValue : 0,
            priceValue: isFancy ? priceValue : odds,
            marketId: isFancy ? selectionId : marketId,
            name,
            matchId: id,
            userIp: userIp?.ip,
            mode,
            placeTime: moment(date).format("YYYY-MM-DD HH:mm:ss.SSS"),
            deviceInfo: {
                browser: "Chrome",
                device: "Desktop",
                os: "Windows",
            },
        }));
    };

    /* ================= BET RESPONSE ================= */
    useEffect(() => {
        if (!betplaceData) return;

        setShowMsg(betplaceData.status ? "Bet Successful" : betplaceData.message);
        setShow(true);
        setisModalOpen(false);
        setTimer(0);
        setPlaceBetData({} as any);
        amountInputRef.current && (amountInputRef.current.value = "");

        setTimeout(() => setShow(false), 3000);
    }, [betplaceData]);

    useEffect(() => {
        if (showAmount) {
            setisModalOpen(false); // force modal closed when amount bar is active
        }
    }, [showAmount]);

    // Centralized timer: always runs 8→0→8; closes modal/unfocus amount at rollover
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    if (showAmount || isModalOpen) {
                        setPlaceBetData({} as any);
                        amountInputRef.current?.blur();
                        setisModalOpen(false);
                    }
                    return 8;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [showAmount, isModalOpen]);

    const submitFromAmountBar = async () => {
        if (!placeBetData?.stake || Number(placeBetData?.stake) <= 0) {
            toast.error("Enter a valid amount.");
            focusAmountInput();
            return;
        }

        try {
            await trigger(placeBetData);
        } catch (error) {
            toast.error("Bet placing failed, try again!");
        }
    };

    /* ================= RENDER ================= */
    return (
        <div className="page-body game-details-page">
            <Marquee speed={50} style={{minHeight: 30, color: "red", fontWeight: 900}}>
                {oddsData?.Bookmaker?.[0]?.display_message !== "null" &&
                    oddsData?.Bookmaker?.[0]?.display_message}
            </Marquee>

            {/* HEADER */}
            <div className="gradient-wrap tv-header">
                <div onClick={() => setShowTv(!showTv)}>
                    <a>TV</a>
                </div>

                <div className="toggle-btn">
          <span
              className={`switch ${showAmount ? "active" : ""}`}
              onClick={toggleFullAndAmount}
          />
                    <p onClick={toggleFullAndAmount}>FS</p>
                </div>
            </div>

            <TvSection showTv={showTv} showFull={showFull}/>

            <div className="game-content">
                <Bookmaker
                    oddsData={bookmakerMarket}
                    handleBetData={handleBetData}
                    focusAmountInput={focusAmountInput}
                    oddsPnl={oddsPnl?.data}
                    minMax={marketMinMax?.data}
                />

                {tossMarket && tossMarket.length > 0 && (
                    <Toss
                        oddsData={tossMarket}
                        handleBetData={handleBetData}
                        focusAmountInput={focusAmountInput}
                        oddsPnl={oddsPnl?.data}
                    />
                )}

                <Session
                    oddsData={oddsData?.Fancy2}
                    handleBetData={handleBetData}
                    focusAmountInput={focusAmountInput}
                    minMax={fancyMinMax?.data}
                />

                {/* 🔴 AMOUNT BAR */}
                {showAmount && (
                    <div className="amount-bar">
                        {!!placeBetData?.name && (
                            <div
                                className={`amount-selected-row ${
                                    placeBetData?.mode?.toLowerCase() === "lagai" ||
                                    placeBetData?.mode?.toLowerCase() === "yes"
                                        ? "amount-selected-row--yes"
                                        : placeBetData?.mode?.toLowerCase() === "khai" ||
                                          placeBetData?.mode?.toLowerCase() === "no"
                                        ? "amount-selected-row--no"
                                        : ""
                                }`}
                            >
                                <span className="amount-selected-name text-white">
                                    {placeBetData?.name}
                                </span>
                                <span className="amount-selected-values">
                                    <span className="amount-selected-odds">
                                        {placeBetData?.odds ?? 0}
                                    </span>
                                    <span className="amount-selected-size">
                                        {placeBetData?.priceValue ?? 0}
                                    </span>
                                </span>
                            </div>
                        )}
                        <span className="amount-label">AMOUNT:</span>

                        <div className="amount-input-wrap">
                            <input
                                type="number"
                                placeholder="Enter a number"
                                className="amount-input"
                                value={placeBetData?.stake ?? ""}
                                onChange={(e) => handleAmountChange(e.target.value)}
                                ref={amountInputRef}
                            />
                            <span className="amount-arrows">▼</span>
                        </div>

                        <div className="amount-multiplier">{timer > 0 ? timer : 0}</div>

                        <button className="amount-done" onClick={submitFromAmountBar}>DONE</button>
                    </div>

                )}
                <br/>
                <BetplaceMobNew
                    placeBetData={placeBetData}
                    setPlaceBetData={setPlaceBetData}
                    timer={timer}
                    setTimer={setTimer}
                    trigger={trigger}
                    isLoading={isLoading}
                    setisModalOpen={setisModalOpen}
                    isModalOpen={isModalOpen && !showFull && !showAmount}
                    betplaceData={betplaceData}
                />

                <MatchBets/>
            </div>

            <Modal
                centered
                open={show}
                footer={false}
                onCancel={() => setShow(false)}
                className="bet-placed-modal"
                closeIcon={<span className="bet-placed-close">×</span>}
                title={null}
            >
                <div className="bet-placed-header">PLACE YOUR BET</div>
                <div className="bet-placed-body">
                    <div className={`bet-placed-icon ${betplaceData?.status ? "success" : "error"}`}>
                        <svg viewBox="0 0 24 24" focusable="false" width="1em" height="1em" fill="none" aria-hidden="true">
                            <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="bet-placed-message">
                        {betplaceData?.status ? "BET PLACED SUCCESSFULLY" : showMsg}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default GameDetails;
