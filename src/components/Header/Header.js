import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars  } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle  } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import React, {useState} from 'react';


function Header() {
  const [cellPhoneMenu, setCellPhoneMenu] = useState(true)
  

  return (
    <div className="header">
      <div className="menuIcon">
        <FontAwesomeIcon icon={faBars} onClick ={()=>setCellPhoneMenu(!cellPhoneMenu)}className= {cellPhoneMenu? "fas fa-bars" : "desaparece fas fa-bars"}/>
      </div>
      <div className={cellPhoneMenu? "desaparece headerPc" : "aparece headerPc"}>
          <Link to="/"><p className="itemHeader">INICIO</p></Link>
          <Link to="/proyectos"><p className="itemHeader">PROYECTOS</p></Link>
          <Link to="/tecnologias"><p className="itemHeader">SKILLS E IDIOMAS</p></Link>
          <Link to="/sobre-mi"><p className="itemHeader">SOBRE MI</p></Link>
          <Link to="/contacto"><p className="itemHeader">CONTACTO</p></Link>
          <FontAwesomeIcon icon={faTimesCircle} onClick={()=>setCellPhoneMenu(!cellPhoneMenu)} className="fas fa-times-circle itemHeader itemCellphone"/>
      </div>
    </div>
  );
}

export default Header;
