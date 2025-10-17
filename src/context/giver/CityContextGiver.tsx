import { useEffect, useState, type ReactNode } from "react";
import { CityContext } from "../contexts/CityContext";
import { useUsersCity } from "../../hooks/data/useUsersCity";

type CityContextGiverArgs = {
  children: ReactNode;
}

//? Return a react element and all children will inherit city context

export const CityContextGiver = ({ children }: CityContextGiverArgs) => {
  const lastSearchedCity = localStorage.getItem("lastSearchedCity");
  const defaultCity = lastSearchedCity || "Vienna";
  const [city, setCity] = useState(defaultCity);

  // Ask the user if it is ok to use the location of the pc
  const {usersCity} = useUsersCity();
  
  useEffect(() => {
  const localstorageCity = localStorage.getItem("usersLocation");

  /* 1. Location of pc (using variable because it may be faster then geoLocation request)
     2. Actual reply of the geoLocation request. 
     3. Last Searched city on the last visit of the website
     4. default City: Vienna */
  const initialCity = usersCity || localstorageCity || defaultCity;

  //set the context for all children
  setCity(initialCity);
  }, [usersCity, defaultCity])
  
  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};