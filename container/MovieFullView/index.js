import React from 'react';
import propTypes from 'prop-types';
import MovieDetails from '../../components/MovieDetails';


function MovieFullView({movie}){
  return (
    <MovieDetails 
    movieImage={movie.image}
    movieTitle={movie.title}
    movieYear={movie.year}
    movieScore={movie.score}
    movieOverview={movie.overview}
     />
  )
}

MovieFullView.propTypes = {
  movie: propTypes.object.isRequired,
}

export default MovieFullView;
