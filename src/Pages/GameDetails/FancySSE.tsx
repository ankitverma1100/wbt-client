import React, { useEffect } from "react";
import { subscribeSse } from "../../store/service/sseService";

type LimitItem = {
  eventId: number;
  maxBet: number;
  minBet: number;
  betDelay: number;
  type: "market" | "fancy";
  marketId?: string;
  fancyId?: string;
};

type FancySseProps = {
  eventId: string;
  onLimitsUpdate?: (items: LimitItem[]) => void;
};

const FancySSE = ({ eventId, onLimitsUpdate }: FancySseProps) => {

  useEffect(() => {
    if (!eventId) return;

    return subscribeSse(eventId, {
      onConnected: (data) => {
        console.log("Connected event:", data);
      },
      onMessage: (data) => {
        console.log("Message received:", data);
        try {
          const parsed = JSON.parse(data) as {
            status?: boolean;
            message?: string | null;
            data?: LimitItem[];
          };
          if (Array.isArray(parsed?.data)) {
            onLimitsUpdate?.(parsed.data);
          }
        } catch (err) {
          // ignore non-JSON messages
          console.warn("SSE message is not JSON:", err);
        }
      },
      onError: (err) => {
        console.error("SSE error:", err);
      },
    });
  }, [eventId, onLimitsUpdate]);
  return null;
};

export default FancySSE;
