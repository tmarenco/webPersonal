import './Inicio.css';
import React, {useState} from 'react';

function Inicio() {
  const [name, setName] = useState("invitado/a")
  const [mensajeError, setMensajeError] = useState(false)
  const [saludo, setSaludo] = useState(false)


  const change = ()=>{
    let input = document.querySelector(".inputNombre")
    if (input.value === ""){
      setMensajeError(true)
    } else {
      setMensajeError(false)
      setName(input.value)
      setSaludo(true)
    }
  }
  
  

  return (
    <div className="inicio">
      <div className={saludo? "desaparece" : "aparece"}>
        <h2 className="titulo">Hola {name} !</h2>
        <h2>Introduci tu nombre :</h2>
        <input className="inputNombre" placeholder="Nombre"></input>
        <br></br>
        <button onClick={()=> change()}>Aceptar</button>
        <p className={mensajeError? "mensajeError" : "desaparece"}>El campo no puede estar incompleto!</p>
      </div>
      <div className={saludo? "aparece" : "desaparece"}>
        <h2 className="titulo">Bienvenido/a, {name} !</h2>
        <p>Te invito a navegar por mi web para conocer sobre mi</p>
      </div>
      <div></div>
      <div className="logoTitulo">
        <h2 className="tituloTomas animacionSubrayado">TOMAS MARENCO</h2>
        <img className="logoTomas" src="./documents/logoBlanco.png" alt="logo"></img>
      </div>
    </div>
  );
}


export default Inicio;
