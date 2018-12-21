import React from 'react';
import styled from 'styled-components';
import  MovieFullView  from '../container/MovieFullView';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background: black;
  color: white;
`; 

const MoviePage = (movieId) => (
  <PageContainer>
    <MovieFullView movieId={movieId} />
  </PageContainer>
);

  MoviePage.getInitialProps = async ({ query }) => {

    const  movieId  = query.id;
    return { movieId };
 }


export default MoviePage;