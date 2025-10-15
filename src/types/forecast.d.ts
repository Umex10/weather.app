export interface ForecastAPIReply {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}