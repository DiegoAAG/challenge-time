export const GET_MOVIE = 'GET_MOVIE';
export const GETTING_MOVIE = 'GETTING_MOVIE';

export function getMovie(movieId) {
  return {
    type: GET_MOVIE,
    movieId,
  };
}
export function gettingMovie(loading, response, error) {
  return {
    type: GETTING_MOVIE,
    loading,
    response,
    error,
  }
}