import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import Styles from '../Styles/navbar.module.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const {memoContext} = useContext(ContextGlobal)
  const {state, dispatch} = memoContext;
  
  
  
  const themeChange = ()=>{
    dispatch({type: "THEME",});

  }

  return (
    <nav className={state.theme ==='light' ? Styles.light : Styles.dark}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ul className={Styles.Ul}>
        <li className={Styles.li}><Link to="/home" className={Styles.link}>Home</Link></li>
        <li className={Styles.li}><Link to="/contacto" className={Styles.link}>Contacto</Link></li>
        <li className={Styles.li}><Link to="/favs" className={Styles.link}>Favoritos</Link></li>
      </ul>
      <button onClick={themeChange} className={state.theme === 'light'?Styles.sunny:Styles.moon}>{state.theme==='light' ? (<FontAwesomeIcon icon={faSun} />):(<FontAwesomeIcon icon={faMoon} />)}
        </button>
    </nav>
  )
}

export default Navbar