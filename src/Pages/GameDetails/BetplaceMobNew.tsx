/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Modal, Row } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface PlaceBetData {
  name?: string;
  odds?: number;
  mode?: string;
  stake?: number | string;
  isBack?: boolean;
  size?: number | string;
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
  betplaceData: BetPlacedRes | undefined;
}

const WatchIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="clock-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg>
);

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

  const handleBetPlaced = async () => {
    if (!placeBetData?.stake) {
      toast.error("Amount is required.");
      return;
    }

    try {
      await trigger(placeBetData); // agar ye fail hota hai to catch chalega
    } catch (error) {
      toast.error("Bet placing failed, try again!");
    }
  };

  const stakeOptions = [
    100, 200, 500, 1000, 2000, 5000, 10000, 20000, 25000, 50000, 100000, 200000,
  ];

  const displaySize = placeBetData?.isFancy ? placeBetData?.size ?? "" : 0;

  return (
    <Modal
      width={450}
      title=""
      closable={false}
      open={isModalOpen}
      className="betModals"
      footer={false}>
      <div className="bet-modal-wrapper">
        {isLoading && (
          <div className="place_spinner">
            <div className="spinner-border" role="status"></div>
          </div>
        )}

        {/* Custom Modal Header */}
        <div className="modal-header-gold">
          <span>PLACE YOUR BET</span>
          <span className="close-icon" onClick={() => setisModalOpen(false)}>×</span>
        </div>

        <div className="modal-content-body">
          {/* Team Info Card */}
          <div className="team-card-gold">
            <span className="team-name">{placeBetData?.name || "Team Name"}</span>
            <span
              className={`mode-badge ${placeBetData?.isBack ? "lagai" : "khai"}`}
            >
              {placeBetData?.isFancy
                ? placeBetData?.isBack
                  ? "YES"
                  : "NOT"
                : placeBetData?.isBack
                ? "LAGAI"
                : "KHAI"}
            </span>
          </div>

          {/* Controls Section (Price, Size, Stake) */}
          <div
            className={`controls-section ${
              placeBetData?.isBack ? "controls-back" : "controls-lay"
            }`}
          >
            <Row gutter={10}>
              <Col span={8}>
                <span className="control-label">PRICE</span>
                <input
                  type="text"
                  readOnly
                  className="control-input"
                  value={placeBetData?.odds || ""}
                />
              </Col>
              <Col span={8}>
                <span className="control-label">SIZE</span>
                <input
                  type="text"
                  readOnly
                  className="control-input"
                  value={displaySize}
                />
              </Col>
              <Col span={8}>
                <span className="control-label">STAKE</span>
                <input
                  type="number"
                  className="control-input"
                  placeholder="0"
                  value={placeBetData?.stake || ""}
                  onChange={handleAmountChange}
                />
              </Col>
            </Row>
          </div>

          {/* Action Row: Timer & Place Bet Button */}
          <div className="actions-row">
            <div className="timer-box">
              <span style={{ fontSize: "16px", display: "flex", alignItems: "center" }}>
                <WatchIcon />
              </span>
              <span>TIMER: {timer}</span>
            </div>
            <button
              className="place-bet-btn"
              onClick={() => !isLoading && handleBetPlaced()}
            >
              Place Bet
            </button>
          </div>

          {/* Stake Buttons Grid (4 Columns) */}
          <div className="stake-grid">
            {stakeOptions.map((value) => (
              <button
                key={value}
                className="stake-btn"
                onClick={() => handleChange(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BetplaceMobNew;
