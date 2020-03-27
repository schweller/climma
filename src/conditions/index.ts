export interface Conditions {
  [key: number]: string
}

// OpenWeatherMap conditions
// Conditions https://openweathermap.org/weather-conditions

const conditions: Conditions = {

  // Thunderstorm
  200: "Thunderstorm with light rain",
  201: "Thunderstorm with rain",
  202: "Thunderstorm with heavy rain",
  210: "Light Thunderstorm",
  211: "Thunderstorm",
  212: "Heavy Thunderstorm",
  221: "Ragged Thunderstorm",
  230: "Thunderstorm with light drizzle",
  231: "Thunderstorm with drizzle",
  232: "Thunderstorm with heavy drizzle",

  // Drizzle
  300: "Light drizzle",
  301: "Drizzle",
  302: "Heavy drizzle",
  310: "Light drizzle rain",
  311: "Drizzle rain",
  312: "Heavy drizzle rain",
  313: "Shower rain and drizzle",
  314: "Heavy shower rain and drizzle",
  321: "Shower drizzle",

  // Clouds
  801: "Few Clouds",
  802: "Scattered Clouds",
  803: "Cloudy",
  804: "Very Cloudy"
}

export default conditions
