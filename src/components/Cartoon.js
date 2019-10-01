import React, { Component } from 'react';

// Importando l'oggetto component, posso utilizzare l'ES6 direttamente richiamando Component, e non React.Component
class Cartoon extends Component {

  render() {
    return (
      <div className="movie">
        <h2>{ this.props.meta.title }</h2>
      <div><img width="200" height="300" src={ this.props.meta.poster } /></div>
        <p>({ this.props.meta.year })</p>
        <p>{ this.props.meta.description }</p>
        <i className="fas fa-times-circle delete" onClick={() => this.props.deleteCartoon(this.props.meta.code)}></i>
      </div>
      /* Passare una variabile props alla funzione */
    );
  }
}

// Questo export ci rende disponibile il componente ad altri file del progetto
export default Cartoon;
