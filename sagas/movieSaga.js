import { takeEvery, put } from 'redux-saga/effects';
import { GET_MOVIE, gettingMovie } from '../actions/MovieActions';
import { getMovieFromApi, normalizeMovie} from '../services/MovieService';


function *getMovie({ movieId }) {
  yield put(gettingMovie(true));
  try {
    const response = yield getMovieFromApi(movieId);
    const movie = yield normalizeMovie(response);
    yield put(gettingMovie(false, movie));
  } catch (error) {
    console.info(error);
    yield put(gettingMovie(false, null, error.message));
  }
  

}

export default function *movieSaga() {
  yield takeEvery(GET_MOVIE, getMovie)
};
