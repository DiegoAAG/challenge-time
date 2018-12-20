import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import MovieInfoBox from '../../components/MovieInfoBox'
import { getMovies as getMoviesAction} from '../../actions/MoviesActions'


const MovieContainer = styled(Container)`
  background-color: black;
` 


function MovieList({movies, getMovies, gettingMovies}) {
    useEffect(() => {
        if (gettingMovies === 'none') {
            getMovies();
        }
    });
    return (
        <MovieContainer fluid>
            <Row>
                {movies.map(movie => (
                    <Col xl={3} lg={3} md={6} sm={12} xs={12} >
                        <MovieInfoBox
                            movieId={movie.id}
                            movieImage={movie.image}
                            movieTitle={movie.title}
                            movieYear={movie.year}
                            onPress={()=> null }
                        />
                    </Col>
                ))}
            </Row>
        </MovieContainer>
    );
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    getMovies: PropTypes.func.isRequired,
    gettingMovies: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    gettingMovies: state.movies.gettingMovies,
});
  
  const mapActionToProps = dispatch => ({
      getMovies: () => dispatch( getMoviesAction())
  });
  


export default connect(mapStateToProps, mapActionToProps)(MovieList);