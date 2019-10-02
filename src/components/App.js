import React from 'react';
import '../App.css';
import Header from './Header';
import Cartoon from './Cartoon';
import AddCartoon from './AddCartoon';
import {initialCartoons} from '../cartoons';
import {additionalCartoons} from '../cartoons';

class App extends React.Component {
constructor() {
  super();
  this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
  this.addCartoonToGallery = this.addCartoonToGallery.bind(this);
  this.deleteCartoonFromGallery = this.deleteCartoonFromGallery.bind(this);
  this.orderCartoons = this.orderCartoons.bind(this);

  this.state = {
    cartoons: initialCartoons
  };
}


// Aggiunta 4 card già stabilite
loadAdditionalMovies() {
  var currentCartoons = { ...this.state.cartoons };
  var newCartoons = Object.assign( currentCartoons, additionalCartoons );
  this.setState({ cartoons: newCartoons });
}


// Aggiunta di una card
addCartoonToGallery(cartoon) {
  var key = Date.now();
  var newCartoon = {};
  newCartoon[ 'cartoon' + key ] = cartoon;
  var currentCartoons = { ...this.state.cartoons };
  var newCartoons = Object.assign( currentCartoons, newCartoon );
  this.setState({ cartoons: newCartoons });
}


// Eliminazione di un card
deleteCartoonFromGallery(code_cartoon){
  var currentCartoons = { ...this.state.cartoons };
  var newCartoons = [];
  var result = Object.keys(currentCartoons).map(function(key) {
  return [currentCartoons[key]];
  });

  for (var i = 0; i < result.length; i++) {
    var single_film=(result[i]);
    for (var j = 0; j < single_film.length; j++) {

      if (single_film[j].code!==code_cartoon) {
        newCartoons.push(single_film[j]);
      }
    }
  }
  this.setState({cartoons:newCartoons});
  }


//Ordinamento delle card
orderCartoons(){
  var currentCartoons = { ...this.state.cartoons };
  var newCartoons = [];
  var result = Object.keys(currentCartoons).map(function(key) {
  return [currentCartoons[key]];
  });

  for (var i = 0; i < result.length; i++) {
    var single_film=(result[i]);
    for (var j = 0; j < single_film.length; j++) {
      newCartoons.push(single_film[j]);
    }
  }
  newCartoons.sort(orderArray);
  console.log(newCartoons);
  this.setState({cartoons:newCartoons});
}


render() {
  var header="Scopri i personaggi che ti hanno appassionato da ragazzo!";
  return (
    <div className="App">
      <Header text= {header} add={this.loadAdditionalMovies} order={this.orderCartoons} />
      <h3 className="App-intro">Condividi i tuoi cartoni animati preferiti!</h3>
        <div className="movies">
        {  Object
          .keys(this.state.cartoons)
          .map(key => <Cartoon key={key} meta={this.state.cartoons[key]} deleteCartoon = {this.deleteCartoonFromGallery}/>)
        }
        </div>
        <AddCartoon addCartoon={this.addCartoonToGallery}/>
    </div>
  );
}
}

function orderArray(a,b){
  if (a.title > b.title) { return 1; }
  else {
  if (a.title < b.title) { return -1; }
  else { return 0; }
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
