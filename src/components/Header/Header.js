import './Header.css';
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="header">
      <ul>
        <Link to="/"><li>Inicio</li></Link>
        <Link to="/proyectos"><li>Proyectos</li></Link>
        <Link to="/tecnologias"><li>Skills e Idiomas</li></Link>
        <Link to="/sobre-mi"><li>Sobre mi</li></Link>
        <Link to="/contacto"><li>Contacto</li></Link>
      </ul>
    </div>
  );
}

export default Header;
