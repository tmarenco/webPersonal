import './Tecnologias.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function Tecnologias() {
  return (
    <div>
      <div className="skills">
        <h3 className="tituloTec">Skills</h3>
        <FontAwesomeIcon icon={['fab', 'js']} className="fab fa-js iconTec"></FontAwesomeIcon>
        <FontAwesomeIcon icon={['fab', 'html5']} className="fab fa-html5 iconTec"></FontAwesomeIcon>
        <FontAwesomeIcon icon={['fab', 'css3']} className="fab fa-css3-alt iconTec"></FontAwesomeIcon>
        <FontAwesomeIcon icon={['fab', 'node']} className="fab fa-node iconTec"></FontAwesomeIcon>
        <FontAwesomeIcon icon={['fab', 'react']} className="fab fa-react iconTec"></FontAwesomeIcon>
      </div>
      <div className="skillsIdiomas">
        <h2>Otras Skills</h2>
        <ul>
          <li>Express</li>
          <li>MySQL</li>
          <li>VSCode</li>
          <li>Creacion y consumo de APIs</li>
          <li>Patron de Arquitectura MVC</li>
          <li>SCRUM</li>
          <li>Postman</li>
          <li>Sequelize</li>
          <li>Trello</li>
        </ul>
        <div>
          <h3 className="tituloTec">Idiomas</h3>
          <ul>
            <li>Espaniol - Nativo</li>
            <li>Ingles - Intermedio Avanzado</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
