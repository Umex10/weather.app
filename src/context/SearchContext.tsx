import React, { createContext, useContext, useState } from "react";

type SearchContextArgs = {
  input: string;
  setInput: (newValue: string) => void;
}

const SearchContext = createContext<SearchContextArgs | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState("");

  return (
    <SearchContext.Provider value={{input, setInput}}>
    {children}
  </SearchContext.Provider>
  ) 
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("Context was not set")
  }

  return context
};

