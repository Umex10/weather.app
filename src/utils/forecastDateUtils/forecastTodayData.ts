import type { ForecastAPIReply } from "../../types/forecast";

 export function forecastTodayData(forecast: ForecastAPIReply) {
   
 const today = new Date().getDate();

  const forecastToday = forecast.list.filter(item => {
    const itemDate = new Date(item.dt_txt);
    return itemDate.getDate() === today;
  })

  if (forecastToday.length === 0) {
    return "No forecast data available yet. Sadge..."
  }

  return forecastToday;
 

 }
 
