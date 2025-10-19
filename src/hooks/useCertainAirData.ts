import { useWeatherContext } from "../context/hooks/useWeatherContext";
import { useAir } from "./Api/useAir";

export function useCertainAirData() {

 const { weather } = useWeatherContext();

  if (!weather || typeof weather === "string") return null;

  const { lat, lon } = weather.coord;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { air } = useAir(lat, lon);

  // air quality
  if (!air) return;
  const aqi = air.list[0].main.aqi;
  
  const aqiClassified = (aqi: number) => {
    switch (aqi) {
      case 1:
        return "Very Good";
      case 2:
        return "Good";
      case 3:
        return "Moderate";
      case 4:
        return "Unhealthy";
      case 5:
        return "Hazardous";
      default:
        return "Unknown"
    }
  };
  const aqiDesc = aqiClassified(aqi);

  // % of clouds
  const cloudiness = weather.clouds.all;

  // How good the visibility measured in meters
  const visibility = weather.visibility;
  const visibilityKM = Math.round((visibility / 1000) * 10) / 10;
  const visiblityClassified = (v: number) => {
    if (v >= 10) return "Clear";
    if (v >= 5) return "Moderate";
    return "Low";
  };

  const visibilityDesc = visiblityClassified(visibilityKM);

  const humidity = weather.main.humidity;

  const windMS = weather.wind.speed;
  const windKmh = Math.round(windMS * 3.6);

  // rain object is not available if it doesn't rain in the given city
  const rain = weather.rain?.["3h"] ?? 0;
  const rainDesc = (mm: number) => {
    if (mm === 0) return "No rain";
    if (mm < 1) return "Light";
    if (mm < 5) return "Moderate";
    return "Heavy";
  };

  const rainAmount = rainDesc(rain);

  return {
    aqiDesc,
    cloudiness,
    visibilityDesc,
    humidity,
    windKmh,
    rainAmount
  }
}