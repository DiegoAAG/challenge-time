import {
  GET, request,
} from './network';
import { config } from '../config';

/**
 * Get  Movie from the movieDB API
 * @return {Promise} The promise that we're getting the movie from API
 */
export function getMovieFromApi(movieId) {
  const { movieDb } = config;
  return new Promise((resolve, reject) => {
    const params = {
      api_key: movieDb.apiKey,
    };
    request(movieDb.apiUrl, GET, `movie/${movieId}` , params)
      .then((res) => {
        if (res.id) {
          resolve(res);
        } else {
          reject(res.error.message);
        }
      }).catch(err => reject(err));
  });
}

export async function normalizeMovie(movieFromApi) {
  const normalizedMovie = {
    id: movieFromApi.id,
    image: `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieFromApi.poster_path}`,
    overview: movieFromApi.overview,
    title: movieFromApi.title,
    year: movieFromApi.release_date.split('-')[0],
    score: movieFromApi.vote_average * 10,
  }

  return normalizedMovie;
};