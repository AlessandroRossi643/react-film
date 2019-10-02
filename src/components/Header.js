import React, { Component } from 'react';

// Importando l'oggetto component, posso utilizzare l'ES6 direttamente richiamando Component, e non React.Component
class Header extends Component {
  
  render() {
    return <div className="App-header">
      <h2>{this.props.text}</h2>
      <div className="add-movies">
        <button className="movie-button" onClick={this.props.add}>Carica cartoni...</button>
        <button className="movie-button" onClick={this.props.order}>Ordina cartoni per nome...</button>
      </div>
    </div>
  }
}

// Questo export ci rende disponibile il componente ad altri file del progetto
export default Header;
