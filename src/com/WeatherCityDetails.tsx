
import CurrentWeather from './CurrentWeather'
import CurrentWeatherConditions from './CurrentWeatherConditions'

//? This will hold every react element on the "weather" "main" page
const WeatherCityDetails = () => {
  return (
    <div className='w-full md:w-[60%] pt-[2rem]
    flex flex-col items-center gap-8 md:items-start'>
      {/* First card */}
      <CurrentWeather></CurrentWeather>
       {/* Second card */}
      <CurrentWeatherConditions></CurrentWeatherConditions>
    </div>
  )
}

export default WeatherCityDetails
