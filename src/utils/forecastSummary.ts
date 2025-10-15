import type { ForecastAPIReply } from "../types/forecast";

 
 export function forecastSummary(forecast: ForecastAPIReply) {
   
 const today = new Date().getDate();

  const todayForecast = forecast.list.filter(item => {
    const itemDate = new Date(item.dt_txt);
    return itemDate.getDate() === today;
  })

  if (todayForecast.length === 0) {
    return "No forecast data available yet. Sadge..."
  }


  const minTemp = Math.round(Math.min(...todayForecast.map(item => item.main.temp_min)))
  const maxTemp = Math.round(Math.max(...todayForecast.map(item => item.main.temp_max)))

  return `The low will be ${minTemp}°C and the high will be ${maxTemp}°C.`;
 }
 
