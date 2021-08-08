import './GeneradorDeProyectos.css';

function GeneradorDeProyectos(props) {
    return (
    <div className="generador">
        <div className="izquierda">
            <h2 className="nombreProyecto">{props.nombre}</h2>
            <p>{props.descripcion}</p>
            <a href={props.repositorio}><p className="repositorio">Repositorio: {props.repositorio}</p></a>
        </div>
        <div className="derecha">
            <a href={props.link}><img className="imageWebsite" src={props.image} alt="logo"></img></a>
        </div>
    </div>
    );
}

export default GeneradorDeProyectos;