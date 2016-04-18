import { combineReducers } from 'redux';
<<<<<<< HEAD
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer,
=======
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
>>>>>>> 7e22fa01c4abe8750501e16576e2fcd8f6551d8e
});

export default rootReducer;
