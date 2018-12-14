import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const OverviewContainer = styled.div`
`

const OverviewParagraph = styled.p`
`
const MovieOverview = ({ overview }) => (
  <OverviewContainer>
    <h3> Overview </h3>
    <OverviewParagraph>
      {overview}
    </OverviewParagraph>
  </OverviewContainer>
);

MovieOverview.propTypes = {
    overview: propTypes.string.isRequired,
}

export default MovieOverview;
