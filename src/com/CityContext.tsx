import { useState, type ReactNode } from "react";
import { createContext} from "react";

type UseCityContextArgs = {
  city: string;
  setCity: (name:string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CityContext = createContext<UseCityContextArgs>({
  city: "",
  setCity: () => {}, // leere Funktion als Default
});

type CityContext = {
  children: ReactNode;
}

export const CityContextGiver = ({ children }: CityContext) => {
  const [city, setCity] = useState("Vienna");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};