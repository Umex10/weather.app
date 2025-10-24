import { useEffect, useState } from "react";
import type { WeatherAPIReply } from "../../types/weather";

//? Function, to get the data from the api

export const useCurrentWeather = (city: string) => {
  const [weather, setWeather] = useState<WeatherAPIReply | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  const baseURL = "https://api.openweathermap.org/data/2.5";
  const key = import.meta.env.VITE_WEATHER_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setWeatherError(null); //Reset value
      const cleanedCity = city.trim().replace(/\s+/g, " ").toLowerCase();

      const encodedCity = encodeURIComponent(cleanedCity);
      try {
        const result = await fetch(
          `${baseURL}/weather?q=${encodedCity}&units=metric&appid=${key}`
        );
        const data = await result.json();

        if (
          data.cod === 404 ||
          data.cod === "404" ||
          (typeof data.message === "string" &&
            data.message.toLowerCase() === "city not found")
        ) {
          setWeather(null);
          setWeatherError("City not found.");
        } else {
          localStorage.setItem("lastSearchedCity", city);
          setWeather(data);
          setWeatherError(null);
        }
      } catch (error) {
        console.error(error);
        setWeatherError("Failed to fetch weather data");
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchData();
  }, [city, key]);

  return { weather, setWeather, weatherLoading, weatherError };
};
