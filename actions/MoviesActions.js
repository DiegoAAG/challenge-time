export const GET_MOVIES = 'GET_MOVIES';
export const GETTING_MOVIES = 'GETTING_MOVIES';

export function getMovies() {
  return {
    type: GET_MOVIES,
  };
}
export function gettingMovies(loading, response, error) {
  return {
    type: GETTING_MOVIES,
    loading,
    response,
    error,
  }
}