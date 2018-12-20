import { takeEvery, put } from 'redux-saga/effects';
import { GET_MOVIES, gettingMovies } from '../actions/MoviesActions';
import { getMoviesFromApi, normalizeMoviesList} from '../services/MoviesService';


function *getMovies() {
  yield put(gettingMovies(true));
  try {
    const response = yield getMoviesFromApi();
    const movies = yield normalizeMoviesList(response.results);
    yield put(gettingMovies(false, movies));
  } catch (error) {
    console.info(error);
    yield put(gettingMovies(false, null, error.message));
  }
  

}

export default function *moviesSaga() {
  yield takeEvery(GET_MOVIES, getMovies)
};
