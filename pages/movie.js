import React from 'react';
import  MovieFullView  from '../container/MovieFullView';


const MoviePage = (movieId) => (
  <MovieFullView movieId={movieId}/>
);

  MoviePage.getInitialProps = async ({ query }) => {

    const  movieId  = query.id;
    return { movieId };
 }


export default MoviePage;