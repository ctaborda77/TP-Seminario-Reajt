import React, { Component } from 'react';
//import logo from './logo.svg';
import usuarios from './datos';
import './App.css';
import Usuario from './componentes/usuario';
//import Amigos from './componentes/amigos';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      titulo: 'TP Seminario: React',
      usuarios
    }
  };

  render() {

    const {titulo, usuarios} = this.state;
    return (

    <section>
      <h2>{titulo}</h2>
      <h2>Listado de usuarios:</h2>
      
      {usuarios.map((usuario) =>
      <Usuario datos={usuario}
                name={usuario.name}
                gender={usuario.gender}
                age={usuario.age}
                email={usuario.email}
                phone={usuario.phone}
                company={usuario.company}
                picture={usuario.picture}/>
      )}
    </section>
    
    );
  }
}
//<img src={imagen} height='200' width='350'/>
export default App;
