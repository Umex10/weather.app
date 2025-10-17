import type { Unit } from "../types/unit";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { convertTemp } from "../utils/convertTemp";
import { localDate } from "../utils/date";
import CardFirstStyle from "../styles/CardFirstStyle";
import { forecastSummary } from "../utils/forecastSummary";
import { useWeatherContext } from "../context/hooks/useWeatherContext";
import { useForecastContext } from "../context/hooks/useForecastContext";


//? This will return the very first content on the main page "Weather"
const CurrentWeather = () => {
  
  // This will keep track what unit is currently displayed -> fahrenheit, celcius or kelvin
  const [unit, setUnit] = useState<Unit>("celsius");
  // Needed to be able to convert the unit to another. 
  const [temp, setTemp] = useState(0);

  // Using the context values, so I don't create a argument hell stack
  const { weather} = useWeatherContext();
  const { forecast} = useForecastContext();

  // Initializes the current temp
  useEffect(() => {
    if (weather) {
      setTemp(Math.round(weather.main.temp));
    }
  }, [weather]);

  
 if (!weather || !forecast) return;

  // We will use the "unit" variable in order to get the symbol
  const symbol: Record<Unit, string> = {
    celsius: "°C",
    kelvin: "K",
    fahrenheit: "F",
  };

  // local date text
  const local: string = localDate(weather.timezone);

  // feels like text
  const feelsLike: number = weather.main.feels_like;
  const feelsLikeText: string = `Feels like ${Math.round(feelsLike)} ${
    symbol[unit]
  }`;

  // desc
  const desc: string = weather.weather[0].main;

  // icon
  const icon: string = weather.weather[0].icon;

  // forecast
  const forecastText = forecastSummary(forecast);

  function handleUnit(newUnit: Unit) {
    const lastUnit = unit;
    setUnit(newUnit);
    setTemp(convertTemp(temp, lastUnit, newUnit));
  }

  return (
    <CardFirstStyle>
      {/*  Main styling div  */}
      <div className="flex flex-col gap-5 p-4">
        {/*  First Row  */}
        <div className="flex flex-row items-start justify-between">
          {/*  First row -> left side  */}
          <div>
            <p className="text-md text-gray-500/90">Current Weather</p>
            <p className="text-xl dark:text-white">{local}</p>
          </div>
          {/*  First row -> right side  */}
          <div className="relative inline-flex items-center">
            <select
              onChange={(e) => handleUnit(e.target.value as Unit)}
              className={`bg-transparent text-gray-500/90 dark:text-gray-500 
              appearance-none inline border border-gray-300/30 dark:border-gray-700/50 
              rounded-lg px-3 py-1 pr-8 transition-all duration-200 
              hover:border-violet-400 focus:outline-none focus:border-violet-500
              cursor-pointer ${unit === "fahrenheit" ? "pr-8" : "pr-0"}`}
            >
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
            </select>
            <RiArrowDropDownLine
              className={`w-7 h-7 dark:text-white
             absolute right-0 top-1/2 -translate-y-1/2  pointer-events-none
             `}
            ></RiArrowDropDownLine>
          </div>
        </div>

        {/*  Second row  */}
        <div
          className="w-full flex flex-row items-center justify-start gap-10 md:gap-14
        lg:gap-10"
        >
           {/*  icon, temp and the symbol unit on the left side */}
          <div className="flex flex-row items-center gap-0">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather icon"
              className="-ml-3 md:-ml-5 w-20 h-20 md:w-32 md:h-32
              dark:filter-none filter invert"
            />

            <div className="relative">
              <p
                className="text-black dark:text-white 
              text-5xl md:text-6xl font-extrabold"
              >
                {temp}
              </p>
              <p
                className="absolute top-0 -right-4
            text-violet-500 text-md"
              >
                {symbol[unit]}
              </p>
            </div>
          </div>

          {/*  desc and feelsLikeText on the right side */}
          <div className="flex flex-col">
            <p className="text-violet-500 text-[13px] lg:text-lg">{desc}</p>
            <p className="text-gray-800  dark:text-gray-400 text-[13px] lg:text-lg">
              {feelsLikeText}
            </p>
          </div>
        </div>

        {/*  third (last) row */}
        <p
          className="text-gray-800  dark:text-gray-400 text-[13px] lg:text-lg
        md:text-nowrap"
        >
          {forecastText}
        </p>
      </div>
    </CardFirstStyle>
  );
};

export default CurrentWeather;
