


interface CasinoResponse {
  mid: any;
  result: any;
  success: boolean;
  data: Datum[];
}

interface Datum {
  mid: string;
  sid: string;
  win: string;
  cards: string;
  desc: string;
  gtype: string;
}
