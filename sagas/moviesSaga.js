import { takeEvery, put } from 'redux-saga/effects';
import { GET_MOVIE, gettingMovies } from '../actions/MoviesActions';

function getMovies(){
  yield put(gettingMovies(true));
  try {
    const response = yield //TO DO
    yield put(gettingMovies(false, response.result))
  } catch (error) {
    yield put(gettingMovies(false, null, response.error.message));
  }
  

}

export default function* moviesSaga(){
  takeEvery(GET_MOVIE,)

}
