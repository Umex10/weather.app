import { useEffect, useState } from "react";
import type { WeatherAPIReply } from "../types/weather";

export const useCurrentWeather = (city: string, key: string) => {
  const [weather, setWeather] = useState<WeatherAPIReply | null>(null);
  const [loading, setLoading] = useState(true);

  const baseURL = "https://api.openweathermap.org/data/2.5";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${baseURL}/weather?q=${city}&units=metric&appid=${key}`);
        const data = await result.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [city, key]);

  return { weather, loading };
}

