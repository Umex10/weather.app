import { useState } from "react";
import { UnitContext } from "../contexts/UnitContext";
import type { Unit } from "../../types/unit";

type UnitContextGiverArgs = {
  children: React.ReactNode
}

//? Return a react element and all children will inherit the unit as well as the old unit context
export const UnitContextGiver = ({ children }:UnitContextGiverArgs) => {
  const [unit, setUnit] = useState<Unit>("celsius");
  const [oldUnit, setOldUnit] = useState<Unit>("celsius")

  return (
    <UnitContext.Provider value={{unit, setUnit, oldUnit, setOldUnit}}>
    {children}
  </UnitContext.Provider>
  ) 
}