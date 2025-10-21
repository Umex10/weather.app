import type { ForecastAPIReply } from "../types/forecast";
import { forecastTodayData } from "./forecastTodayData";

//? Use all indices that have the current day, and calculate min and max value
 export function minMaxValue(forecast: ForecastAPIReply) {
     // forecast
      const forecastToday = forecastTodayData(forecast);

      if (!forecastToday || typeof forecastToday === "string") return;

      const minTempValue = Math.round(
        Math.min(...forecastToday.map((item) => item.main.temp_min))
      );
      const maxTempValue = Math.round(
        Math.max(...forecastToday.map((item) => item.main.temp_max))
      );

      return {minTempValue, maxTempValue};
  }