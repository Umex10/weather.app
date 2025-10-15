import type { Unit } from "../types/unit";

export function convertTemp(value: number, from: Unit, to: Unit): number {
  if (from === to) return Math.round(value);

  if (from === "celsius" && to === "kelvin") {
    return Math.round(value + 273.15);
  } else if (from === "celsius" && to === "fahrenheit") {
    return Math.round(value * 9/5 + 32);
  } else if (from === "kelvin" && to === "celsius") {
    return Math.round(value - 273.15);
  } else if (from === "kelvin" && to === "fahrenheit") {
    return Math.round((value - 273.15) * 9/5 + 32);
  } else if (from === "fahrenheit" && to === "celsius") {
    return Math.round((value - 32) * 5/9);
  } else if (from === "fahrenheit" && to === "kelvin") {
    return Math.round((value - 32) * 5/9 + 273.15);
  }
  return value;
}





