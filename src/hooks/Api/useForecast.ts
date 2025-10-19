import { useEffect, useState } from "react";
import type { ForecastAPIReply } from "../../types/forecast";

//? Function, to get the data from the api

export const useForecast = (city: string) => {
  const [forecast, setForecast] = useState<ForecastAPIReply | null>(null);
  const [forecastLoading, setForecastLoading] = useState(true);
  const [forecastError, setForecastError] = useState<string | null>(null);

  const baseURL = "https://api.openweathermap.org/data/2.5";
  const key = "2e2d71541ac141dc0c47e96be3e6714c";
  useEffect(() => {
    const fetchData = async () => {
      setForecastError(null); //Reset value
       const cleanedCity = city.trim().replace(/\s+/g, " ").toLowerCase();

      const encodedCity = encodeURIComponent(cleanedCity);
      try {
        
        const result = await fetch(
          `${baseURL}/forecast?q=${encodedCity}&units=metric&appid=${key}`
        );
        const data = await result.json();

       if (data.cod === 404 || data.cod === "404" ||  
        (typeof data.message === "string" && data.message.toLowerCase() === "city not found")) {
          setForecast(null);
          setForecastError("City not found.");
        } else {
          localStorage.setItem("lastSearchedCity", city);
          setForecast(data);
          setForecastError(null);
        }
      } catch (error) {
        console.error(error);
        setForecastError("Failed to fetch forecast data");
      } finally {
        setForecastLoading(false);
      }
    };
    fetchData();
  }, [city, key]);

  return { forecast, setForecast, forecastLoading, forecastError };
};
