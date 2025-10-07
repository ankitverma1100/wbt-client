interface UserRequestBody {
  userType: number;
  noOfRecords: number;
  index: number;
}

interface UserList {
  userId: string;
  userName: string;
  mobile: string;
  password: string;
  balance: number;
  matchCommission: number;
  sessionCommission: number;
  share: number;
  userStatus: boolean;
  parentId: string;
}
interface UserResponse {
  data: UserList[];
}

interface useNameRequest {
  userType: number;
}
interface useName {
  useriId: string;
  username: string;
}
interface useNameRes {
  data: useName[];
}

interface UserCreateRequestBody {
  userId: string;
}
interface UserCreateList {
  data: {
    commissionType: string;
    mobileAppCharge: number;
    myCasinoCommission: number;
    myCasinoPartnership: number;
    myIntlCasinoPartnership: number;
    myMatchCommission: number;
    myPartnership: number;
    mySessionCommision: number;
  };
}

interface UserCreateResponseBody {
  data: UserCreateList;
}

interface UserCreateBody {
  username: string;
  reference: string;
  password: string;
  contact: string;
  mobileAppCharge: string;
  partnership: null | number;
  casinoPartnership: null | number;
  internationalCasinoPartnership: null | number;
  commissionType: null | number;
  matchCommission: null | number;
  sessionCommission: null | number;
  casinoCommission: null | number;
}
interface UserCreateResBody {
  message(message: any): unknown;
  status: any;
  data: {
    userId: string;
    password: string;
  };
}

interface UserProfile {
  status: boolean;
  message: null | string;
  data: {
    userId: string;
    username: string;
    contact: string;
    dateOfJoining: string;
    address: string;
    helpline: string;
    rateDifference: number;
  };
}
interface ChangePaaReq {
  currentPassword: string;
  newPassword: string;
}
interface ChangePaaRes {
  status: boolean;
  message: string;
  data: null;
}
interface UserDetailsUpdateReq {
  userId: string;
}
interface UserDetailsUpdateRes {
  status: boolean;
  message: null;
  data: {
    userId: string;
    userName: string;
    reference: string;
    password: string;
    contact: string;
    flatShare: boolean;
    casinoPlay: boolean;
    mobileAppCharge: number;
    adminPartnership: number;
    adminCasinoPartnership: number;
    adminIntlCasinoPartnership: number;
    adminMatchCommission: number;
    adminSessionCommision: number;
    adminCasinoCommission: number;
    myPartnership: number;
    myCasinoPartnership: number;
    myIntlCasinoPartnership: number;
    myMatchCommission: number;
    mySessionCommision: number;
    myCasinoCommission: number;
  };
}

interface ActiveUserReq {
  userId: string;
  activate: boolean;
}
interface ActiveUserRes {
  status: boolean;
  message: string;
  data: null;
}

interface LedgerPaylod {
  userId: string;
  amount: number;
  collection: string;
  paymentType: string;
  remark: string;
}
interface LedgerBody {
  status: boolean;
  message: string;
  data: null;
}
interface LedgerDetailsReq {
  userId: string;
}
interface LedgerDetail {
  date: string | null;
  collectionName: string;
  paymentType: string;
  remark: string;
  credit: number;
  debit: number;
  balance: number;
}

interface LedgerDetailsRes {
  status: boolean;
  message: string | null;
  data: LedgerDetail[];
}
interface LogOutRes {
  status: boolean;
  message: string;
  data: null;
}
interface BetplacedReq {
  isFancy: boolean;
  isBack: boolean;
  odds: number;
  stake: number;
  marketName: string;
  selectionId: number | string;
  priceValue: number;
  placeTime: string;
  marketId: string;
  matchId: string;
  name: string;
  userIp: string;
  deviceInfo: DeviceInfo | null;
}

interface DeviceInfo {
  userAgent: string;
  browser: string;
  device: string;
  deviceType: string;
  os: string;
  os_version: string;
  browser_version: string;
  orientation: string;
}

interface BetPlacedRes {
  message: string;
  status: boolean;
}

interface rateDeffReq {
  rateDifference: number;
}
interface rateDeffRes {
  status: boolean;
  message: string;
  data: null;
}
interface UserPassRequest {
  currentPassword: string;
  newPassword: string;
}
interface UserPassResponse {
  status: boolean;
  message: string;
  data: null;
}
interface casinoResponse {
  status: boolean;
  message: string;
  data: Casino[];
}
interface Casino {
  tableId: string | number | readonly string[] | undefined;
  name: string;
  image: string;
  id: string;
}

interface UserBalance {
  status: boolean;
  message: string | null;
  data: { balance: number };
}

interface healthRes {
  status: boolean;
  message: string;
}

interface BetListReq {
  matchId: string;
  activeBet?: boolean | null;
}
interface BetListRes {
  status: boolean;
  message: null;
  data: BetList;
}

type BetList = Record<string, Bet[]>;

interface Bet {
  netPnl: ReactNode;
  date: ReactNode;
  declared: ReactNode;
  sid: any;
  nation: string;
  rate: number;
  amount: number;
  priveValue: number;
  marketName: string;
  betTime: string;
  pnl: number;
  back: boolean;
}

interface OddsResponse {
  status: boolean;
  message: null;
  data: OdssPnl[];
}

