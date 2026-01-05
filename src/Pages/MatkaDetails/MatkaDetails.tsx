import { useState } from "react";
import "./style.scss";
import EventHeader from "./Components/EventHeader";
import GameTabs from "./Components/GameTabs";
import NumberGrid from "./Components/NumberGrid";
import HarupSection from "./Components/HarupSection";
import BetModal from "./Components/BetModal";
import OpenBets from "./Components/OpenBets";

export default function MatkaDetails() {
  const [activeTab, setActiveTab] = useState("Single Jodi");
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);

  return (
    <div className="matka-details">
      <div className="container">
        <div className="matka-datails-wrapper">
          <EventHeader />
          <GameTabs active={activeTab} setActive={setActiveTab} />

          {/* SINGLE JODI */}
          {activeTab === "Single Jodi" && (
            <NumberGrid onSelectNumber={setSelectedNumber} />
          )}

          {/* HARUP */}
          {activeTab === "Harup" && (
            <div className="game-content">
              <HarupSection title="Andar" onSelectNumber={setSelectedNumber} />
              <HarupSection title="Bahar" onSelectNumber={setSelectedNumber} />
            </div>
          )}

          {/* OPEN BETS */}
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
