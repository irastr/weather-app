interface Weather {
  main: string;
  description: number;
  icon: string;
}

interface Temperature {
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface WeatherForecastResponse {
  weather: Weather[];
  main: Temperature;
  name: string;
}

/**
 * The components work with this simplified object.
 */
export interface WeatherForecast {
  description: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  location: string;
  icon: string;
}

/**
 * Fetches the weather forecast of the passed search term.
 * It can be a city or country
 */
const getWeatherForecast = async (q: string): Promise<WeatherForecast | undefined> => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=042559fc8f13bd0e86e557aa02965a24`);

    if (response.ok) {
      const json = await response.json() as WeatherForecastResponse;
      const { main: description, icon } = json.weather[0];
      const { temp, temp_max, temp_min } = json.main;

      return {
        description,
        temp,
        minTemp: temp_min,
        maxTemp: temp_max,
        location: json.name,
        icon,
      };
    }
  } catch {
    return undefined;
  }

  return undefined;
};

export default getWeatherForecast;
