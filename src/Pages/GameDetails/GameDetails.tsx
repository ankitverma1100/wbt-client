/* eslint-disable @typescript-eslint/no-explicit-any */

import "./style.scss";
import "./styleNew.scss";
import TvSection from "./TvSection";
import Bookmaker from "./Bookmaker";
import Session from "./Session";
import Toss from "./Toss";
import {
  useGetIpfyQuery,
  useOddsDataQuery,
} from "../../store/service/odds/oddsServices";
import { useParams } from "react-router-dom";
import MatchBets from "./MatchBets";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import {
  useBetPlacedMutation,
  useGetOddsPnlQuery,
} from "../../store/service/userServices/userServices";
import { Modal } from "antd";
import BetplaceMobNew from "./BetplaceMobNew";
import Marquee from "react-fast-marquee";
import {
  useFancyMinMaxQuery,
  useMarketMinMaxQuery,
} from "../../store/service/helperServices";

const GameDetails = () => {
  const { id } = useParams() as { id: string };

  /* ================= STATE ================= */
  const [showFull, setShowFull] = useState(false);
  const [showTv, setShowTv] = useState(false);
  const [showAmount, setShowAmount] = useState(false); // 🔴 SWITCH LINK
  const [showMsg, setShowMsg] = useState("");
  const [show, setShow] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [timer, setTimer] = useState<number>(0);

  const [placeBetData, setPlaceBetData] = useState<any>({
    isFancy: false,
    isBack: false,
    odds: 0,
    stake: 0,
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
  const { data: oddsData } = useOddsDataQuery(id, { pollingInterval: 1000 });
  const { data: oddsPnl } = useGetOddsPnlQuery(
    { matchId: id ?? "" },
    { pollingInterval: 1000 }
  );

  const { data: userIp } = useGetIpfyQuery();
  const { data: marketMinMax } = useMarketMinMaxQuery(id, { pollingInterval: 5000 });
  const { data: fancyMinMax } = useFancyMinMaxQuery(id, { pollingInterval: 5000 });

  const [trigger, { data: betplaceData, isLoading }] =
    useBetPlacedMutation();

  /* ================= HELPERS ================= */
  const focusAmountInput = () => {
    amountInputRef.current?.focus();
  };

  /* ================= AUTO TOSS ================= */
  const bookmakerData = oddsData?.Bookmaker || [];

  const marketMap = bookmakerData.reduce((acc: any, item: any) => {
    if (!item?.mid) return acc;
    if (!acc[item.mid]) acc[item.mid] = [];
    acc[item.mid].push(item);
    return acc;
  }, {});

  const tossMarket = Object.values(marketMap).find(
    (market: any) => market.length === 2
  );

  const bookmakerMarket = tossMarket
    ? bookmakerData.filter((item: any) => item.mid !== tossMarket[0].mid)
    : bookmakerData;

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

    setisModalOpen(true);
    setShowAmount(true); // ✅ AUTO SHOW AMOUNT BAR
    focusAmountInput();

    setPlaceBetData((prev: any) => ({
      ...prev,
      isFancy,
      isBack,
      odds,
      marketName,
      selectionId: !isFancy ? selectionId : 0,
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

    setTimer(8);
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
    setShowAmount(false); // ✅ AUTO HIDE AFTER BET

    setTimeout(() => setShow(false), 3000);
  }, [betplaceData]);

  /* ================= RENDER ================= */
  return (
    <div className="page-body game-details-page">
      <Marquee speed={50} style={{ minHeight: 30, color: "red", fontWeight: 900 }}>
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
            onClick={() => setShowAmount((prev) => !prev)}
          />
          <p onClick={() => setShowFull(!showFull)}>FS</p>
        </div>
      </div>

      <TvSection showTv={showTv} showFull={showFull} />

      <div className="game-content">
        <Bookmaker
          oddsData={bookmakerMarket}
          handleBetData={handleBetData}
          focusAmountInput={focusAmountInput}
          oddsPnl={oddsPnl?.data}
          minMax={marketMinMax?.data}
        />

        {tossMarket && (
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
            <span className="amount-label">AMOUNT:</span>

            <div className="amount-input-wrap">
              <input
                type="number"
                placeholder="Enter a number"
                className="amount-input"
              />
              <span className="amount-arrows">▼</span>
            </div>

            <div className="amount-multiplier">8</div>

            <button className="amount-done">DONE</button>
          </div>

        )}
        <br />
        <BetplaceMobNew
          placeBetData={placeBetData}
          setPlaceBetData={setPlaceBetData}
          timer={timer}
          setTimer={setTimer}
          trigger={trigger}
          isLoading={isLoading}
          setisModalOpen={setisModalOpen}
          isModalOpen={isModalOpen}
          betplaceData={betplaceData}
        />

        <MatchBets />
      </div>

      <Modal centered open={show} footer={false} closeIcon={false}>
        <h3 style={{ color: "green", textAlign: "center" }}>{showMsg}</h3>
      </Modal>
    </div>
  );
};

export default GameDetails;
