import { useMemo } from "react";
import { Modal } from "antd";
import CasinoExposureTable from "./ExposureTables/CasinoExposureTable";
import FancyExposureTable from "./ExposureTables/FancyExposureTable";
import OddsExposureTable from "./ExposureTables/OddsExposureTable";

type ExposureModalProps = {
  open: boolean;
  onClose: () => void;
  isLoading?: boolean;
  bets?: any[];
};

const ExposureModal = ({ open, onClose, isLoading, bets = [] }: ExposureModalProps) => {
  const groupedBets = useMemo(() => {
    return bets.reduce((acc: Record<string, any[]>, item: any) => {
      const key = item?.marketType || "Other";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  }, [bets]);

  const marketTypes = useMemo(() => Object.keys(groupedBets), [groupedBets]);
  const casinoBets = groupedBets.Casino ?? [];
  const fancyBets = groupedBets.Fancy ?? [];
  const oddsBets = groupedBets.Odds ?? [];

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={860}
      title="YOUR EXPOSURE DETAILS"
      className="fancy-book-modal"
    >

      {isLoading && marketTypes.length === 0 ? (
        <div style={{ padding: "12px 0", textAlign: "center" }}>
          Loading...
        </div>
      ) : null}
      {!isLoading && marketTypes.length === 0 ? (
        <div style={{ padding: "12px 0", textAlign: "center" }}>
          No bets found
        </div>
      ) : null}
      <OddsExposureTable items={oddsBets} />
      <FancyExposureTable items={fancyBets} />
      <CasinoExposureTable items={casinoBets} />

      <button
        type="button"
        onClick={onClose}
        style={{
          width: "100%",
          padding: "8px 12px",
          borderRadius: 6,
          border: "1px solid #ccc",
          background: "#fff",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </Modal>
  );
};

export default ExposureModal;
