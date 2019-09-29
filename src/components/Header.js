import React, { Component } from 'react';

// Importando l'oggetto component, posso utilizzare l'ES6 direttamente richiamando Component, e non React.Component
class Header extends Component {
  constructor() {
    super();
    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
  }
  loadAdditionalMovies() {
    this.props.sendFunction();
  }
  render() {
    return <div className="App-header">
      <h2>{this.props.text}</h2>
      <div className="add-movies">
        <button className="add" onClick={this.loadAdditionalMovies}>Carica cartoni...</button>
      </div>
    </div>
  }
}

// Questo export ci rende disponibile il componente ad altri file del progetto
export default Header;
