import { useEffect, useState } from "react";
import type { AirQualityAPIReply } from "../../types/air";

//? Function, to get the data from the api. Return the lattitude values

export const useAir = (lat: number, lon: number) => {
  const [air, setAir] = useState<AirQualityAPIReply | null>(null);
  const [airLoading, setAirLoading] = useState(true);
  const [airError, setAirError] = useState<string | null>(null);

  const baseURL = "https://api.openweathermap.org/data/2.5";
  const key = import.meta.env.VITE_WEATHER_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setAirError(null); //Reset value
      try {
        const result = await fetch(
          `${baseURL}/air_pollution?lat=${lat}&lon=${lon}&appid=${key}
`
        );
        const data = await result.json();

        if (
          data.cod === 404 ||
          data.cod === "404" ||
          (typeof data.message === "string" &&
            data.message.toLowerCase() === "No city found with the given lat and lon!")
        ) {
          setAir(null);
          setAirError("City not found.");
        } else {
          setAir(data);
          setAirError(null);
        }
      } catch (error) {
        console.error(error);
        setAirError("Failed to fetch air data");
      } finally {
        setAirLoading(false);
      }
    };

    fetchData();
  }, [lat, lon]);

  return { air, airLoading, setAirLoading, airError };
};
