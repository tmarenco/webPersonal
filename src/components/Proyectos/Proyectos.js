import './Proyectos.css';
import GeneradorDeProyectos from "../GeneradorDeProyectos/GeneradorDeProyectos"

function Proyectos() {
  return (
    <div>
      <p className="tituloProyectos">Proyectos</p>
      <GeneradorDeProyectos nombre="Calathea" descripcion="E-commerce de venta de plantas."repositorio="https://github.com/tmarenco/grupo_7_calathea"/>
      <GeneradorDeProyectos nombre="Snake Game" descripcion="Juego clásico de la viborita." repositorio="https://github.com/tmarenco/snake"/>
      <GeneradorDeProyectos nombre="Mi web" descripcion="Página web personal con proyectos, datos e información personal." repositorio="https://github.com/tmarenco/webPersonal"/>
    </div>
  );
}

export default Proyectos;
