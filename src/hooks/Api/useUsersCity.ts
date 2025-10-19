

//? Function, to get the data from the api

import { useEffect, useState } from "react";


//? This will ask the user if we can use the location of his pc

export const useUsersCity = () => {
  const [usersCity, setUsersCity] = useState("");

  const baseURL = "https://api.openweathermap.org/data/2.5";
  const key = "2e2d71541ac141dc0c47e96be3e6714c";

  useEffect(() => {

    const usersLocation = localStorage.getItem("usersLocation");

    if (usersLocation) {
      setUsersCity(usersLocation)
      return;
    }

    if (!navigator.geolocation) {
      console.error("unterstütze das nicht...");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `${baseURL}/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
          );
          const data = await res.json();
          setUsersCity(data.name);
          console.log(data.name)
          localStorage.setItem("usersLocation", data.name);
        } catch (error) {
           console.log(error);
        }
      },
      (error) => {
        console.error("Geolocation Error:", error);
      }
    );
  }, []);
  return {usersCity}
};
