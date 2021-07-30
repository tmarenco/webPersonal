import './Header.css';
import {Link} from "react-router-dom"
import React, {useState} from 'react';


function Header() {
  const [cellPhoneMenu, setCellPhoneMenu] = useState(true)
  

  return (
    <div className="header">
      <div className="menuIcon">
        <i onClick ={()=>setCellPhoneMenu(!cellPhoneMenu)}className= {cellPhoneMenu? "fas fa-bars" : "desaparece fas fa-bars"}></i>
      </div>
      <div className={cellPhoneMenu? "desaparece headerPc" : "aparece headerPc"}>
          <Link to="/"><p className="itemHeader">Inicio</p></Link>
          <Link to="/proyectos"><p className="itemHeader">Proyectos</p></Link>
          <Link to="/tecnologias"><p className="itemHeader">Skills e Idiomas</p></Link>
          <Link to="/sobre-mi"><p className="itemHeader">Sobre mi</p></Link>
          <Link to="/contacto"><p className="itemHeader">Contacto</p></Link>
          <i onClick={()=>setCellPhoneMenu(!cellPhoneMenu)} className="fas fa-times-circle itemHeader itemCellphone"></i>
      </div>
    </div>
  );
}

export default Header;
