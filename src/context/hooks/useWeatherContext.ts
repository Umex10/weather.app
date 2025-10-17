import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

//? Custom hook to be able to use the context in a more readable way
export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useSearch must be used within a WeatherContextGiver");
  return context;
};