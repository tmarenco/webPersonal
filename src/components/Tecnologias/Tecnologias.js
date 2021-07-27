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
      <h2>Más Skills</h2>
      <ul>
        <li>Express</li>
        <li>MySQL</li>
        <li>VSCode</li>
        <li>Creación y consumo de APIs</li>
        <li>Patrón de arquitectura MVC</li>
        <li>Metodologías ágiles - SCRUM</li>
        <li>Postman</li>
        <li>Sequelize</li>
        <li>Trello</li>
      </ul>
      <div>
        <h3 className="tituloTec">Idiomas</h3>
        <ul>
          <li>Español - Nativo</li>
          <li>Inglés - Intermedio Avanzado</li>
        </ul>
      </div>
    </div>
  );
}

export default Tecnologias;
