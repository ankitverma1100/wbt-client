import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
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
import {
  useGetMatkaMarketMutation,
  useMatkaPlacebetMutation,
  useMatkaBetsMutation,
  useMatkaLiabilityMutation,
  useMatkaListQuery,
} from "../../store/service/userServices/userServices";
import { useGetIpfyQuery } from "../../store/service/odds/oddsServices";

interface MatkaSelection {
  selectionId: number;
  selectionName: string;
  odds: number;
}

interface MatkaMarket {
  marketId?: string;
  marketName: string;
  data: MatkaSelection[];
}

interface MatkaGameData {
  matkaName: string;
  time: string;
  matkaMarket: MatkaMarket[];
}

interface MatkaLiabilityItem {
  selectionId: number;
  liability: number;
}

interface MatkaBetDetails {
  matkaId: number;
  selectionId: number;
  selectionName: string;
  marketId: string;
  odds: number;
}

export default function MatkaDetails() {
  const { matkaId } = useParams();
  const { data } = useMatkaListQuery();
  const parsedMatkaId = Number(matkaId);
  const matka = data?.data?.find((item) => item.id === parsedMatkaId);
  const matkaName = matka?.name || "Matka";
  const matkaTime = matka?.time || "";
  const isMaharani = matkaName.toLowerCase().includes("maharani");

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
  const [gameData, setGameData] = useState<MatkaGameData | null>(null);
  const [currentBets, setCurrentBets] = useState<any[]>([]);
  const [refreshCountdown, setRefreshCountdown] = useState(8);
  const [selectedBet, setSelectedBet] = useState<MatkaBetDetails | null>(null);
  const [liabilityData, setLiabilityData] = useState({
    JODI: [] as MatkaLiabilityItem[],
    HARUP_ANDAR: [] as MatkaLiabilityItem[],
    HARUP_BAHAR: [] as MatkaLiabilityItem[],
  });

  const [getMatkaMarket] = useGetMatkaMarketMutation();
  const [getMatkaBets] = useMatkaBetsMutation();
  const [getMatkaLiability] = useMatkaLiabilityMutation();
  const [placeMatkaBet] = useMatkaPlacebetMutation();
  const { data: userIp } = useGetIpfyQuery();
  const handleCloseBetModal = useCallback(() => {
    setSelectedBet(null);
    setSelectedNumber(null);
  }, []);

  const formatTime = (timeStr?: string) => {
    if (!timeStr) return "";
    return timeStr.replace("To", "|");
  };

  const selectedGameType = useMemo(() => {
    if (activeTab === "Single Jodi") return "JODI";
    if (activeTab === "Harup") return "HARUP";
    return "";
  }, [activeTab]);

  const getMarketKey = (market: MatkaMarket) =>
    (market.marketId || market.marketName || "").toUpperCase();

  const formatPnl = (pnl: number) => {
    if (pnl === 0) return "0";
    return `${pnl}`;
  };

  const getPnlClass = (pnl: number) => {
    if (pnl > 0) return "pnl-positive";
    if (pnl < 0) return "pnl-negative";
    return "pnl-zero";
  };

  const getPnl = (selectionId: number, marketType: "JODI" | "HARUP_ANDAR" | "HARUP_BAHAR") => {
    const list =
      marketType === "JODI"
        ? liabilityData.JODI
        : marketType === "HARUP_ANDAR"
          ? liabilityData.HARUP_ANDAR
          : liabilityData.HARUP_BAHAR;
    const item = list.find((entry) => entry.selectionId === selectionId);
    return item?.liability ?? 0;
  };

  const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;
    let browser = "Unknown";
    if (userAgent.includes("Chrome")) browser = "Chrome";
    else if (userAgent.includes("Safari")) browser = "Safari";
    else if (userAgent.includes("Firefox")) browser = "Firefox";
    else if (userAgent.includes("Edge")) browser = "Edge";

    let os = "Unknown";
    let os_version = "unknown";
    if (userAgent.includes("Win")) {
      os = "Windows";
      os_version = "windows-10";
    } else if (userAgent.includes("Mac")) {
      os = "Mac OS";
      os_version = "mac-os";
    } else if (userAgent.includes("Linux")) {
      os = "Linux";
      os_version = "linux";
    } else if (userAgent.includes("Android")) {
      os = "Android";
      os_version = "android";
    } else if (userAgent.includes("iOS")) {
      os = "iOS";
      os_version = "ios";
    }

    let device = "Desktop";
    let deviceType = "desktop";
    if (/mobile/i.test(userAgent)) {
      deviceType = "mobile";
      device = "Mobile";
    } else if (/tablet/i.test(userAgent)) {
      deviceType = "tablet";
      device = "Tablet";
    }

    const orientation =
      window.innerWidth > window.innerHeight ? "landscape" : "portrait";

    return {
      userAgent,
      browser,
      device,
      deviceType,
      os,
      os_version,
      browser_version: "108.0.0.0",
      orientation,
    };
  };

  const showToastOnce = (type: "success" | "error", message: string) => {
    const toastId = `matka-bet-${type}`;
    if (toast.isActive(toastId)) return;
    toast[type](message, { toastId });
  };

  const handlePlaceBet = async (stake: number) => {
    if (!selectedBet) return false;
    if (!stake || stake <= 0) {
      showToastOnce("error", "Enter a valid stake amount.");
      return false;
    }

    try {
      const placeTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS");
      const response = await placeMatkaBet({
        selectionId: selectedBet.selectionId,
        marketId: selectedBet.marketId,
        matchId: selectedBet.matkaId,
        userIp: userIp?.ip ?? "",
        placeTime,
        deviceInfo: getDeviceInfo(),
        stake,
      }).unwrap();

      if (response?.status) {
        showToastOnce("success", response?.message || "Bet placed successfully");
        setTimeout(() => {
          fetchCurrentBets(true);
        }, 2000);
        fetchLiability(true);
        handleCloseBetModal();
        return true;
      }

      showToastOnce("error", response?.message || "Bet placing failed, try again!");
      return false;
    } catch (error: any) {
      showToastOnce(
        "error",
        error?.data?.message || "Bet placing failed, try again!"
      );
      return false;
    }
  };

  const fetchGameData = async (silent = false) => {
    if (!parsedMatkaId) return;
    try {
      const response = await getMatkaMarket({ matkaId: parsedMatkaId }).unwrap();
      if (response?.data) {
        setGameData(response.data as MatkaGameData);
      } else if (!silent) {
        setGameData(null);
      }
    } catch (error) {
      if (!silent) {
        setGameData(null);
      }
    }
  };

  const fetchCurrentBets = async (silent = false) => {
    if (!parsedMatkaId) return;
    try {
      const response = await getMatkaBets({ matchId: parsedMatkaId }).unwrap();
      setCurrentBets(response?.data || []);
    } catch (error) {
      if (!silent) {
        setCurrentBets([]);
      }
    }
  };

  const fetchLiability = async (silent = false) => {
    if (!parsedMatkaId || !selectedGameType) return;
    try {
      if (selectedGameType === "JODI") {
        const response = await getMatkaLiability({
          matchId: parsedMatkaId,
          marketId: "JODI",
        }).unwrap();
        setLiabilityData((prev) => ({
          ...prev,
          JODI: Array.isArray(response?.data) ? response.data : [],
        }));
      } else if (selectedGameType === "HARUP") {
        const andarResponse = await getMatkaLiability({
          matchId: parsedMatkaId,
          marketId: "ANDAR",
        }).unwrap();
        const baharResponse = await getMatkaLiability({
          matchId: parsedMatkaId,
          marketId: "BAHAR",
        }).unwrap();
        setLiabilityData((prev) => ({
          ...prev,
          HARUP_ANDAR: Array.isArray(andarResponse?.data)
            ? andarResponse.data
            : [],
          HARUP_BAHAR: Array.isArray(baharResponse?.data)
            ? baharResponse.data
            : [],
        }));
      }
    } catch (error) {
      if (!silent) {
        setLiabilityData((prev) => ({
          ...prev,
          JODI: selectedGameType === "JODI" ? [] : prev.JODI,
          HARUP_ANDAR: selectedGameType === "HARUP" ? [] : prev.HARUP_ANDAR,
          HARUP_BAHAR: selectedGameType === "HARUP" ? [] : prev.HARUP_BAHAR,
        }));
      }
    }
  };

  useEffect(() => {
    fetchGameData();
    fetchCurrentBets();
  }, [parsedMatkaId]);

  useEffect(() => {
    fetchLiability();
  }, [selectedGameType, parsedMatkaId]);

  useEffect(() => {
    if (!parsedMatkaId) return;
    setRefreshCountdown(8);
    const tick = setInterval(() => {
      setRefreshCountdown((prev) => {
        if (prev <= 1) {
          fetchGameData(true);
          fetchCurrentBets(true);
          fetchLiability(true);
          return 8;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [parsedMatkaId, selectedGameType]);

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

  const jodiMarkets =
    gameData?.matkaMarket?.filter((market) =>
      getMarketKey(market).includes("JODI")
    ) || [];

  const harupAndarMarket =
    gameData?.matkaMarket?.find((market) =>
      getMarketKey(market).includes("HARUP_ANDAR")
    ) || null;

  const harupBaharMarket =
    gameData?.matkaMarket?.find((market) =>
      getMarketKey(market).includes("HARUP_BAHAR")
    ) || null;

  const jodiItems =
    jodiMarkets.flatMap((market) =>
      market.data.map((selection) => {
        const pnl = getPnl(selection.selectionId, "JODI");
        return {
          label: selection.selectionName,
          subLabel: formatPnl(pnl),
          subClassName: getPnlClass(pnl),
        };
      })
    ) || [];

  const harupAndarItems =
    harupAndarMarket?.data?.map((selection) => {
      const pnl = getPnl(selection.selectionId, "HARUP_ANDAR");
      return {
        label: selection.selectionName,
        subLabel: formatPnl(pnl),
        subClassName: getPnlClass(pnl),
      };
    }) || [];

  const harupBaharItems =
    harupBaharMarket?.data?.map((selection) => {
      const pnl = getPnl(selection.selectionId, "HARUP_BAHAR");
      return {
        label: selection.selectionName,
        subLabel: formatPnl(pnl),
        subClassName: getPnlClass(pnl),
      };
    }) || [];

  const handleSelectJodi = (value: string) => {
    const selected = jodiMarkets
      .flatMap((market) =>
        market.data.map((selection) => ({
          market,
          selection,
        }))
      )
      .find((entry) => entry.selection.selectionName === value);

    if (!selected || !parsedMatkaId) return;

    setSelectedBet({
      matkaId: parsedMatkaId,
      selectionId: selected.selection.selectionId,
      selectionName: selected.selection.selectionName,
      marketId: "JODI",
      odds: selected.selection.odds,
    });
    setSelectedNumber(selected.selection.selectionName);
  };

  const handleSelectHarup = (
    value: string,
    marketType: "HARUP ANDAR" | "HARUP BAHAR"
  ) => {
    const market =
      marketType === "HARUP ANDAR" ? harupAndarMarket : harupBaharMarket;
    const selection = market?.data?.find(
      (item) => item.selectionName === value
    );

    if (!selection || !parsedMatkaId) return;

    setSelectedBet({
      matkaId: parsedMatkaId,
      selectionId: selection.selectionId,
      selectionName: selection.selectionName,
      marketId: marketType,
      odds: selection.odds,
    });
    setSelectedNumber(selection.selectionName);
  };

  return (
    <div className="matka-details">
      <div className="container">
        <div className="matka-datails-wrapper">
          <EventHeader
            title={gameData?.matkaName || matkaName}
            time={formatTime(gameData?.time || matkaTime)}
          />

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
              onSelectNumber={
                activeTab === "Single Jodi" ? handleSelectJodi : setSelectedNumber
              }
              showValue={activeTab === "Single Jodi"}
              items={activeTab === "Single Jodi" ? jodiItems : undefined}
            />
          )}

          {activeTab === "Harup" && (
            <div className="game-content">
              <HarupSection
                title="Andar"
                onSelectNumber={(value) => handleSelectHarup(value, "HARUP ANDAR")}
                items={harupAndarItems}
              />
              <HarupSection
                title="Bahar"
                onSelectNumber={(value) => handleSelectHarup(value, "HARUP BAHAR")}
                items={harupBaharItems}
              />
            </div>
          )}

          {activeTab === "Open Bets" && <OpenBets bets={currentBets} />}

          <BetModal
            open={!!selectedBet}
            number={selectedBet?.selectionName || selectedNumber || ""}
            onClose={handleCloseBetModal}
            refreshCountdown={refreshCountdown}
            onPlaceBet={handlePlaceBet}
          />
        </div>
      </div>
    </div>
  );
}
