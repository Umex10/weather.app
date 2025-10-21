import { createContext} from "react";

type UseCityContextArgs = {
  city: string;
  setCity: (name:string) => void;
}

export const CityContext = createContext<UseCityContextArgs>({
  city: "",
  setCity: () => {}
});

