import './Error.css';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown  } from '@fortawesome/free-solid-svg-icons'

function Error() {
  return (
    <div className="paginaError">
      <FontAwesomeIcon icon={faFrown} className="far fa-frown"/>
      <p>Esta página no existe, presioná el botón para ir al inicio!</p>
      <Link to="/"><button>Inicio</button></Link>
    </div>
  );
}

export default Error;
