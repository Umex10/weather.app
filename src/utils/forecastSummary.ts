import type { ForecastAPIReply } from "../types/forecast";

//? This will calculate the min temp
//? and max temp of multiple datasets, which will receive from the api

 export function forecastSummary(forecast: ForecastAPIReply) {
   
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
 
