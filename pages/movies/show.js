import React from 'react';
import MovieFullView from "../container/MovieFullView";

const movie = {
    image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/gB7ThItFiRFw18SsE1gWHA92eri.jpg',
    title: 'Venom',
    year: '2018',
    score: 78,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}


const Index = () =>
  <MovieFullView movie={movie} />

export default Index;

 