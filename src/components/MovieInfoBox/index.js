import React from 'react';
import { Visible } from 'react-grid-system';
import propTypes from 'prop-types';
import MoviePoster from '../MoviePoster'
import styled from 'styled-components';

const MovieBox = styled.div`
   color: white;
   font-family: Helvetica;
   p {
       font-style: italic;
   }
`
const MovieInfoBox = ({ movieImage, movieTitle, movieYear, onPress }) => (
    <>
        <Visible md lg xl>
            <MovieBox onClick={onPress}>
                <MoviePoster source={movieImage} />
                <h3>{movieTitle}</h3>
                <p>{movieYear}</p>
            </MovieBox>
        </Visible>

        <Visible sm xs>
            <MovieBox onClick={onPress}>
                <h3>{movieTitle} ({movieYear})</h3> 
            </MovieBox>
        </Visible>
    </>
);

MovieInfoBox.propTypes = {
    movieImage: propTypes.string.isRequired,
    movieTitle: propTypes.string.isRequired,
    movieYear: propTypes.string.isRequired,
    onPress: propTypes.func.isRequired,
}

export default MovieInfoBox;