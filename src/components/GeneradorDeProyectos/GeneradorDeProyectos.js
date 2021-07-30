import './GeneradorDeProyectos.css';

function GeneradorDeProyectos(props) {
    return (
    <div className="generador">
        <h2 className="nombreProyecto">{props.nombre}</h2>
        <p>{props.descripcion}</p>
        <a href={props.repositorio}><p className="repositorio">Repositorio: {props.repositorio}</p></a>
        {/* <img></img> */}
    </div>
    );
}

export default GeneradorDeProyectos;