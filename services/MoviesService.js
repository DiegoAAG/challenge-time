import {
  GET, request,
} from './network';
import { config } from '../config';

/**
 * Get  Movies from the movieDB API
 * @return {Promise} The promise that we're getting the movies from API
 */
export function getMoviesFromApi() {
  const { movieDb } = config;
  return new Promise((resolve, reject) => {
    const params = {
      api_key: movieDb.apiKey,
    };
    request(movieDb.apiUrl, GET, 'movie/top_rated', params)
      .then((res) => {
        if (res.results.length > 1) {
          resolve(res);
        } else {
          reject(res.error.message);
        }
      }).catch(err => reject(err));
  });
}

export async function normalizeMoviesList(moviesFromApi) {
  const moviesList = [];
  for (let i = 0; i < moviesFromApi.length; i++) {
    moviesList.push({
      id: moviesFromApi[i].id,
      image: `https://image.tmdb.org/t/p/w500${moviesFromApi[i].poster_path}`,
      overview: moviesFromApi[i].overview,
      title: moviesFromApi[i].title,
      year: moviesFromApi[i].release_date.substring('-')[0],
      score: moviesFromApi[i].vote_average * 10,
    })
  }
  return moviesList
};