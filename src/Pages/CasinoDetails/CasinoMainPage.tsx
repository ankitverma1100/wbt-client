import { tableIdtoUrl } from "./Constant";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import "./casino.scss";
import { useOdds } from "./UseOdds";
import CasinoHead from "./CasinoHead/CasinoHead";
import { Card, Col, Modal, Row } from "antd";
import VideoSection from "./VideoSection/VideoSection";
import Lucky7 from "./Lucky7/Lucky7";
import LastResult from "./LastResult/LastResult";
import AAA from "./AAA/AAA";
import Teen from "./Teen/Teen";
import CasinoBet from "./CasinoBet/CasinoBet";
import DT20 from "./DT20/DT20";
import MybetCasino from "./MybetCasino/MybetCasino";
import AndarBhar from "./AndarBhar/AndarBhar";
import AllBets from "./AllBets";
import { useGetCasinoMyBetQuery } from "../../store/service/userServices/userServices";
import TeenOneDay from "./TeenOneDay/TeenOneDay";
import DT2 from "./DT2/DT2";

const CasinoMainPage = () => {
  const betSectionRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();
  if (!id) return null;
  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  const pTime = moment(curr).format("YYYY-MM-DD HH:mm:ss.SSS");
  const [betState, setBetState] = useState({
    nation: "",
    casinoName: 0,
    isBack: true,
    odds: null,
    marketId: "",
    placeTime: pTime,
    selectionId: null,
    colorName: "",
    stake: "",
    matchId: id,
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
  });

  const { data: betList, refetch } = useGetCasinoMyBetQuery(
    { tableId: id ?? "", isGameCompleted: true, sportId: 5015 },
    { refetchOnMountOrArgChange: true }
  );

  const { odds } = useOdds(tableIdtoUrl[id as keyof typeof tableIdtoUrl]);
  const t1 = odds?.t1?.[0];

  useEffect(() => {
    setBetState((prev) => ({
      ...prev,
      marketId: t1?.mid,
    }));
  }, [t1?.mid]);

  if (odds === null) {
    return;
  }

  const showModal = () => {
    setIsModalOpen(true);
    refetch();
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Row justify={"center"} className="gx-mt-2 gx-mb-2 main_casino_row">
        <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
          <CasinoHead t1={t1} />
          <VideoSection
            t3={odds && (odds as any)?.t3}
            t1={odds && (odds as any)?.t1?.[0]}
          />
          {id === "53" && (
            <Lucky7
              t1={t1}
              odds={odds}
              setBetState={setBetState}
              setOpen={setOpen}
              scrollToBet={betSectionRef}
              setTimer={setTimer}
            />
          )}
          {id === "56" && (
            <AAA
              t1={t1}
              odds={odds}
              setBetState={setBetState}
              setOpen={setOpen}
              scrollToBet={betSectionRef}
              setTimer={setTimer}
            />
          )}
          {id === "51" && (
            <Teen
              t1={t1}
              odds={odds}
              setBetState={setBetState}
              setOpen={setOpen}
              scrollToBet={betSectionRef}
              setTimer={setTimer}
            />
          )}
          {id === "52" && (
            <DT20
              t1={t1}
              odds={odds}
              setBetState={setBetState}
              setOpen={setOpen}
              scrollToBet={betSectionRef}
              setTimer={setTimer}
            />
          )}
          {id === "54" && (
            <AndarBhar
              t1={t1}
              odds={odds}
              setBetState={setBetState}
              setOpen={setOpen}
              scrollToBet={betSectionRef}
              setTimer={setTimer}
            />
          )}
          {id === "61" && (
            <TeenOneDay
              t1={t1}
              odds={odds}
              setBetState={setBetState}
              setOpen={setOpen}
              scrollToBet={betSectionRef}
              setTimer={setTimer}
            />
          )}
          {id === "62" && (
            <DT2
              t1={t1}
              odds={odds}
              setBetState={setBetState}
              setOpen={setOpen}
              scrollToBet={betSectionRef}
              setTimer={setTimer}
            />
          )}

          <div ref={betSectionRef}>
            {open && (
              <CasinoBet
                setBetState={setBetState}
                betState={betState}
                setOpen={setOpen}
                setTimer={setTimer}
                timer={timer}
              />
            )}
          </div>
          <Row justify={"center"} className="gx-mt-2 gx-mb-2">
            <button
              style={{
                border: "none",
                borderRadius: "2px",
                height: "34px",
                fontWeight: "600",
                marginTop: "10px",
              }}
              onClick={showModal}
              type="button"
              className="ant-btn ant-btn-default gx-bg-grey gx-text-white gx-font-weight-semi-bold">
              <span>Completed Casino Bets</span>
            </button>
          </Row>

          <LastResult matchId={t1?.mid[1]} casinoName={tableIdtoUrl[id]} />
          <MybetCasino />
        </Col>
      </Row>
      <Modal
        title="Completed Casino Bet List"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}>
        <AllBets  betList={betList}/>
      </Modal>
    </>
  );
};

export default CasinoMainPage;
