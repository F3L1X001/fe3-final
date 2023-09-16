import { createContext } from "react";
import { useEffect, useReducer, useMemo } from "react";
import React from "react";


export const initialState = {theme: "light", data: [], fav: []}

export const ContextGlobal = createContext();

function dentistReducer(state, action){
  switch (action.type){
    case 'DATA':
      return{...state, 
        data: action.payload
      }
    case 'THEME':
      return{
        ...state,
        theme: state.theme === 'light'?'dark':'light'
      }
    case 'ADDFAV':
      const favs = [...state.fav, action.payload]
      localStorage.setItem("Favourites", JSON.stringify(favs))
      return{ ...state,
        fav: favs
      }
    case 'RMVFAV':
      const favsFilter = state.fav.filter((favo) => favo.id !== action.payload);
        localStorage.setItem("Favourites", JSON.stringify(favsFilter)); 
        return { ...state, 
          fav: favsFilter
        };
    default:
      return state
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(dentistReducer, initialState)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=> {console.log(data); dispatch({type:'DATA', payload: data})})
    .catch((error)=>{
      console.error("Error al procesar la informacion ",error);
    })
  },[]);


  const memoContext = useMemo(()=>(
    ({state, dispatch})
  ),[state]);
  
  return (
    <ContextGlobal.Provider value={{memoContext}}>
      {children}
    </ContextGlobal.Provider>
  );
};

