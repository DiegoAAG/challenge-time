export const ACCESS_MOVIE_INFO = 'ACCESS_MOVIE_INFO';

export function getMovie(id) {
  console.log(id)
  return {
    type: ACCESS_MOVIE_INFO,
    id,
  };
}