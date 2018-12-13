import React from 'react';
import propTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import MovieInfoBox from '../../components/MovieInfoBox'


const MovieContainer = styled(Container)`
  background-color: black;
` 


function MovieList({movies}) {
    return (
        <MovieContainer fluid>
            <Row>
                {movies.map(movie => (
                    <Col lg={3} md={6} sm={12} xs={12} >
                        <MovieInfoBox
                            movieImage={movie.image}
                            movieTitle={movie.title}
                            movieYear={movie.year}
                        />
                    </Col>
                ))}
            </Row>
        </MovieContainer>
    );
}

export default MovieList;