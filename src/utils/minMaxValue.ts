import type { ForecastItem } from "../types/forecastItem";

//? Use all indices that have the current day, and calculate min and max value
 export function minMaxValue(forecast: ForecastItem[]) {

      if (!forecast || typeof forecast === "string") return;

      const minTempValue = Math.round(
        Math.min(...forecast.map((item) => item.main.temp_min))
      );
      const maxTempValue = Math.round(
        Math.max(...forecast.map((item) => item.main.temp_max))
      );

      return {minTempValue, maxTempValue};
  }