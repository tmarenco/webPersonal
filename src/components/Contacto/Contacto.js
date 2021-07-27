import './Contacto.css';

function Contacto() {
  return (
    <div>
      <p>E-mail: tmarencocastello@gmail.com</p>
      <p>Celular: 1535167954</p>
      <p>Linkedin: </p><a href="https://www.linkedin.com/in/tmarenco/">https://www.linkedin.com/in/tmarenco/</a>
      <p>Github: </p><a href="https://github.com/tmarenco">https://github.com/tmarenco</a>
      <div className="icons">
        <a href="https://www.linkedin.com/in/tmarenco/"><i className="fab fa-linkedin-in iconContacto"></i></a>
        <a href="mailto:tmarencocastello@gmail.com"><i className="fab fa-google iconContacto"></i></a>
        <a href="https://github.com/tmarenco"><i className="fab fa-github iconContacto"></i></a>
        <a href="https://wa.link/jqlypa"><i className="fab fa-whatsapp iconContacto"></i></a>
      </div>
    </div>
  );
}

export default Contacto;
