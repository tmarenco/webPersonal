import './GeneradorDeTareas.css';

function GeneradorDeTareas(props) {
  return (
  <div className="tareas">
      <h2>{props.tarea}</h2>
      <span>Estado </span><select className="estado" name="estado">
        <option value="pendiente" selected>Pendiente</option>
        <option value="en-proceso">En proceso</option>
        <option value="completa">Completa</option>
      </select>
      <br></br>
      <button className={props.tarea}>Eliminar</button>

  </div>
  );
}

export default GeneradorDeTareas;
