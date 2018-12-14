import React from 'react';
import { Visible, Row, Col, Container } from 'react-grid-system';
import propTypes from 'prop-types';
import styled from 'styled-components';

const IconsBar = styled(Container)`
`

const MovieIcons = ({ score }) => (
  <>
    <Visible xl lg md>
      <IconsBar>
        <Row>
          <Col xl={3} lg={3} md={3}>
            <b>{score}%</b>
            <b>User</b><br/><b>Score</b>
          </Col>
          <Col xl={6} lg={6} md={6}>
            <b> Link Icon |</b>
            <b> Link Icon |</b>
            <b> Link Icon |</b>
          </Col>
          <Col lg={3} md={3}>
            <b>'==>Play Trailer'</b>
          </Col>
        </Row>
      </IconsBar>
    </Visible>

    <Visible sm xs>
      <IconsBar>
        <Row>
          <Col sm={6} xs={6}>
            <b>{score}'%'</b>
            <b>'User
          Score'</b>
          </Col>
          <Col sm={6} xs={6}>
            <b>'==>Play Trailer'</b>
          </Col>
        </Row>
      </IconsBar>

    </Visible>
  </>

);

MovieIcons.propTypes = {
    score: propTypes.number.isRequired,
}

export default MovieIcons;
