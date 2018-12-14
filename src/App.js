import React, { Component } from 'react';
import MovieGridList from './container/MovieGridList'
import MovieFullView from './container/MovieFullView'
import './App.css';

const movies = [
  {
    image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/4CKtfsbNqAf0uDfpLfKQyig6SDu.jpg',
    title: 'Aquaman',
    year: '2018',
  },
  {
    image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/gB7ThItFiRFw18SsE1gWHA92eri.jpg',
    title: 'Venom',
    year: '2018',
  },
  {
    image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/qflbWgNtthGGl8nURPfffGEgZu6.jpg',
    title: 'Animais Fantásticos: Os Crimes de Grindelwald',
    year: '2018',
  },
  {
    image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/4qtIczCqcSKiaXon4XmYY0PoT74.jpg',
    title: 'Máquinas Mortais',
    year: '2019',
  },
  {
    image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/yhIqpoYFnAra24si0JqFEWdiPOX.jpg',
    title: 'O Predador',
    year: '2018',
  },
  {
    image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/wL8qLcZt8Hyf8Z8FYH1SucNySeq.jpg',
    title: 'Mogli: Entre Dois Mundos',
    year: '2018',
  },
  {
    image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/rW0A73hjzPWVwADlCTLnjLhAFLX.jpg',
    title: 'Liga do Kung Fu',
    year: '2018',
  },
  {
    image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bUAEA2ezgUvogQVcUjwbHU3604b.jpg',
    title: 'Um Pequeno Favor',
    year: '2018',
  },
  {
    image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg',
    title: 'Bohemian Rhapsody',
    year: '2018',
  },
  {
    image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3BDOuDfwE7kjnwF5QQtb1LD2ptR.jpg',
    title: 'Robin Hood - A Origem',
    year: '2018',
  },
]

const movie = {
    image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/gB7ThItFiRFw18SsE1gWHA92eri.jpg',
    title: 'Venom',
    year: '2018',
    score: 78,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}
/**
class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieGridList movies={movies} />
      </div>
    );
  }
}
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieFullView movie={movie} />
      </div>
    );
  }
}

export default App;
