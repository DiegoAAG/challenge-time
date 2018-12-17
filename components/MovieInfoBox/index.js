import React from 'react';
import { Visible } from 'react-grid-system';
import propTypes from 'prop-types';
import MoviePoster from '../MoviePoster'
import styled from 'styled-components';
//import rottenEgg from './rotten-eg.png'
import Link from 'next/link';

const MovieBox = styled.div`
   color: white;
   align-content: center;
   font-family: Helvetica;
   p {
       font-style: italic;
   }
`
const SmallSticker = styled.img`
    align-content: center;
    padding-left: 25%;
    padding-top: 50%;
    max-width: 40px;
    max-height: 40px;
`

const MovieTab = styled.div`
   display: -webkit-inline-box;
   color: white;
   margin-top: 2%;
   background-color: #0e1522;
   border-color: gray;
   border-width: 2px;
   border-style: solid;
   font-family: Helvetica;
   text-align: left;
   p {
       font-style: italic;
   }
   h3 {
       padding-left: 5%;
       max-width: 25ch;
       overflow: hidden;
  }
   height: 100%;
   width: 100%;
   border-radius: 5px;

`
const MovieInfoBox = ({ movieId, movieImage, movieTitle, movieYear, onPress }) => (
    <>
    <Visible md lg xl>
        <Link href={`/movies/${movieId}`}>
                <a>
                    <MovieBox onClick={onPress}>
                        <MoviePoster source={movieImage} />
                        <h3>{movieTitle}</h3>
                        <p>{movieYear}</p>
                    </MovieBox>
                </a>
        </Link>
    </Visible>

    <Visible sm xs>
        <Link href={`/movies/${movieId}`}>
                <a>
                    <MovieBox onClick={onPress(movieId)}>
                        <MovieTab>
                            <h3>{movieTitle} ({movieYear})</h3>
                        </MovieTab>
                    </MovieBox>
                </a>
        </Link>
    </Visible>
    </>
    );
MovieInfoBox.propTypes = {
    movieId: propTypes.string.isRequired,
    movieImage: propTypes.string.isRequired,
    movieTitle: propTypes.string.isRequired,
    movieYear: propTypes.string.isRequired,
    onPress: propTypes.func.isRequired,
}

export default MovieInfoBox;