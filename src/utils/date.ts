
//? Return the current local time of the city

export function localDate(timezoneOffset: number) {
  const localDate: Date = new Date(Date.now() + timezoneOffset * 1000);

  const hours: string = localDate.getUTCHours().toString().padStart(2, "0");
  const minutes: string = localDate.getUTCMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

