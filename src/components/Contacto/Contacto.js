import './Contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function Contacto() {
  return (
    <div>
      <div className="infoContacto">
        <p className="tituloContacto">E-mail:</p>
        <p>tmarencocastello@gmail.com</p>
        <p className="tituloContacto">Celular:</p>
        <p>15-3516-7954</p>
        <p className="tituloContacto">Linkedin: </p><a href="https://www.linkedin.com/in/tmarenco/">https://www.linkedin.com/in/tmarenco/</a>
        <p className="tituloContacto">Github: </p><a href="https://github.com/tmarenco">https://github.com/tmarenco</a>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/tmarenco/"><FontAwesomeIcon icon={['fab', 'linkedin']} className="fab fa-linkedin-in iconContacto"></FontAwesomeIcon></a>
        <a href="mailto:tmarencocastello@gmail.com"><FontAwesomeIcon icon={['fab', 'google']} className="fab fa-google iconContacto"></FontAwesomeIcon></a>
        <a href="https://github.com/tmarenco"><FontAwesomeIcon icon={['fab', 'github']} className="fab fa-github iconContacto"></FontAwesomeIcon></a>
        <a href="https://wa.link/jqlypa"><FontAwesomeIcon icon={['fab', 'whatsapp']} className="fab fa-whatsapp iconContacto"/></a>
      </div>
    </div>
  );
}

export default Contacto;
