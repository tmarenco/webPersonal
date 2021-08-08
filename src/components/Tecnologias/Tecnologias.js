import './Tecnologias.css';

function Tecnologias() {
  return (
    <div>
      <div className="skills">
        <h3 className="tituloTec">Skills</h3>
        <i className="fab fa-js iconTec"></i>
        <i className="fab fa-html5 iconTec"></i>
        <i className="fab fa-css3-alt iconTec"></i>
        <i className="fab fa-node iconTec"></i>
        <i className="fab fa-react iconTec"></i>
      </div>
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
  );
}

export default Tecnologias;
