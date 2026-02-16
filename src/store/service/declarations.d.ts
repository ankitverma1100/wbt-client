interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}

type ImportMeta = {
  readonly env: ImportMetaEnv;
};

interface LoginRequestBody {
  userId: string;
  password: string;
  url: string;
}

interface LoginResponse {
  status?: boolean;
  message?: string;
  data?: {
    token: string;
    userId: string;
    userTypeInfo: number | string;
    username: string;
  } | null;
  token?: string;
  userId?: string;
  userTypeInfo?: number | string;
  username?: string;
}

interface BetPlacedProps {
  nation: string;
  casinoName: number;
  isBack: boolean;
  odds: null;
  marketId: string;
  placeTime: string;
  selectionId: null;
  colorName: string;
  stake: string | number;
  matchId: string;
  deviceInfo: {
    userAgent: string;
    browser: string;
    device: string;
    deviceType: string;
    os: string;
    os_version: string;
    browser_version: string;
    orientation: string;
  };
}
