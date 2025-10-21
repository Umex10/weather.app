import { createContext} from "react";
import type { Unit } from "../../types/unit";

type UseUnitContextArgs = {
  unit: Unit;
  setUnit: (name:Unit) => void;
  oldUnit: Unit;
  setOldUnit: (name:Unit) => void;
}

export const UnitContext = createContext<UseUnitContextArgs>({
  unit: "celsius",
  setUnit: () => {},
  oldUnit: "celsius",
  setOldUnit: () => {}
});

