import type { ForecastAPIReply } from "../types/forecast";

//? This will calculate the min temp
//? and max temp of multiple datasets, which will receive from the api

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

  return `In the next 3 hours, the temp will range from ${minTemp}°C to ${maxTemp}°C.`;
 }
 
