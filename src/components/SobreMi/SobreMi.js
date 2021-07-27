import './Sobremi.css';


function SobreMi() {
  return (
    <div className="sobreMi">
      <h1 className= "titulo">Tomás Marenco</h1>
      <img className= "fotoPerfil" src="/documents/perfil.png" alt="foto"></img>
      <p>Soy desarrollador web full stack y estoy en busca de mi primer empleo en el sector IT. Me considero una persona proactiva, autodidacta y siempre en búsqueda de seguir creciendo profesionalmente.</p>
      <div className="informacion">
        <h3 className="tituloExperiencia">Información personal</h3>
        <h4>Fecha de nacimiento: 07/02/1996</h4>
        <h4>Nacionalidad: Argentina</h4>
        <h4>Localidad: Capital Federal</h4>
        <h3 className="tituloExperiencia">Experiencia Laboral</h3>
        <a href="http://www.castello-mercuri.com.ar/nuevo_sitio/"><h4>Castello Mercuri Asesores de Seguros</h4></a>
        <h4>Analista Administrativo - 2013 / Actualidad</h4>
        <h3 className="tituloExperiencia">Estudios</h3>
        <h4>Desarrollo Web Full Stack - Digital House - 2020 / 2021</h4>
        <h4>Comunicación Audivisual - Universidad de Palermo - 2019 / 2020</h4>
        <h4>Periodismo General - Tea & Deportea - 2017 / 2018</h4>
        <a href="/documents/cvTomasMarenco.pdf" download><button>Descargar CV</button></a>
        <a href="/documents/diploma.pdf" download><button>Descargar diploma de DH</button></a>
      </div>
    </div>
  );
}

export default SobreMi;
