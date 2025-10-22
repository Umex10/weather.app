import { useEffect, useRef, useState } from "react";
import { unitSymbols } from "../../utils/unitSymbols";
import { useUnitContext } from "../../context/hooks/useUnitContext";
import { convertTemp } from "../../utils/convertTemp";
import type { ForecastItem } from "../../types/forecastItem";
import { extractLocal } from "../../utils/extractLocal";
import type { Unit } from "../../types/unit";

type ForecastCardArgs = {
  className: string;
  forecastItem: ForecastItem;
};

const ForecastCard = ({ className, forecastItem }: ForecastCardArgs) => {

  const mainTemp = forecastItem.main.temp;

  const [temp, setTemp] = useState(mainTemp);
  const { unit } = useUnitContext();
  const oldUnit = useRef<Unit>("celsius");

  const icon = forecastItem.weather[0].icon;
  const desc = forecastItem.weather[0].main;
  const local = extractLocal(forecastItem.dt_txt);
  const wind = forecastItem.wind.speed;
  const humidity = forecastItem.main.humidity;

  useEffect(() => {
    // Will handle the convertion between celsius -> fahrenheit and kelvin
    if (oldUnit.current !== unit) {
      setTemp(convertTemp(temp, oldUnit.current, unit));
      oldUnit.current = unit;
    }
  }, [unit, temp]);

   // Ensures that mainTemp will also be updated and triggers rerendering of the com
   // f.e: for a new city given by the user
  useEffect(() => {
    setTemp(mainTemp);
  }, [mainTemp]);


  const windKmh = Math.round(wind * 3.6);

  const symbols = unitSymbols;

  return (
    // whole Container with border-b on mobile
    <div
      className={`w-auto md:w-full bg-transparent border
     border-gray-400/50 p-4 md:p-0 rounded-2xl
     min-w-[130px] max-w-[150px]
     md:max-w-none md:rounded-none md:border-x-0 
     md:border-t-0 md:border-b border-b-gray-400/50
      ${className}`}
    >
      {/* Necessary for mobile to center it in the middle */}
      <div className="flex flex-col items-center md:block">
        {/* Main container for arrangement of the items */}
        <div
          className="flex flex-col h-full
      md:flex-row items-start md:items-center
      md:justify-between gap-2 md:gap-4  lg:px-4"
        >
          {/* Left section */}
          <div className="flex flex-col items-start md:flex-row gap-2 md:items-center">
            <div
              className="-mt-2.5 -ml-3.5 md:ml-0 md:mt-0 
          w-16 h-14 md:w-20 md:h-20 flex-shrink-0"
            >
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="Weather icon"
                className="w-full h-full object-contain"
              />
            </div>

            <div
              className="
          md:w-10 -mt-2 md:mt-0"
            >
              <p className="text-lg md:text-[16px]">{local}</p>
              <p className="text-sm md:text-[12px] text-violet-500">{desc}</p>
            </div>
          </div>

          {/* Mid line */}
          <div className="hidden md:inline-block w-0.5 h-8 bg-gray-400/50 self-center"></div>

          {/* Right Section */}
          <div
            className="flex flex-col items-start gap-2 md:gap-3 lg:flex-row
         md:items-center lg:gap-8"
          >
            <div className="relative">
              <p className="text-4xl font-extrabold">{Math.round(temp)}</p>
              <span
                className="absolute top-0 -right-4
            text-md text-violet-500"
              >
                {symbols[unit]}
              </span>
            </div>

            <div className="text-xs text-nowrap">
              <p>{`Wind: ${windKmh} km/h`}</p>
              <p>{`Humidity: ${humidity}%`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
