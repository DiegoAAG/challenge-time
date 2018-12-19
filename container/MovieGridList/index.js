import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import MovieInfoBox from '../../components/MovieInfoBox'
import { getMovie as getMovieAction, ACCESS_MOVIE_INFO } from '../../actions/MoviesActions'


const MovieContainer = styled(Container)`
  background-color: black;
` 


function MovieList({movies}) {
    return (
        <MovieContainer fluid>
            <Row>
                {movies.map(movie => (
                    <Col xl={3} lg={3} md={6} sm={12} xs={12} >
                        <MovieInfoBox
                            movieId={1}
                            movieImage={movie.image}
                            movieTitle={movie.title}
                            movieYear={movie.year}
                            onPress={()=> getMovieAction(ACCESS_MOVIE_INFO, movie.id)}
                        />
                    </Col>
                ))}
            </Row>
        </MovieContainer>
    );
}

MovieList.propTypes = {
    movies: propTypes.array.isRequired,
}

const mapStateToProps = state => ({
    movieId: state.movieId,
  });
  
  const mapActionToProps = dispatch => ({
    movieId: id => dispatch(getMovieAction(id)),
  });
  


export default connect(mapStateToProps, mapActionToProps)(MovieList);