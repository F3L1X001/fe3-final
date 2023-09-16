import React from 'react'
import  Styles from '../Styles/footer.module.css'
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";



const Footer = () => {

  const {memoContext} = useContext(ContextGlobal)
  const {state} = memoContext;

  return (
    <footer className={state.theme ==='light' ? Styles.light : Styles.dark}>
        <div className={Styles.div}>
          <p>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo' />
        </div>
    </footer>
  )
}

export default Footer
