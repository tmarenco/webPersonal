import './Inicio.css';
import React, {Component} from "react"

class Inicio extends Component {

  constructor(){
    super();
    this.state = {
      nombre: "invitado/a"
    }
  }


  indicarNombre(){
    let input = document.querySelector(".inputNombre")
    if(input.value ===""){
      this.setState({
        nombre: "invitado/a"
      })
    } else {
        this.setState({
        nombre: input.value
      })
    }
  }
  render(){
    let input = document.querySelector(".inputNombre")

    return (
      <div className="inicio">
        <h1>Hola {this.state.nombre}!</h1>
        <h2>Introducí tu nombre:</h2>
        <input className="inputNombre"></input>
        <br></br>
        <p className="mensajeError"></p>
        <button onClick={ (e)=> this.indicarNombre()}>Aceptar</button>
        <h2 className="tituloTomas">TOMÁS MARENCO</h2>
      </div>
    );
  }
}

export default Inicio;
