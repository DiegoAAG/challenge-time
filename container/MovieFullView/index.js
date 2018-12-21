import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MovieDetails from '../../components/MovieDetails';
import { getMovie as getMovieAction} from '../../actions/MovieActions'
import { connect } from 'react-redux';


function MovieFullView({ movie, getMovie, gettingMovie, movieId }) {

  useEffect(() => {
    const id = movieId.movieId;
    if (gettingMovie === 'none') {
      getMovie(id);
    }
  });
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
    movie: PropTypes.object.isRequired,
    movieId: PropTypes.string.isRequired,
    getMovie: PropTypes.func.isRequired,
    gettingMovie: PropTypes.string.isRequired,
}


const mapStateToProps = state => ({
    movie: state.movie.movie,
    gettingMovie: state.movie.gettingMovie,
});
  
  const mapActionToProps = dispatch => ({
      getMovie: (movieId) => dispatch( getMovieAction(movieId))
  });
  

export default connect(mapStateToProps, mapActionToProps)(MovieFullView);