interface SessionPlusMinusRes {
  status: boolean;
  message: null;
  data: {
    sessionPlusMinus: number;
  };
}

interface OdssPnl {
  marketId: string;
  pnl1: number;
  pnl2: number;
  pnl3: number;
  selection1: number;
  selection2: number;
  selection3: number;
}

interface LedgerDataRes {
  status: boolean;
  message: null;
  data: DataLedger[];
}
interface LedgerReq {
  matchId: number;
}

interface DataLedger {
  date: string;
  time: string;
  remark: string;
  wonBy: string;
  won: string;
  lost: string;
  balance: number;
  matchId: number;
}

interface LedgerListData {
  status: boolean;
  message: null;
  data: Data123;
}

interface Data123 {
  totalCommission: ReactNode;
  date: string;
  wonBy: null;
  matchBet: number;
  sessionBet: number;
  matchWon: number;
  sessionWon: number;
  totalWon: number;
  matchBets: MatchBet12[];
  sessionBets: SessionBet12[];
}

interface SessionBet12 {
  netPnl: ReactNode;
  selectionName: string;
  rate: number;
  amount: number;
  run: number;
  mode: string;
  declared?: number;
}

interface MatchBet12 {
  netPnl: ReactNode;
  pnl3: number;
  pnl2: number;
  pnl1: number;
  selectionName: string;
  rate: number;
  amount: number;
  mode: string;
}

interface fancyBookreq {
  matchId: string;
  fancyId: string;
}

interface FancyBookRes {
  status: boolean;
  message: null;
  data: FancyData[];
}

interface FancyData {
  odds: number;
  pnl: number;
}

interface mybetRequest {
  tableId: number | string;
  isGameCompleted: boolean;
  sportId: number;
}

interface CasinoBetPlacePaylod {
  casinoName: number;
  colorName: string;
  isBack: boolean;
  marketId: string;
  nation: string;
  odds: number;
  placeTime: string;
  selectionId: string;
  stake: number;
  userIp: string;
  matchId: string;
  diviceInfo: any;
}

interface mybetResponce {
  status: boolean;
  message: null;
  data: mybet[];
}

interface mybet {
  back: boolean;
  id: number;
  gameName: string;
  roundId: string;
  stake: number;
  odds: number;
  result: null;
  pnl: number;
  date: null;
  selectionName: string;
}

interface BetListLegdgerProps {
  date: string;
}

interface BetListLegdgerRes {
  status: boolean;
  message: null;
  data: DataBetLedger;
}
interface DataBetLedger {
  totalCommission: ReactNode;
  date: string;
  totalWon: number;
  dataAndBets: DataAndBet[];
}

interface DataAndBet {
  name: string;
  pnl: number;
  betList: BetListLedger[];
}

interface BetListLedger {
  selectionName: string;
  marketId: string;
  winner: string;
  rate: string;
  amount: number;
  mode: string;
}

interface MatchBetCountReq {
  matchIdList: number[];
}
interface channelReq {
  matchId: number;
}

interface MatchBetCountResponse {
  status: boolean;
  message: null;
  data: MatchBetCount[];
}

interface MatchBetCount {
  matchId: number;
  matchBets: number;
  sessionBet: number;
}

interface ChanelRes {
  status: boolean;
  message: null;
  data: ChanelData;
}

interface ChanelData {
  matchId: number;
  channelId: string;
}

interface activeMatchRes {
  status: boolean;
  message: null;
  data: activeMatch[];
}

interface activeMatch {
  eventId: number;
  eventName: string;
  startDate: string;
  active: boolean;
}

interface usedCoinReq {
  matchId: string;
}
interface usedCoinRes {
  status: boolean;
  message: null;
  data: usedCoin;
}

interface usedCoin {
  usedCoin: number;
  sessionPlusMinus: number;
}

interface ChannelIdpayload {
  matchId: number | any;
}
interface ChannelIdRes {
  status: boolean;
  message: null;
  data: ChannelIdData;
}

interface ChannelIdData {
  matchId: number;
  channelId: string;
  scoreId: string;
}

interface matkaBetPlacePayload {
  stake: number;
  selectionId: number;
  userIp: string;
  marketId: string;
  matchId: number;
  placeTime: string;
  deviceInfo: DeviceInfo;
}

interface DeviceInfo {
  userAgent: string;
  browser: string;
  device: string;
  deviceType: string;
  os: string;
  os_version: string;
  browser_version: string;
  orientation: string;
}

interface matkaPayload {
  matkaId: number;
}

interface matkaListRes {
  status: boolean;
  message: null;
  data: matkaList[];
}

interface matkaList {
  id: number;
  name: string;
  time: string;
}

interface matkaListResponse {
  status: boolean;
  message: null;
  data: matkaListRes;
}

interface matkaListRes {
  matkaName: string;
  marketId: null;
  time: string;
  matkaMarket: MatkaMarket[];
}

interface MatkaMarket {
  data: Datum[];
  marketName: string;
}

interface Datum {
  selectionId: number;
  selectionName: string;
  odds: number;
}

interface casinoResponse {
  status: boolean;
  message: string;
  data: Casino[];
}
interface Casino {
  tableId: string | number | readonly string[] | undefined;
  name: string;
  image: string;
  id: string;
}
