import { useEffect, useState } from "react";
import type { ForecastAPIReply } from "../types/forecast";

export const useForecast = (city: string, key: string) => {
  const [forecast, setForecast] = useState<ForecastAPIReply | null>(null);
  const [loading, setLoading] = useState(true);

  const baseURL = "https://api.openweathermap.org/data/2.5";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${baseURL}/forecast?q=${city}&units=metric&appid=${key}`);
        const data = await result.json();
        setForecast(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [city, key]);

  return { forecast, loading };
}

