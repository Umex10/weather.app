import type { ForecastAPIReply } from "../../types/forecast";

 export function forecastTomorrowData(forecast: ForecastAPIReply) {
   
 const today = new Date().getDate();
 const tomorrow = new Date().getDate() + 1;

  const forecastToday = forecast.list.filter(item => {
    const itemDate = new Date(item.dt_txt);
    // We do not want to include today, since its already displayed at "Today"
    return itemDate.getDate() !== today && itemDate.getDate() !== tomorrow;
  })

  if (forecastToday.length === 0) {
    return "No forecast data available yet. Sadge..."
  }

  

  return forecastToday;
 

 }