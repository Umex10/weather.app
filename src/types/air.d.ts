//? type of the object "air" which we load from the api

export type AirQualityAPIReply = {
  coord: {
    lon: number;
    lat: number;
  };
  list: {
    main: {
      aqi: number; // 1-5
    };
    components: {
      co: number;
      no: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      nh3: number;
    };
    dt: number; // Unix-Zeit
  }[];
};