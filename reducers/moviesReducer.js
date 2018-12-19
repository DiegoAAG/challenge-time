import { GETTING_MOVIES } from '../actions/MoviesActions';

const initialState = {
  movies: [],
  gettingMovies: 'none',
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GETTING_MOVIES:
      let gettingMovies = 'none';
      let error;
      let { movies } = state;
      if (action.loading) gettingMovies = 'loading';
      if (action.error) {
        gettingMovies = 'error';
        error = action.error;
      }
      if (action.response){
        gettingMovies = 'success';
        movies = action.response;
      }
        return {
          ...state,
          gettingMovies,
          error,
          movies,
        };
    default:
      return state;
  }
}

export default moviesReducer;
