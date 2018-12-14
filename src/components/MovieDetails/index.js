import React from 'react';
import propTypes from 'prop-types';
import { Visible, Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import MoviePoster from '../../components/MoviePoster';
import MovieIcons from '../../components/MovieIcons'
import MovieOverview from '../../components/MovieOverview'

const FullViewContainer = styled(Container)`
  background-color: black;
  color: white;
`
const TitleBox = styled.div`
  text-align: left;
  display: flex;
`


const MovieDetails = ({ movieImage, movieTitle, movieYear, movieScore, movieOverview }) => (
  <>
    <Visible xl lg md>
      <FullViewContainer>
        <Row>
          <Col xl={4} lg={4} md={4}>
            <MoviePoster source={movieImage} />
          </Col >
          <Col lg={8} md={8}>
          <TitleBox>
            <h2>{movieTitle}</h2> <h3>({movieYear})</h3>
          </TitleBox>
            <MovieIcons score={movieScore} />
            <MovieOverview overview={movieOverview} />
          </Col>
        </Row>
      </FullViewContainer>
    </Visible>

    <Visible sm xs>
      <FullViewContainer>
        <Row>
          <Col sm={3} sx={3}>
            <MoviePoster source={movieImage} />
          </Col >
          <Col sm={6} sx={6}>
            <h3>{movieTitle}</h3>
          </Col>
          <Col sm={3} sx={3}>
            <p>{movieYear}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} sx={12}>
            <MovieIcons score={movieScore} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} sx={12}>
            <MovieOverview overview={movieOverview} />
          </Col>
        </Row>
      </FullViewContainer>
    </Visible>
  </>
);

MovieDetails.propTypes = {
  movieImage: propTypes.string.isRequired,
  movieTitle: propTypes.string.isRequired,
  movieYear: propTypes.string.isRequired,
  movieScore: propTypes.number.isRequired,
  movieOverview: propTypes.string.isRequired,
}
export default MovieDetails;