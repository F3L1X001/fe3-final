import React from 'react'
import Card from '../Components/Card'
import { useContext } from "react";
import { ContextGlobal } from '../Components/utils/global.context';
import Styles from '../Styles/home.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {memoContext} = useContext(ContextGlobal)
  const {state} = memoContext;
  
  return (
    <main className= {state.theme ==='light' ? Styles.light : Styles.dark} {...Styles.main}>
      <h1 className= {Styles.h1}>Home</h1>
      <div className= {Styles.div}>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Home