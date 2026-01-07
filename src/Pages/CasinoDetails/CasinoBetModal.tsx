import { Button, Input, Modal } from "antd";
import moment from "moment";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useGetCasinoBetPlacedMutation } from "../../store/service/userServices/userServices";
import { useGetIpfyQuery } from "../../store/service/odds/oddsServices";
import { useParams } from "react-router-dom";
import "./casinomodal.scss";

interface Props {
  betState: any;
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
    if (isBetModal) {
      startTimer();
    }
    return () => stopTimer();
  }, [timer, isBetModal]);

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
    100, 200, 500, 1000, 2000, 3000, 5000, 10000
  ];

  return (
    <Modal
      width={520}
      title={null}
      closable={false}
      open={isBetModal}
      className="casino-bet-modal"
      footer={null}
      centered
    >
      <div className="modal-header">
        {betState?.nation || "TEAM"}
      </div>
      <div className="modal-body" style={{ padding: '30px' }}>
        <div className="label-row">
          <span>PRICE</span>
          <span>SIZE</span>
          <span>STAKE</span>
        </div>
        <div className="value-row">
          <div className="info-box">
            {betState?.odds || "0.00"}
          </div>
          <div className="info-box">
            {betState?.selectionName || "A"}
          </div>
          <div className="stake-input-container">
            <Input
              placeholder="0"
              onChange={handleAmountChange}
              value={betState?.stake}
              autoFocus
            />
          </div>
        </div>

        <div className="stake-grid">
          {stakeOptions.map((value) => (
            <Button
              key={value}
              className="stake-btn"
              onClick={() => handleChange(value)}
            >
              {value.toLocaleString()}
            </Button>
          ))}
        </div>

        <div className="footer-actions">
          <Button
            className="cancel-btn"
            onClick={() => {
              setBetState({});
              setIsBetModal(false);
            }}
          >
            Cancel
          </Button>
          <Button
            className={`done-btn ${isLoading ? 'loading' : ''}`}
            onClick={() => !isLoading && handleBetPlaced()}
            disabled={isLoading}
          >
            {isLoading ? "Placing..." : `Done (${timer})`}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CasinoBetModal;

