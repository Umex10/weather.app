import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

//? Custom hook to be able to use the context in a more readable way
export const useForecastContext = () => {
  const context = useContext(ForecastContext);
  if (!context) throw new Error("useSearch must be used within a ForecastContextGiver");
  return context;
};