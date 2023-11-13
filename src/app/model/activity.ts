export interface Activity {
  title: string;
  timeframes: Timeframes
}

export interface Timeframes {
  daily: Timeframe;
  weekly: Timeframe;
  monthly: Timeframe;
}

export interface Timeframe {
  current: number;
  previous: number;
}
