import { useContext } from "react";
import { UnitContext } from "../contexts/UnitContext";

//? Custom hook to be able to use the context in a more readable way
export const useUnitContext = () => {
  const context = useContext(UnitContext);
  if (!context) throw new Error("useUnit must be used within a UnitContextGiver");
  return context;
};