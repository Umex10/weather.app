import { type ReactNode } from "react";
import { ForecastContext } from "../contexts/ForecastContext";
import { useForecast } from "../../hooks/data/useForecast";
import { useCityContext } from "../hooks/useCityContext";

type ForecastContextGiverArgs = {
  children: ReactNode;
} 

//? Return a react element and all children will inherit forecast context

export const ForecastContextGiver = ({children }: ForecastContextGiverArgs) => {
  const { city } = useCityContext();
  const {forecast,  setForecast, 
    forecastLoading, forecastError} = useForecast(city);

  return (
    <ForecastContext.Provider value={{ forecast, setForecast, forecastLoading, forecastError }}>
      {children}
    </ForecastContext.Provider>
  );

}