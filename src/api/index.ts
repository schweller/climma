import axios from 'axios'

type GetWeather = {
  key?: string;
  city?: string;
}

export interface GetWeatherByCityData {
  weatherId: number;
  windDegree: number;
  windSpeed: number;
  minTemperature: number;
  maxTemperature: number;
  city?: string;
}

const getWeatherByCity = async ({key, city}: GetWeather): Promise<GetWeatherByCityData> => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)

  return {
    weatherId: response.data.weather[0].id,
    windDegree: response.data.wind.deg,
    windSpeed: response.data.wind.speed,
    minTemperature: response.data.main.temp_min,
    maxTemperature: response.data.main.temp_max,
    city
  }
}

export {
  getWeatherByCity
}
