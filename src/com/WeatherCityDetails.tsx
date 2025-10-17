
import CurrentWeather from './CurrentWeather'

//? This will hold every react element on the "weather" "main" page
const WeatherCityDetails = () => {
  return (
    <div className='w-full md:w-[60%] pt-[2rem]
    flex flex-col items-center md:items-start'>
      <CurrentWeather></CurrentWeather>
    </div>
  )
}

export default WeatherCityDetails
