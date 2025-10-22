import {useEffect, useState } from "react";
import type { Unit } from "../types/unit";
import { useWeatherContext } from "../context/hooks/useWeatherContext";
import { useForecastContext } from "../context/hooks/useForecastContext";
import { convertTemp } from "../utils/convertTemp";
import { minMaxValue } from "../utils/minMaxValue";
import { useUnitContext } from "../context/hooks/useUnitContext";
import { unitSymbols } from "../utils/unitSymbols";
import { localOffset } from "../utils/localOffset";
import { forecastTodayData } from "../utils/forecastDateUtils/forecastTodayData";

//? This one will fill the data inside CurrentWeather react element

export function useCertainWeatherData() {
  // This will keep track what unit is currently displayed -> fahrenheit, celcius or kelvin
  const {unit, setUnit} = useUnitContext();
  const [temp, setTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
 
  // Using the context values, so I don't create a argument hell stack
  const { weather } = useWeatherContext();
  const { forecast } = useForecastContext();
  // Initializes the current temp
  useEffect(() => {
    if (weather && forecast) {
      //Update main temp
      setTemp(Math.round(weather.main.temp));

      // feels like text
      setFeelsLike(Math.round(weather.main.feels_like));

      const forecastToday = forecastTodayData(forecast);

      if (!forecastToday || typeof forecastToday === "string") return;

      const minMax = minMaxValue(forecastToday);
      if (!minMax) {
        return;
      }
      const {minTempValue, maxTempValue} = minMax;
      
      setMinTemp(minTempValue);
      setMaxTemp(maxTempValue);
    }
  }, [weather, forecast]);

  if (!weather || !forecast) return;

  const symbols = unitSymbols;

  // local date text
  const local: string = localOffset(weather.timezone);

  // desc of the current weather
  const desc: string = weather.weather[0].main;

  // icon which symbolizes current weather
  const icon: string = weather.weather[0].icon;
  

  // Update units wherever units are used
  function handleUnit(newUnit: Unit) {
    const oldUnit = unit;
    setUnit(newUnit);

    setTemp(convertTemp(temp, oldUnit, newUnit));

    const feelsLikeValue = convertTemp(feelsLike, oldUnit, newUnit);
    setFeelsLike(Math.round(feelsLikeValue));

    const convertMinTemp = convertTemp(minTemp, oldUnit, newUnit);
    const convertMaxTemp = convertTemp(maxTemp, oldUnit, newUnit);

    
    setMinTemp(convertMinTemp);
    setMaxTemp(convertMaxTemp);
  }

  return {
    unit,
    temp,
    feelsLike,
    local,
    desc,
    icon,
    minTemp,
    maxTemp,
    symbols,
    handleUnit,
  };
}
