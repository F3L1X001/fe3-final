import React from 'react'
import { useContext, useState, useEffect } from "react";
import { ContextGlobal } from '../Components/utils/global.context';
import {useParams} from 'react-router-dom'
import Styles from '../Styles/detail.module.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {memoContext} = useContext(ContextGlobal)
  const {state} = memoContext;
  const {id} = useParams();
  const [dentist, setDentist] = useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>res.json())
    .then((data)=> setDentist(data))
    .catch((error)=>{
      console.error("Error al procesar la informacion ",error);
    })
  },[id]);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={state.theme ==='light' ? Styles.light : Styles.dark}>
      <h1 className={Styles.h1}>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <div className={Styles.div}>
          <h2 className={Styles.h2}>{dentist.name}</h2>
          <h2 className={Styles.h2}>{dentist.email}</h2>
          <h2 className={Styles.h2}>{dentist.h2hone}</h2>
          <h2 className={Styles.h2}>{dentist.website}</h2>
        </div>
    </div>
  )
}

export default Detail