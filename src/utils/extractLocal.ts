
//? This is needed, because it is the easiest way to calculate hours/minutes of a
//?  forecast reply

export function extractLocal(dt_txt: string ){

  const [, timePart] = dt_txt.split(" "); // ["2025-10-21", "18:00:00"]
  const [hours, minutes] = timePart.split(":"); // ["18", "00", "00"]
  return `${hours}:${minutes}`; // "18:00"
}