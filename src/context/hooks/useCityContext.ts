import { useContext } from "react"
import { CityContext } from "../contexts/CityContext"

//? Custom hook to be able to use the context in a more readable way

export const useCityContext = () => {
  const context = useContext(CityContext);
  if (!context) throw new Error("useCityContext must be used inside CityContextGiver")
    return context;
}

