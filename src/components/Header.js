import React, { Component } from 'react';

// Importando l'oggetto component, posso utilizzare l'ES6 direttamente richiamando Component, e non React.Component
class Header extends Component {
  render() {
    return <div className="App-header">
      <h2>{this.props.text}</h2>
    </div>
  }
}

// Questo export ci rende disponibile il componente ad altri file del progetto
export default Header;
