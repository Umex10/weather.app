
import { createContext } from "react";
import type { ForecastAPIReply } from "../../types/forecast";

type ForecastContextArgs = {
  forecast: ForecastAPIReply | null;
  setForecast: (newValue: ForecastAPIReply | null) => void; 
  forecastLoading: boolean;
  forecastError: null | string;
}

export const ForecastContext = createContext<ForecastContextArgs>({
  forecast: null,
  setForecast: () => {},
  forecastLoading: false,
  forecastError: null
});
