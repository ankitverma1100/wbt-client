interface matchedData {
  status: boolean
  message: string
  data: matList[]
}

interface matList {
  matchName: string
  matchId: number
  marketId: string
  openDate: string
  maxBet: number
  minBet: number
  maxBetRate: number
  minBetRate: number
  inPlay: boolean
  team1Back: number
  team1Lay: number
  team2Back: number
  team2Lay: number
  drawBack: number
  drawLay: number
  bm: boolean
  F: boolean
  GM: boolean
  SM: boolean
  channelId: any
}


interface oddsResponse {
  Odds: Odd[]
  Bookmaker: BookmakerData[]
  Fancy: any[]
  Fancy2: Fancy2[]
  Fancy3: any[]
  Khado: any[]
  Ball: any[]
  Meter: any[]
  OddEven: any[]
  BallByBall: any[]
}

interface Odd {
  runners: Runner[]
  matchName: string
  marketId: string
  isMarketDataDelayed: boolean
  status: string
  inplay: boolean
  Name: string
  eventTime: string
  lastMatchTime: string
  maxBetRate: number
  minBetRate: number
  betDelay: number
  maxBet: number
  minBet: number
  betlock: boolean
  display_message: string
}

interface Runner {
  name: string
  selectionId: string
  runnerStatus: string
  ex: Ex
}

interface Ex {
  availableToBack: AvailableToBack[]
  availableToLay: AvailableToLay[]
}

interface AvailableToBack {
  price: number
  size: number
}

interface AvailableToLay {
  price: number
  size: number
}

interface BookmakerData {
  mid: string
  t: string
  sid: string
  nation: string
  b1: number
  bs1: number
  l1: number
  ls1: number
  gstatus: string
  matchName: string
  maxBetRate: number
  minBetRate: number
  betDelay: number
  maxBet: number
  minBet: number
  betlock: boolean
  display_message: string
}

interface Fancy2 {
  mid: string
  t: string
  sid: string
  nation: string
  b1: number
  bs1: number
  l1: number
  ls1: number
  gstatus: string
  maxBet: number
  minBet: number
  betDelay: number
  isCommissionAllowed: boolean
  srno: string
}
interface IpRes {
  ip: string

}


interface stackRes {
  status: boolean
  message: any
  data: stackData
}

interface stackData {
  stack1: number
  stack2: number
  stack3: number
  stack4: number
  stack5: number
  stack6: number
  stack7: number
  stack8: number
  stack9: number
  stack10: number
}



interface InplayRes {
  status: boolean;
  message: string;
  data: InplayData[];
}

interface InplayData {
  sportid: number;
  name: string;
  matchList: MatchList[];
}

interface MatchList {
  matchName: string;
  matchId: number;
  marketId?: string;
  openDate: string;
  maxBet?: number;
  minBet?: number;
  maxBetRate?: number;
  minBetRate?: number;
  league?: string;
  inPlay: boolean;
  team1Back?: number;
  team1Lay?: number;
  team2Back?: number;
  team2Lay?: number;
  drawBack?: number;
  drawLay?: number;
  bm?: boolean;
  F?: boolean;
  GM?: boolean;
  SM?: boolean;
  channelId?: number;
}