import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

//? Custom hook to be able to use the context in a more readable way
export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within a SearchContextGiver");
  return context;
};