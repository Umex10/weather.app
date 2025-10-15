import { useContext } from "react";
import { useSearch } from "../context/SearchContext";
import Input from "./Input";
import { CityContext } from "./CityContext";
import { useCurrentWeather } from "../hooks/useCurrentWeather";
import { useForecast } from "../hooks/useForecast";
import CurrentWeather from "./CurrentWeather";
import { SiGooglemaps } from "react-icons/si";
import Icon from "./Icon";


const key = "2e2d71541ac141dc0c47e96be3e6714c";

const Main = () => {
  const { input, setInput } = useSearch();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }
  const { city, setCity } = useContext(CityContext);

  function handleClickIcon() {
    if (input.trim() === "") {
      console.log("The input field is empty");
      return;
    } else {
      console.log(input);
    }
    setCity(input);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      console.log(input);
      setCity(input);
      setInput("");
    }
  }

  const { weather, loading } = useCurrentWeather(city, key);
  const { forecast, loading: loadingForecast } = useForecast(city, key);

  if (loading || loadingForecast) return <p>Loading Data...</p>;
  if (!weather || !forecast)
    return <p className="pt-32 text-center text-white text-xl">No Data could have been loaded on the city: {city}</p>;

  return (
    <main id="main" className="flex flex-row">
      <div className="w-full flex flex-col items-center md:items-start px-4
       md:px-0 pt-32 md:pl-36 md:pt-6 gap-8 md:w-[60%]">
        <div className="flex flex-row gap-4 items-center">
          <Input
            className="hidden md:flex items-center
             relative w-full md:max-w-[300px]"
            handleInput={handleInput}
            handleClickIcon={handleClickIcon}
            handleKeyDown={handleKeyDown}
          ></Input>
         
             <Icon
             buttonClassName="flex flex-row"
             iconClassName="w-16 h-16 md:w-6 md:h-6 -mt-2 md:-mt-1"
             icon={<SiGooglemaps></SiGooglemaps>}
             label={weather.name}
             labelClassName="font-bebas uppercase text-7xl md:text-2xl">
             </Icon>
        </div>
        <CurrentWeather weather={weather} forecast={forecast}></CurrentWeather>
      </div>
    </main>
  );
};

export default Main;
