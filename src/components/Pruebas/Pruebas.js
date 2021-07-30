import './Pruebas.css';
import GeneradorDeTareas from "../Generador de tareas/GeneradorDeTareas"
import React, {Component} from "react"

// class Pruebas extends Component {

//   constructor(){
//     super();
//     this.state = {
//       tareas: ""
//     }
//   }

//   // crearItem(nuevaTarea){
//   //   let tarea = document.createElement("h3")
//   //   tarea.classList.add(nuevaTarea)
//   //   let txt = document.createTextNode(nuevaTarea)
//   //   tarea.appendChild(txt)
//   //   let tareas = document.querySelector(".tareas")
//   //   tareas.appendChild(tarea)
//   // }
  

//   indicarTarea(){
//     let input = document.querySelector(".inputNombre")
//     let tareas = document.querySelector(".tareas")
//     tareas.innerHTML += <GeneradorDeTareas tarea={input}/>
//     // this.crearItem(input.value)
//   }

//   render(){
//     return (
//       <div className="inicio">
//         <h1>Tareas</h1>
//         <input className="inputNombre"></input>
//         <br></br>
//         <button onClick={ ()=> this.indicarTarea()}>Agregar</button>
//         <div className="pendientes">
//           <h2>Pendientes:</h2>
//           <div className="tareas"></div>
//         </div>
//       </div>
//     );
//   }
// }

class Pruebas extends Component {

  constructor(props){
    super(props);
    this.state = {
      tareas: false,
      dato: ""
    }
  }

  indicarTarea(){
    let input = document.querySelector(".inputNombre")
    this.setState({
      tareas: true,
      dato: input.value
    })
  }

  render(){
    if (this.state.tareas){
      return(
        <div>
          <GeneradorDeTareas tarea= {this.state.dato}/>
        </div>
      )
    }
    return (
      <div className="inicio">
        <h1>Tareas</h1>
        <input className="inputNombre"></input>
        <br></br>
        <button onClick={ ()=> this.indicarTarea()}>Agregar</button>
        <div className="pendientes">
          <h2>Pendientes:</h2>
        </div>
      </div>
    )
  }
}

export default Pruebas;
