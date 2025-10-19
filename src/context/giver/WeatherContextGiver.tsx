import { WeatherContext } from "../contexts/WeatherContext";
import { useCurrentWeather } from "../../hooks/Api/useCurrentWeather";
import { type ReactNode } from "react";
import { useCityContext } from "../hooks/useCityContext";

type WeatherContextGiverArgs = {
  children: ReactNode;
} 
//? Return a react element and all children will inherit weather context
export const WeatherContextGiver = ({children }: WeatherContextGiverArgs) => {
  const { city } = useCityContext();
  const {weather, weatherLoading,
     setWeather, weatherError} = useCurrentWeather(city);

  return (
    <WeatherContext.Provider value={{ weather, setWeather, weatherLoading, weatherError }}>
      {children}
    </WeatherContext.Provider>
  );

}