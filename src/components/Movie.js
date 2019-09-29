import React, { Component } from 'react';

// Importando l'oggetto component, posso utilizzare l'ES6 direttamente richiamando Component, e non React.Component
class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <h2>{ this.props.meta.title }</h2>
      <div><img width="200" height="300" src={ this.props.meta.poster } /></div>
        <p>({ this.props.meta.year })</p>
        <p>{ this.props.meta.description }</p>
      </div>
    );
  }
}

// Questo export ci rende disponibile il componente ad altri file del progetto
export default Movie;
