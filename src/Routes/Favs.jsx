import React from "react";
import Card from "../Components/Card";
import { useContext, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import  Styles  from "../Styles/favs.module.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { memoContext } = useContext(ContextGlobal);
  const { state } = memoContext;

  const [dentist, setDentist] = useState([]);


  return (
    <div className={state.theme ==='light' ? Styles.light : Styles.dark}>
      <h1 className={Styles.h1}>Dentists Favs</h1>
      <div className={Styles.div}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {dentist && state.fav.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
