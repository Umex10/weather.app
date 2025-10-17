//? type of the object "weather" which we load from the api

export type ForecastAPIReply = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}