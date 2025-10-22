import type { ForecastAPIReply } from "../../types/forecast";

 export function forecastTomorrowData(forecast: ForecastAPIReply) {
   
 const tomorrow = new Date().getDate() + 1;

  const forecastTomorrow = forecast.list.filter(item => {
    const itemDate = new Date(item.dt_txt);
    return itemDate.getDate() === tomorrow;
  })

  if (forecastTomorrow.length === 0) {
    return "No forecast data available yet. Sadge..."
  }

  return forecastTomorrow;
 

 }