import { createContext } from "react";

type SearchContextArgs = {
  input: string;
  setInput: (newValue: string) => void;
}

export const SearchContext = createContext<SearchContextArgs | undefined>(undefined);




