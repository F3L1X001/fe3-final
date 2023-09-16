import React from "react";
import Styles from '../Styles/card.module.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = ({name, username, id}) => {

  const {memoContext} = useContext(ContextGlobal)
  const {state, dispatch} = memoContext;
  
  const addFav = ()=>{
    dispatch({ type: "ADDFAV", payload: { id, name, username } });
  }

  const rmvFav = ()=>{
    dispatch({ type: "RMVFAV", payload: id });
  }

  const inFav = state.fav.some((favo) => favo.id === id)

  return (
    <div className={state.theme ==='light' ? Styles.light : Styles.dark}>
      
        <Link to={`/dentist/${id}`}>
          <img src="../images/doctor.jpg" className={Styles.img} / >
          <h3 className={Styles.h3}> {name}</h3>
          <h4 className={Styles.h4}> {username}</h4>
        </Link>
        <div className={Styles.card_content}>
            { !inFav ? (<button onClick={addFav} className={state.theme ==='light' ? Styles.btn : Styles.btndark}>Add fav</button>) : (<button onClick={rmvFav} className={state.theme ==='light' ? Styles.btn : Styles.btndark}>Remove fav</button>)}
        </div>
    </div>
  );
};

export default Card;
