import './App.css';
import Lista from './Lista';
import Contacto from './Contacto';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      Celulares: [
        { modelo: 'XYZ', precioUSD: 500, imagen: 'F1.png' },
        { modelo: 'QWE', precioUSD: 600, imagen: 'F2.png' },
        { modelo: 'UIO', precioUSD: 545, imagen: 'F3.png' }]  
    };

  }
  render() {
    return (
      <div className="App">
        <Lista items= {this.state.Celulares}/>
        <Contacto codigoPromocional="TQ5678"Nacionalidad ="Peruana"/>
      </div>
    );
  }
}

export default App;
