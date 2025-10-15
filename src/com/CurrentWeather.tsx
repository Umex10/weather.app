import type { WeatherAPIReply } from "../types/weather";
import type { ForecastAPIReply } from "../types/forecast";
import type { Unit } from "../types/unit";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { convertTemp } from "../utils/convertTemp";
import { localDate } from "../utils/date";
import CardFirstStyle from "../styles/CardFirstStyle";
import { forecastSummary } from "../utils/forecastSummary";

type CurrentWeatherArgs = {
  weather: WeatherAPIReply | null;
  forecast: ForecastAPIReply | null;
};

const CurrentWeather = ({ weather, forecast }: CurrentWeatherArgs) => {
  const [unit, setUnit] = useState<Unit>("celsius");
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    if (!weather || !forecast) return;

    // Init data
    const celsiusTemp = weather.main.temp;
    setTemp(Math.round(celsiusTemp));
  }, [weather, forecast]);

  if (!weather || !forecast) {
    return;
  }

  const symbol: Record<Unit, string> = {
    celsius: "°C",
    kelvin: "K",
    fahrenheit: "F",
  };

  //local date
  const local: string = localDate(weather.timezone);

  // feels like
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
      <div className="flex flex-col gap-5 p-4">
        <div className="flex flex-row items-start justify-between">
          <div>
            <p className="text-md text-gray-500/90">Current Weather</p>
            <p className="text-xl dark:text-white">{local}</p>
          </div>
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

        <div className="w-full flex flex-row items-center justify-start gap-10 md:gap-14
        lg:gap-10">
          <div className="flex flex-row items-center gap-0">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather icon"
              className="-ml-3 md:-ml-5 w-20 h-20 md:w-32 md:h-32
              dark:filter-none filter invert"
            />

            <div className="relative">
              <p className="text-black dark:text-white 
              text-5xl md:text-6xl font-extrabold">{temp}</p>
              <p
                className="absolute top-0 -right-4
            text-violet-500 text-md"
              >
                {symbol[unit]}
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-violet-500 text-[13px] lg:text-lg">{desc}</p>
            <p className="text-gray-800  dark:text-gray-400 text-[13px] lg:text-lg">{feelsLikeText}</p>
          </div>
        </div>

        <p className="text-gray-800  dark:text-gray-400 text-[13px] lg:text-lg
        text-nowrap">{forecastText}</p>
      </div>
    </CardFirstStyle>
  );
};

export default CurrentWeather;
