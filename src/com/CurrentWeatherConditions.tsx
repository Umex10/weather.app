import {
  TiEye,
  TiWeatherCloudy,
  TiWeatherShower,
  TiWeatherWindy,
  TiWeatherWindyCloudy,
} from "react-icons/ti";
import OneCondition from "./OneCondition";
import { WiHumidity } from "react-icons/wi";
import { useCertainAirData } from "../hooks/useCertainAirData";

const CurrentWeatherConditions = () => {


  const data = useCertainAirData();

    if (!data) {
      return null;
    }

  const {
    aqiDesc,
    windKmh,
    humidity,
    visibilityDesc,
    rainAmount,
    cloudiness
  } = data;
 
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3
     w-full gap-4 min-w-[300px] max-w-md md:max-w-none ">
      <OneCondition
        name="Air Quality"
        value={aqiDesc}
        symbol={<TiWeatherWindyCloudy></TiWeatherWindyCloudy>}
      ></OneCondition>
      <OneCondition
        name="Wind"
        value={`${windKmh} km/h`}
        symbol={<TiWeatherWindy></TiWeatherWindy>}
      ></OneCondition>
      <OneCondition
        name="Humidity"
        value={`${humidity}%`}
        symbol={<WiHumidity></WiHumidity>}
      ></OneCondition>
      <OneCondition
        name="Visibility"
        value={visibilityDesc}
        symbol={<TiEye></TiEye>}
      ></OneCondition>
      <OneCondition
        name="Rain Chance"
        value={`${rainAmount}`}
        symbol={<TiWeatherShower></TiWeatherShower>}
      ></OneCondition>
      <OneCondition
        name="Cloudiness"
        value={`${cloudiness}%`}
        symbol={<TiWeatherCloudy></TiWeatherCloudy>}
      ></OneCondition>
    </section>
  );
};

export default CurrentWeatherConditions;
