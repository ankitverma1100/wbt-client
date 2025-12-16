/* eslint-disable @typescript-eslint/no-explicit-any */

import "./style.scss";
import "./styleNew.scss";
import TvSection from "./TvSection";
import Bookmaker from "./Bookmaker";
import Session from "./Session";
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
import MoreEvent from "./MoreEvent";
import BetplaceMobNew from "./BetplaceMobNew";
import Marquee from "react-fast-marquee";
import {
  useFancyMinMaxQuery,
  useMarketMinMaxQuery,
} from "../../store/service/helperServices";

const GameDetails = () => {
  const [showFull, setShowFull] = useState(false);
  const [show, setShow] = useState<boolean>(false);
  const [showMsg, setShowMsg] = useState<string>("");
  const [isModalOpen, setisModalOpen] = useState(false);
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
  const [timer, setTimer] = useState<number>(0);
  const [showTv, setShowTv] = useState(false);
  const { id } = useParams() as { id: string };
  const { data: oddsData } = useOddsDataQuery(id, { pollingInterval: 1000 });
  const { data: oddsPnl } = useGetOddsPnlQuery(
    { matchId: id ?? "" },
    { pollingInterval: 1000 }
  );
  const [trigger, { data: betplaceData, isLoading }] = useBetPlacedMutation();
  const { data: userIp } = useGetIpfyQuery();

  const { data: marketMinMax } = useMarketMinMaxQuery(id, {
    pollingInterval: 5000,
  });

  const { data: fancyMinMax } = useFancyMinMaxQuery(id, {
    pollingInterval: 5000,
  });

  const amountInputRef = useRef<HTMLInputElement>(null);

  const focusAmountInput = () => {
    if (amountInputRef.current) {
      amountInputRef.current.focus();
    }
  };

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
    if (!id || !userIp) return;
    if (odds === 0) {
      return;
    }
    setisModalOpen(true);
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
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        browser: "Chrome",
        device: "Macintosh",
        deviceType: "desktop",
        os: "Windows",
        os_version: "windows-10",
        browser_version: "108.0.0.0",
        orientation: "landscape",
      },
    }));
    setTimer(8);
  };

  useEffect(() => {
    if (betplaceData) {
      if (betplaceData.status) {
        setShowMsg("Bet Successful");
        setisModalOpen(false);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
        setTimer(0);
        setPlaceBetData({} as any);
        if (amountInputRef.current) {
          amountInputRef.current.value = "";
        }
      } else {
        setShowMsg(betplaceData.message || "Bet Failed");
        setShow(true);
        setisModalOpen(false);
        setTimeout(() => {
          setShow(false);
        }, 3000);
        setPlaceBetData({} as any);
        if (amountInputRef.current) {
          amountInputRef.current.value = "";
        }
      }
    }
  }, [betplaceData]);

  return (
    <div className="page-body game-details-page">
      <Marquee
        style={{
          minHeight: 30,
          fontSize: "14px",
          color: "red",
          fontWeight: 900,
          textTransform: "uppercase",
        }}
        speed={50}>
        {oddsData?.Bookmaker[0]?.display_message !== "null" &&
          oddsData?.Bookmaker[0]?.display_message}
      </Marquee>

      <div className="gradient-wrap tv-header" id="menu">
        <div
          className="active abc"
          onClick={() => setShowTv(!showTv)}>
          <a
            className="active text-center"
            style={{ background: "none", border: "none" }}>
            {" "}
            TV
          </a>
        </div>
        <div className="toggle-btn">
          <span
            className="switch"
            onClick={(e) => e.currentTarget.classList.toggle("active")}
          />
          <p onClick={() => setShowFull(!showFull)}>FS</p>
        </div>
      </div>
      <form name="BetPlayer" method="post" action="">
        <div className="d-none1 d-sm-none1 d-md-block1 d-lg-block1">
          <TvSection showTv={showTv} showFull={showFull} />

         <div className="game-content">
           <Bookmaker
            oddsData={oddsData?.Bookmaker?.filter(
              (item: { t: string }) => item?.t?.toLowerCase() === "bookmaker"
            )}
            handleBetData={handleBetData}
            focusAmountInput={focusAmountInput}
            oddsPnl={oddsPnl?.data}
            minMax={marketMinMax?.data}
          />
          <Session
            oddsData={oddsData?.Fancy2}
            handleBetData={handleBetData}
            focusAmountInput={focusAmountInput}
            minMax={fancyMinMax?.data}
          />
          {/*           
            <BetplaceMob
              amountInputRef={amountInputRef}
              placeBetData={placeBetData}
              setPlaceBetData={setPlaceBetData}
              timer={timer}
              setTimer={setTimer}
              trigger={trigger}
              isLoading={isLoading}
              setisModalOpen={setisModalOpen}
              isModalOpen={isModalOpen}
            /> */}
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
          <MoreEvent />
         </div>
        </div>
      </form>


      <Modal
        centered
        className="modal_place"
        closeIcon={false}
        open={show}
        footer={false}>
        <div
          className="modal-content"
          style={{
            border: "none ",
            borderRadius: 0,
            background: "#d3cece",
            boxShadow: "0px 0px 5px #4c4c4c",
          }}>
          <div className="modal-body text-center ">
            <h3
              className="text-bold mb-4"
              style={{ fontSize: 18, color: "green" }}>
              {showMsg}
            </h3>
            <a
              onClick={() => {
                setShow(false);
                setTimer(0);
              }}
              className="btn btn-light text-danger"
              data-dismiss="modal"
              style={{ borderRadius: 20, fontSize: 14 }}>
              OK
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GameDetails;
