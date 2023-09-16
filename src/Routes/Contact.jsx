import React from 'react'
import Form from '../Components/Form'
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import  Styles  from "../Styles/contact.module.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { memoContext } = useContext(ContextGlobal);
  const { state } = memoContext;
  return (
    <div className={state.theme ==='light' ? Styles.light : Styles.dark}>
      <h2 className={Styles.h2}>Want to know more?</h2>
      <p className={Styles.p}>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact