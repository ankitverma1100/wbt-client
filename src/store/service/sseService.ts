type SseHandlers = {
  onConnected?: (data: string) => void;
  onMessage?: (data: string) => void;
  onError?: (error: unknown) => void;
};

const parseSseChunk = (chunk: string) => {
  const events: { event?: string; data?: string }[] = [];
  const blocks = chunk.split("\n\n");
  for (const block of blocks) {
    if (!block.trim()) continue;
    const lines = block.split("\n");
    const evt: { event?: string; data?: string } = {};
    for (const line of lines) {
      if (line.startsWith("event:")) {
        evt.event = line.replace("event:", "").trim();
      } else if (line.startsWith("data:")) {
        const dataLine = line.replace("data:", "").trim();
        evt.data = evt.data ? `${evt.data}\n${dataLine}` : dataLine;
      }
    }
    events.push(evt);
  }
  return events;
};

export const subscribeSse = (eventId: string, handlers: SseHandlers = {}) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  if (!baseUrl) {
    console.error("VITE_API_BASE_URL is not set");
    return () => {};
  }

  const token = localStorage.getItem("client-token");
  const url = `${baseUrl}/sse/subscribe/${eventId}`;
  const controller = new AbortController();
  const decoder = new TextDecoder();
  let buffer = "";

  fetch(url, {
    method: "GET",
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    signal: controller.signal,
  })
    .then(async (res) => {
      if (!res.ok || !res.body) {
        handlers.onError?.(res);
        return;
      }

      const reader = res.body.getReader();
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() || "";
        for (const part of parts) {
          const events = parseSseChunk(part);
          for (const evt of events) {
            if (evt.event === "connected" && evt.data) {
              handlers.onConnected?.(evt.data);
            } else if (evt.data) {
              handlers.onMessage?.(evt.data);
            }
          }
        }
      }
    })
    .catch((err) => {
      if (controller.signal.aborted) return;
      handlers.onError?.(err);
    });

  return () => {
    controller.abort();
  };
};
