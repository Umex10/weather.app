import { useContext } from "react";

import { CityContext } from "../context/contexts/CityContext";
import { useSearchContext } from "../context/hooks/useSearchContext";

  //? Eventhandling for the input react element
  export function useEvents() {
    
   // Variables, which holds the context to be able to update on several places
  const { input, setInput } = useSearchContext();
  const { setCity } = useContext(CityContext);

  /* Custom handling input, to be able to actually write something into it
   This allows us more control */
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  // This will handle the click on the Search icon
  function handleClickIcon() {
    if (input.trim() === "") {
      alert("You didn't define a city");
      return;
    }
    setCity(input);
    setInput("");
  }

  // This will handle the keydown event "Enter"
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setCity(input);
      setInput("");
    }
  }

  return {handleInput, handleClickIcon, handleKeyDown}
  }
  
  