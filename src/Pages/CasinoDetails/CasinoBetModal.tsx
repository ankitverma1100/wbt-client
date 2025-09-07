/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Input, Modal, Row } from "antd";
import moment from "moment";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useGetCasinoBetPlacedMutation } from "../../store/service/userServices/userServices";
import { useGetIpfyQuery } from "../../store/service/odds/oddsServices";
import { useParams } from "react-router-dom";

interface Props {
  betState: BetPlacedProps;
  setBetState: any;
  setIsBetModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
  isBetModal: boolean;
  t1: any;
}

const CasinoBetModal = ({
  betState,
  setBetState,
  setIsBetModal,
  setTimer,
  timer,
  isBetModal,
  t1,
}: Props) => {
  const { id } = useParams();
  var curr = new Date();
  const pTime = moment(curr).format("YYYY-MM-DD HH:mm:ss.SSS");
  const [trigger, { isLoading }] = useGetCasinoBetPlacedMutation();
  const { data: userIp } = useGetIpfyQuery();

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    stopTimer();
    if (timer > 0) {
      timerRef.current = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setBetState({});
      setIsBetModal(false);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [timer]);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setBetState((prev: any) => ({
      ...prev,
      stake: value,
    }));
  };

  const handleChange = (value: number) => {
    setBetState((prev: any) => ({
      ...prev,
      stake: value,
    }));
  };

  const handleBetPlaced = async () => {
    if (!betState?.stake || Number(betState?.stake) < 100) {
      toast.error(
        "Amount can not be less than casino Min Amount 100 in casino"
      );
      return;
    }

    stopTimer();

    const res = await trigger({
      ...betState,
      userIp: userIp?.ip ?? "",
      placeTime: pTime,
      marketId: t1?.mid,
      matchId: id ?? "",
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
    }).unwrap();

    if (res?.status) {
      toast.success("Bet placed successfully");
      setBetState({});
      setIsBetModal(false);
    } else {
      toast.error(res?.message || "Bet placing failed, try again!");
      startTimer();
    }
  };

  const stakeOptions = [
    100, 200, 500, 1000, 3000, 5000, 10000, 20000, 25000, 50000, 100000, 200000,
  ];

  console.log("betState", betState);

  return (
    <Modal
      width={450}
      title=""
      closable={false}
      open={isBetModal}
      className="betModals"
      footer={false}>
      <div>
        {isLoading && (
          <div className="place_spinner">
            <div className="spinner-border " role="status"></div>
          </div>
        )}
        {/* Header Section */}
        <div
          className={`${betState?.isBack ? "back" : "lay"}-color-lignt p-10`}>
          <Row>
            <Col xs={12}>
              <div className="main_header_bet">
                <p className="heade_team">Team</p>
                <p className="heade_rate">{betState?.nation}</p>
              </div>
            </Col>
            <Col xs={12}>
              <div className="main_header_bet">
                <p className="heade_team">Rate</p>
                <p className="heade_rate">{betState?.odds}</p>
              </div>
            </Col>
          </Row>
        </div>

        {/* Stake Buttons */}
        <div className={`${betState?.isBack ? "back" : "lay"}-color p-10`}>
          <Row gutter={[24, 8]}>
            {stakeOptions.map((value) => (
              <Col xs={8} key={value}>
                <Button
                  className="stack_button_pl"
                  onClick={() => handleChange(value)}>
                  {value}
                </Button>
              </Col>
            ))}
          </Row>

          {/* Input + Timer */}
          <Row className="mt-10">
            <Col xs={21}>
              <Input
                placeholder="Enter Amount"
                onChange={handleAmountChange}
                value={betState?.stake}
              />
            </Col>
            <Col xs={3}>
              <div className="timmer_dev">{timer}</div>
            </Col>
          </Row>
        </div>

        {/* Footer Buttons */}
        <Row className="back-color">
          <Col xs={12}>
            <Button
              onClick={() => setIsBetModal(false)}
              className="close_button">
              Cancel
            </Button>
          </Col>
          <Col xs={12}>
            <Button
              className="submit_button"
              onClick={() => !isLoading && handleBetPlaced()}>
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default CasinoBetModal;
