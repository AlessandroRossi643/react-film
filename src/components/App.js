import React from 'react';
import '../App.css';
import Header from './Header';

function App() {
  var header="ciao";
  return (
    <div className="App">
        <Header text={header}/>
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
      </div>
  );
}

export default App;
