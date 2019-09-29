import React from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import {initialCartoons} from '../cartoons';
import {additionalCartoons} from '../cartoons';

class App extends React.Component {
constructor() {
  super();
  this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);

  this.state = {
    movies: initialCartoons
  };
}

loadAdditionalMovies() {
  var currentCartoons = { ...this.state.movies };
  var newCartoons = Object.assign( currentCartoons, additionalCartoons );
  this.setState({ movies: newCartoons });
}

render() {
  var header="Discover Your Movie Mojo!";
  return (
    <div className="App">
      <Header text= {header} sendFunction = {this.loadAdditionalMovies} />
      <h3 className="App-intro">Condividi i tuoi cartoni animati preferiti!</h3>
        <div className="movies">
        {  Object
          .keys(this.state.movies)
          .map(key => <Movie key={key} meta={this.state.movies[key]} />)
        }
        </div>
    </div>
  );
}
}
//
// function App() {
//   var header="Discover Your Movie Mojo!";
//   return (
//     <div className="App">
//       <Header text= {header} />
//       <h3 className="App-intro">Condividi i tuoi cartoni animati preferiti!</h3>
//         <div className="movies">
//           <Movie title="I Griffin" year="1999" description="La serie animata politicamente scorretta che presenta le avventure della famiglia Griffin. La famiglia protagonista del cartone è la dissacrante rappresentazione della tipica famiglia all'americana. Le loro vicende sono fuori dalla realtà, con continui flashback in vari punti della storia che esplicano i comportamenti dei personaggi. Le trame degli episodi molto spesso non seguono un senso logico, ma sono sempre dotate di una forte vena umoristico-demenziale." poster="./posters/griffin.jpg" />
//           <Movie title="One Piece" year="2009" description="La storia segue le avventure di Monkey D. Rufy, un ragazzo il cui corpo ha assunto le proprietà della gomma dopo aver inavvertitamente ingerito il frutto del diavolo Gom Gom. Raccogliendo attorno a sé una ciurma, Rufy esplora la Rotta Maggiore in cerca del leggendario tesoro One Piece e inseguendo il sogno di diventare il nuovo Re dei pirati." poster="./posters/onepiece.jpg" />
//           <Movie title="Yu-Gi-Oh! 5D's" year="2009" description="Yusei Fudo, viene dalla città del satellite, area povera della lussuosa Nuova Domino. Il ragazzo lotta per la libertà della propria gente e per trovare Jack Atlas, il re dei duelli Turbo." poster="./posters/yugioh.jpg" />
//           <Movie title="Dragonball GT" year="2009" description="La storia ha inizio cinque anni dopo[2] il 28º Torneo Tenkaichi, durante il quale Goku aveva preso Ub come suo allievo.[3] A causa di un desiderio accidentale di Pilaf, Goku torna dodicenne. Nel corso del successivo anno, Goku è costretto a viaggiare nell'universo insieme a Trunks e Pan, per poi dover salvare la Terra da Baby, Super C-17 e i draghi malvagi." poster="./posters/dragonballgt.jpg" />
//         </div>
//     </div>
//   );
// }

export default App;
