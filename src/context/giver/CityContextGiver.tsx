import { useEffect, useState, type ReactNode } from "react";
import { CityContext } from "../contexts/CityContext";
import { useUsersCity } from "../../hooks/Api/useUsersCity";

type CityContextGiverArgs = {
  children: ReactNode;
}

//? Return a react element and all children will inherit city context

export const CityContextGiver = ({ children }: CityContextGiverArgs) => {
  const lastSearchedCity = localStorage.getItem("lastSearchedCity");
   // get last searched city
  const defaultCity = lastSearchedCity || "Vienna";
  const [city, setCity] = useState(defaultCity);

  // Ask the user if it is ok to use the location of the pc
  const {usersCity} = useUsersCity();
  
  useEffect(() => {
  // Get location from pc of the user
  const localstorageCity = localStorage.getItem("usersLocation");

  if ((usersCity || localstorageCity) && city === defaultCity) {
  const initialCity = usersCity || localstorageCity || defaultCity;
  setCity(initialCity);
}
  }, [usersCity, defaultCity, city])
  
  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};