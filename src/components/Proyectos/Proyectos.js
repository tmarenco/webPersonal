import './Proyectos.css';
import GeneradorDeProyectos from "../GeneradorDeProyectos/GeneradorDeProyectos"

function Proyectos() {
  return (
    <div>
      <p className="tituloProyectos">Proyectos</p>
      <GeneradorDeProyectos nombre="Calathea" descripcion="E-commerce de venta de plantas."repositorio="https://github.com/tmarenco/grupo_7_calathea" image="/documents/calathea.png"/>
      <GeneradorDeProyectos nombre="Snake Game" descripcion="Juego tradicional de la viborita." repositorio="https://github.com/tmarenco/snake" image="/documents/snakeGame.png" link="https://snakegametm.web.app/"/>
      <GeneradorDeProyectos nombre="Mi web" descripcion="Sitio web personal con proyectos, datos e info personal." repositorio="https://github.com/tmarenco/webPersonal" image="/documents/miWeb.png"/>
    </div>
  );
}

export default Proyectos;
