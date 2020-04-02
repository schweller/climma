import axios from 'axios';

export interface GetWeatherByCityData {
  readonly weatherId: number;
  readonly windDegree: number;
  readonly windSpeed: number;
  readonly minTemperature: number;
  readonly maxTemperature: number;
  readonly rain: number;
  readonly city?: string;
}

type Params = {
  readonly key?: string;
  readonly city?: string;
};

export const getWeatherByCity = async ({
  key,
  city,
}: Params): Promise<GetWeatherByCityData> => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
  );

  const rain = response.data.rain || {};

  return {
    weatherId: response.data.weather[0].id,
    windDegree: response.data.wind.deg,
    windSpeed: response.data.wind.speed,
    minTemperature: response.data.main.temp_min,
    maxTemperature: response.data.main.temp_max,
    rain: rain['1h'] || 0,
    city,
  };
};
