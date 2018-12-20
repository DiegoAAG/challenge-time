import { GETTING_MOVIE } from '../actions/MovieActions';

const initialState = {
  movie: {},
  gettingMovie: 'none',
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GETTING_MOVIE:
      let gettingMovie = 'none';
      let error;
      let { movie } = state;
      if (action.loading) gettingMovie = 'loading';
      if (action.error) {
        gettingMovie = 'error';
        error = action.error;
      }
      if (action.response){
        gettingMovie = 'success';
        movie = action.response;
      }
        return {
          ...state,
          gettingMovie,
          error,
          movie,
        };
    default:
      return state;
  }
}

export default movieReducer;
