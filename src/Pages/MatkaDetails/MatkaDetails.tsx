import { useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import EventHeader from "./Components/EventHeader";
import GameTabs from "./Components/GameTabs";
import GameTypeDropdown from "./Components/GameTypeDropdown";
import NumberGrid from "./Components/NumberGrid";
import HarupSection from "./Components/HarupSection";
import BetModal from "./Components/BetModal";
import OpenBets from "./Components/OpenBets";

import {
  getSinglePatti,
  getDoublePatti,
  getTriplePatti,
} from "../../utils/matkaNumbers";

export default function MatkaDetails() {
  const { slug } = useParams();
  const isMaharani = slug?.includes("maharani");

  const normalTabs = ["Single Jodi", "Harup", "Open Bets"];
  const maharaniTabs = [
    "Single Jodi",
    "Harup",
    "Single Patti",
    "Double Patti",
    "Triple Patti",
    "Open Bets",
  ];

  const tabs = isMaharani ? maharaniTabs : normalTabs;

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);
  const [gameType, setGameType] = useState("Jodi");

  // Header text from URL
  const formatHeader = (slug?: string) => {
    if (!slug) return { title: "", time: "" };
    const parts = slug.split("-");
    return {
      title: parts.slice(3).join(" ").toUpperCase(),
      time: `${parts[0]}-${parts[1]}-${parts[2]}`,
    };
  };

  const headerData = formatHeader(slug);

  // Numbers based on tab
  const getNumbersByTab = (tab: string): string[] => {
    switch (tab) {
      case "Single Patti":
        return getSinglePatti();
      case "Double Patti":
        return getDoublePatti();
      case "Triple Patti":
        return getTriplePatti();
      default:
        return Array.from({ length: 100 }, (_, i) =>
          String(i).padStart(2, "0")
        );
    }
  };

  return (
    <div className="matka-details">
      <div className="container">
        <div className="matka-datails-wrapper">
          <EventHeader title={headerData.title} time={headerData.time} />

          {isMaharani && (
            <GameTypeDropdown
              value={gameType}
              onChange={setGameType}
            />

          )}

          <GameTabs
            tabs={tabs}
            active={activeTab}
            setActive={setActiveTab}
          />

          {(activeTab === "Single Jodi" ||
            activeTab.includes("Patti")) && (
              <NumberGrid
                numbers={getNumbersByTab(activeTab)}
                onSelectNumber={setSelectedNumber}
                showValue={activeTab === "Single Jodi"}
              />
            )}

          {activeTab === "Harup" && (
            <div className="game-content">
              <HarupSection title="Andar" onSelectNumber={setSelectedNumber} />
              <HarupSection title="Bahar" onSelectNumber={setSelectedNumber} />
            </div>
          )}

          {activeTab === "Open Bets" && <OpenBets />}

          <BetModal
            open={!!selectedNumber}
            number={selectedNumber || ""}
            onClose={() => setSelectedNumber(null)}
          />
        </div>
      </div>
    </div>
  );
}
