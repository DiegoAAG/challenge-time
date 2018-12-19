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
const TitleBoxLarge = styled.div`
  text-align: left;
  display: flex;
  i{
    font-weight: normal;
    font-size: 18px;
    color: gray;
  };
`

const TitleBoxSmall = styled.div`
  h2 {
    align-content: center;
  };
  i{
    font-weight: normal;
    font-size: 18px;
    color: gray;
  };
`
const OverviewRow = styled(Row)`
  background-color: #0e1522;
  margin-top: 10px;
`



const MovieDetails = ({ movieImage, movieTitle, movieYear, movieScore, movieOverview }) => (
  <>
    <Visible xl lg>
      <FullViewContainer fluid>
        <Row>
          <Col xl={4} lg={4}>
            <MoviePoster source={movieImage} />
          </Col >
          <Col xl={8} lg={8}>
            <TitleBoxLarge>
              <h2>{movieTitle} <i>({movieYear})</i></h2>
            </TitleBoxLarge>
            <MovieIcons score={movieScore} />
            <MovieOverview overview={movieOverview} />
          </Col>
        </Row>
      </FullViewContainer>
    </Visible>

    <Visible md sm xs>
      <FullViewContainer fluid>
        <Row>
          <Col md={12} sm={12} sx={12}>
            <MoviePoster source={movieImage} />
          </Col >
        </Row>
        <Row>
          <Col md={12} sm={12} sx={12}>
            <TitleBoxSmall>
              <h2>{movieTitle} <i> ({movieYear})</i></h2>           </TitleBoxSmall>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} sx={12}>
            <MovieIcons score={movieScore} />
          </Col>
        </Row>
        <OverviewRow>
          <Col md={1} sm={1} sx={1}/>
          <Col md={10} sm={10} sx={10}>
            <MovieOverview overview={movieOverview} />
          </Col>
          <Col md={1} sm={1} xs={1}/>
        </OverviewRow>
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