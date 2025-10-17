import Input from "./Input";
import Icon from "./Icon";
import { SiGooglemaps } from "react-icons/si";
import type { InputArgs } from "../types/input";
import { useCityContext } from "../context/hooks/useCityContext";

//? this will hold the input field as well as the icon and the city'S name on md: screens
//? this will display the icon as well as the city's name next to it on mobile

const SearchCity = ({handleInput, handleClickIcon,
   handleKeyDown}: InputArgs) => {

    // Using the context values, so I don't create a argument hell stack
    const {city} = useCityContext();

    function handleCityClick() {
      if (city) {
        const url = `https://www.google.com/maps/search/?api=1&query=${city}`
        window.open(url, "_blank")
      }
    }

  return (
        // input element for md: screens
        <div className="flex flex-row gap-4 justify-center
        md:justify-start items-center md:w-[60%]">
          <Input
            className="hidden md:flex items-center
             relative w-full md:max-w-[300px]"
            handleInput={handleInput}
            handleClickIcon={handleClickIcon}
            handleKeyDown={handleKeyDown}
          ></Input>
          {/* Googlemaps icon next to the city's name  */}
          {city && (
             <Icon
             buttonClassName="flex flex-row"
             iconClassName="w-11 h-11 md:w-6 md:h-6 -mt-2 md:-mt-1"
             icon={<SiGooglemaps></SiGooglemaps>}
             label={city}
             labelClassName="font-bebas uppercase text-3xl md:text-2xl w-full break-words"
             handleCityClick={handleCityClick}>
             </Icon>
          )}
            
        </div>
      
  )
}

export default SearchCity
