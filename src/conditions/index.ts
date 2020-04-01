interface Conditions {
  [key: number]: string;
}

// OpenWeatherMap conditions
// Conditions https://openweathermap.org/weather-conditions
const conditions: Conditions = {
  // Thunderstorm
  200: 'Thunderstorm with light rain',
  201: 'Thunderstorm with rain',
  202: 'Thunderstorm with heavy rain',
  210: 'Light Thunderstorm',
  211: 'Thunderstorm',
  212: 'Heavy Thunderstorm',
  221: 'Ragged Thunderstorm',
  230: 'Thunderstorm with light drizzle',
  231: 'Thunderstorm with drizzle',
  232: 'Thunderstorm with heavy drizzle',

  // Drizzle
  300: 'Light drizzle',
  301: 'Drizzle',
  302: 'Heavy drizzle',
  310: 'Light drizzle rain',
  311: 'Drizzle rain',
  312: 'Heavy drizzle rain',
  313: 'Shower rain and drizzle',
  314: 'Heavy shower rain and drizzle',
  321: 'Shower drizzle',

  // Rain
  500: 'Light rain',
  501: 'Moderate rain',
  502: 'Heavy rain',
  503: 'Very heavy rain',
  504: 'Extreme rain',
  511: 'Freezing rain',
  520: 'Light shower rain',
  521: 'Shower rain',
  522: 'Heavy shower rain',
  531: 'Ragged shower rain',

  // Snow
  600: 'Light snow',
  601: 'Snow',
  602: 'Heavy snow',
  611: 'Sleet',
  612: 'Light shower sleet',
  613: 'Shower sleet',
  615: 'Light rain and snow',
  616: 'Rain and snow',
  620: 'Light shower snow',
  621: 'Shower snow',
  622: 'Heavy shower snow',

  // Atmosphere
  701: 'Mist',
  711: 'Smoke',
  721: 'Haze',
  731: 'Dust whirls',
  741: 'Fog',
  751: 'Sand',
  761: 'Dust',
  762: 'Ash',
  771: 'Squall',
  781: 'Tornado',

  // Clear
  800: 'Clear sky',

  // Clouds
  801: 'Few Clouds',
  802: 'Scattered Clouds',
  803: 'Cloudy',
  804: 'Very Cloudy',
};

const getCondition = (id: number | undefined) => {
  if (id === undefined) {
    return { condition: 'Unknown', id: 0 };
  }

  return { condition: conditions[id], id };
};

export default getCondition;
