
import { createContext } from "react";
import type { WeatherAPIReply } from "../../types/weather";


type WeatherContextArgs = {
  weather: WeatherAPIReply | null;
  setWeather: (newValue: WeatherAPIReply | null) => void; 
  weatherLoading: boolean;
  weatherError: string | null;
};
export const WeatherContext = createContext<WeatherContextArgs>({
  weather: null,
  setWeather: () => {},
  weatherLoading: false,
  weatherError: null
});
