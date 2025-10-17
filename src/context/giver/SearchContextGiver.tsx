import { useState } from "react";
import { SearchContext } from "../contexts/SearchContext";

type SearchContextGiverArgs = {
  children: React.ReactNode
}

//? Return a react element and all children will inherit input("value") context
export const SearchContextGiver = ({ children }:SearchContextGiverArgs) => {
  const [input, setInput] = useState("");

  return (
    <SearchContext.Provider value={{input, setInput}}>
    {children}
  </SearchContext.Provider>
  ) 
}