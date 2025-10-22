
import { useWeatherContext } from "../../context/hooks/useWeatherContext";
import { useForecastContext } from "../../context/hooks/useForecastContext";
import type { ReactNode } from "react";

type WeatherErrorChecksArgs = {
  children: ReactNode;
};

//? Will check every error that weather and forecast can throw, and display it if so...
export const WeatherErrorChecks = ({ children }: WeatherErrorChecksArgs) => {
  const { weather, weatherLoading, weatherError } = useWeatherContext();
  const { forecast, forecastLoading, forecastError } = useForecastContext();

    if (weatherLoading || forecastLoading || weatherError || forecastError || !weather || !forecast) {
    return (
      <div className="w-full flex items-center justify-center">
        <p className="text-3xl text-center text-red-400">
          {weatherLoading
            ? "Loading weather and forecast data..."
            : weatherError
            ? weatherError
            : forecastError
            ? forecastError
            : "No weather data available"}
        </p>
      </div>
    );
  }

  // Only display if everything is okay...
  return <>{children}</>;
};