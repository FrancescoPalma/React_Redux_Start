<<<<<<< HEAD
import axios from 'axios';
const API_KEY = '8290776395f42250f829a85517188898';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
=======
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
>>>>>>> 7e22fa01c4abe8750501e16576e2fcd8f6551d8e
