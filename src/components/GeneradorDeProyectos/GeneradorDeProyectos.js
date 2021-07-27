import './GeneradorDeProyectos.css';

function GeneradorDeProyectos(props) {
    return (
    <div>
        <h2>{props.nombre}</h2>
        <h3>Repositorio: {props.repositorio}</h3>
        <img></img>
    </div>
    );
}

export default GeneradorDeProyectos;