export interface ForecastItem {
  dt: number; // Unix timestamp in Sekunden

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };

  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];

  clouds: {
    all: number;
  };

  wind: {
    speed: number;
    deg: number;
    gust: number;
  };

  visibility: number;
  pop: number; // "probability of precipitation"
  
  sys: {
    pod: string; // "d" oder "n" für day/night
  };

  dt_txt: string; // z. B. "2025-10-21 18:00:00"
}