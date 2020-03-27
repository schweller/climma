import axios from 'axios'

type GetWeather = {
  key?: string;
  city?: string;
}

// OpenWeatherMap conditions
// Conditions https://openweathermap.org/weather-conditions

const getWeatherByCity = async ({key, city}: GetWeather) => {
  
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)

  return { data: response.data, city }
}

export {
  getWeatherByCity
}
