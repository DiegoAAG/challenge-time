export const ACCESS_MOVIE_INFO = 'ACCESS_MOVIE_INFO';

export function getMovie(title) {
  return {
    type: ACCESS_MOVIE_INFO,
    movieTitle: title,
  };
}