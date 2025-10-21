
import CurrentSun from './CurrentSun'
import CurrentWeather from './CurrentWeather'
import CurrentWeatherConditions from './CurrentWeatherConditions'


//? This will hold every react element on the "weather" "main" page
const WeatherCityDetails = () => {
  return (
    <div className='w-full h-full md:flex-[3] pt-[2rem]
    flex flex-col items-center gap-8 
    md:items-start'>
      {/* LEFT SIDE */}
      
      {/* First card */}
      <CurrentWeather></CurrentWeather>
       {/* Second card */}
      <CurrentWeatherConditions></CurrentWeatherConditions>
      {/* Third card */}
      <CurrentSun></CurrentSun>
    </div>
  )
}

export default WeatherCityDetails
