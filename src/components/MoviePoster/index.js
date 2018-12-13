import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Poster = styled.img`
`
const MoviePoster = ({ source }) => (
    <Poster src={source} />
);

MoviePoster.propTypes = {
    source: propTypes.string.isRequired,
}

export default MoviePoster;
