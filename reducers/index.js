import movies from './moviesReducer';
import movie from './movieReducer';
import { combineReducers } from 'redux'

export default combineReducers({
  movies,
  movie,
});