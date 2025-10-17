//? type of the object "weather" which we load from the api

export type WeatherAPIReply =   {
  coord: {
    lon: number; // Längengrad
    lat: number; // Breitengrad
  };

  weather: {
    id: number;
    main: string; // z. B. "Clouds"
    description: string; // z. B. "scattered clouds"
    icon: string; // Icon-Code, z. B. "03n"
  }[];

  base: string;

  main: {
    temp: number; // Temperatur in Kelvin
    feels_like: number; // Gefühlt-Temperatur in Kelvin
    temp_min: number; // min. Temperatur in Kelvin
    temp_max: number; // max. Temperatur in Kelvin
    pressure: number; // Luftdruck in hPa
    humidity: number; // Luftfeuchtigkeit in %
    sea_level?: number; // optional, nur bei Meeresniveau
    grnd_level?: number; // optional, nur bei Bodenstation
  };

  visibility: number; // Sichtweite in Metern

  wind: {
    speed: number; // m/s
    deg: number; // Windrichtung in Grad
    gust?: number; // optional
  };

  clouds: {
    all: number; // Bewölkungsgrad in %
  };

  dt: number; // Zeitstempel (Unix)

  sys: {
    type?: number;
    id?: number;
    country: string; // Länder-Code, z. B. "AT"
    sunrise: number; // Sonnenaufgang (Unix)
    sunset: number; // Sonnenuntergang (Unix)
  };

  timezone: number; // Offset zu UTC in Sekunden
  id: number; // Stadt-ID
  name: string; // Stadtname
  cod: number; // Statuscode, z. B. 200
}