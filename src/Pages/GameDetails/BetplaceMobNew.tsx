/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Input, Modal, Row } from "antd";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

interface PlaceBetData {
  name?: string;
  odds?: number;
  mode?: string;
  stake?: number | string;
  isBack?: boolean;
}

interface Props {
  placeBetData: PlaceBetData;
  setPlaceBetData: React.Dispatch<React.SetStateAction<PlaceBetData>>;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  trigger: any;
  isLoading: boolean;
  setisModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
}

const BetplaceMobNew = ({
  placeBetData,
  setPlaceBetData,
  timer,
  setTimer,
  trigger,
  isLoading,
  setisModalOpen,
  isModalOpen,
}: Props) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer > 0) {
      timerRef.current = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setPlaceBetData({});
      setisModalOpen(false);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [timer, setTimer, setPlaceBetData, setisModalOpen]);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPlaceBetData((prev) => ({
      ...prev,
      stake: value,
    }));
  };

  const handleChange = (value: number) => {
    setPlaceBetData((prev) => ({
      ...prev,
      stake: value,
    }));
  };

  const handleBetPlaced = () => {
    if(!placeBetData?.stake){
      toast.error("Amount is required.")
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    trigger(placeBetData);
  };

  const stakeOptions = [
    100, 200, 500, 1000, 3000, 5000, 10000, 20000, 25000, 50000, 100000, 200000,
  ];

  return (
    <Modal
      width={450}
      title=""
      closable={false}
      open={isModalOpen}
      className="betModals"
      footer={false}>
      <div>
        {isLoading && (
          <div className="place_spinner">
            {" "}
            <div className="spinner-border " role="status"></div>
          </div>
        )}
        {/* Header Section */}
        <div
          className={`${
            placeBetData?.isBack ? "back" : "lay"
          }-color-lignt p-10`}>
          <Row>
            <Col xs={8}>
              <div className="main_header_bet">
                <p className="heade_team">Team</p>
                <p className="heade_rate">{placeBetData?.name}</p>
              </div>
            </Col>
            <Col xs={8}>
              <div className="main_header_bet">
                <p className="heade_team">Rate</p>
                <p className="heade_rate">{placeBetData?.odds}</p>
              </div>
            </Col>
            <Col xs={8}>
              <div className="main_header_bet">
                <p className="heade_team">Mode</p>
                <p className="heade_rate">{placeBetData?.mode}</p>
              </div>
            </Col>
          </Row>
        </div>

        {/* Stake Buttons */}
        <div className={`${placeBetData?.isBack ? "back" : "lay"}-color p-10`}>
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
                value={placeBetData?.stake}
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
              onClick={() => setisModalOpen(false)}
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

export default BetplaceMobNew;
