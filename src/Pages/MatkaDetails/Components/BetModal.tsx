import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  number: string;
  onClose: () => void;
  refreshCountdown: number;
  onPlaceBet: (stake: number) => Promise<boolean>;
}

export default function BetModal({
  open,
  number,
  onClose,
  refreshCountdown,
  onPlaceBet,
}: Props) {
  const [stake, setStake] = useState<number>(0);
  const [isPlacing, setIsPlacing] = useState(false);

  /* =========================
     AUTO CLOSE TIMER (8 sec)
  ========================== */
  useEffect(() => {
    if (!open) return;

    setStake(0);
    setIsPlacing(false);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    if (refreshCountdown <= 1) {
      onClose();
    }
  }, [open, refreshCountdown, onClose]);

  /* =========================
     PLACE BET
  ========================== */
  const handleDone = async () => {
    if (stake <= 0) return;

    setIsPlacing(true);

    const success = await onPlaceBet(stake);
    if (!success) {
      setIsPlacing(false);
    }
  };

  if (!open) return null;

  return (
    <div className="bet-modal-overlay">
      <div className="bet-modal">
        {/* HEADER */}
        <div className="bet-modal-header">
          NUMBER {number} ({refreshCountdown})
        </div>

        <div className="bet-modal-body">
          {/* INFO */}
          <div className="bet-info">
            <div>
              <label>PRICE</label>
              <div className="box">90</div>
            </div>
            <div>
              <label>SIZE</label>
              <div className="box">2</div>
            </div>
            <div>
              <label>STAKE</label>
              <input
                type="number"
                value={stake}
                onChange={(e) => setStake(Number(e.target.value))}
                placeholder="0"
                disabled={isPlacing}
              />
            </div>
          </div>

          {/* QUICK STAKES */}
          <div className="quick-stakes">
            {[100, 200, 500, 1000, 2000, 3000, 5000, 10000].map((amt) => (
              <button
                key={amt}
                onClick={() => setStake(amt)}
                disabled={isPlacing}
                className={stake === amt ? "active" : ""}
              >
                {amt.toLocaleString()}
              </button>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="bet-actions">
            <button
              className="cancel"
              onClick={onClose}
              disabled={isPlacing}
            >
              Cancel
            </button>

            <button
              className="done"
              onClick={handleDone}
              disabled={stake <= 0 || isPlacing}
              style={{
                opacity: isPlacing ? 0.6 : 1,
              }}
            >
              {isPlacing ? (
                <>
                  <span className="loader" />
                  Placing...
                </>
              ) : (
                `Done (${refreshCountdown})`
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
