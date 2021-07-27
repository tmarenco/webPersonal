import './Error.css';
import {Link} from "react-router-dom"

function Error() {
  return (
    <div className="paginaError">
      <i class="far fa-frown"></i>
      <p>Esta página no existe, presioná el botón para ir al inicio!</p>
      <Link to="/"><button>Inicio</button></Link>
    </div>
  );
}

export default Error;
