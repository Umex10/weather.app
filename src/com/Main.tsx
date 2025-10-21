import SearchCity from "./SearchCity";
import { useEvents } from "../hooks/useEvents";
import { WeatherContextGiver } from "../context/giver/WeatherContextGiver";
import { ForecastContextGiver } from "../context/giver/ForecastContextGiver";
import WeatherCityDetails from "./WeatherCityDetails";
import { WeatherErrorChecks } from "./WeatherErrorChecks";
import { Navigate, Route, Routes } from "react-router-dom";
import ForecastCityDetails from "./ForecastCityDetails";
import { UnitContextGiver } from "../context/giver/UnitContextGiver";

//? Main will hold the main content of the website.
//? later there will be "Routers" to Main will manage it too.

const Main = () => {
  /* Variables which are necassary for the input element. 
  Since we have to different input elements, this is needed to note duplicate the code*/
  const { handleInput, handleClickIcon, handleKeyDown } = useEvents();

  return (
    <main
      id="main"
      className="
        w-full md:flex flex-col
       md:h-screen
        pt-32 px-4 pb-6
        md:px-0 md:pl-36 md:pt-6"
    >
    
      {/*  allows us to use the weather data everywhere  */}
      <WeatherContextGiver>
        {/*  allows us to use the forecast data everywhere  */}
        <ForecastContextGiver>
          <SearchCity
            handleInput={handleInput}
            handleClickIcon={handleClickIcon}
            handleKeyDown={handleKeyDown}
          ></SearchCity>
          {/*  Will check if a error occured on weather or forecast  */}
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/weather"></Navigate>}
            ></Route>
            <Route
              path="/weather"
              element={
                <div className="md:flex-1 md:flex flex-row gap-8 h-full">
                  <UnitContextGiver>
                  <WeatherErrorChecks>
                    <WeatherCityDetails></WeatherCityDetails>
                  </WeatherErrorChecks>
                  <ForecastCityDetails></ForecastCityDetails>
                  </UnitContextGiver>
                </div>
              }
            ></Route>
          </Routes>
        </ForecastContextGiver>
      </WeatherContextGiver>
    </main>
  );
};

export default Main;
