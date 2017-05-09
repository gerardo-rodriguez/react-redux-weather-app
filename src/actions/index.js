import axios from 'axios';

const API_KEY = '69085c53a6ccf7e0d46834e1a86b0ca0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
    
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
