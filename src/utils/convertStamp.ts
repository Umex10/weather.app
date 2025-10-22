

export function convertStamp(stamp: number) {

  const date = new Date(stamp * 1000); // Milliseconds
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}