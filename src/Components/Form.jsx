import React, { useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import  Styles  from '../Styles/contact.module.css';
const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const {state} = useContext(ContextGlobal)


  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [validacion, setValidacion] = useState("")
  const [errors, setErrors] = useState("")

  const validarNombre = (nomb)=>{
    
    const nombreTrim = nomb.trim();
    if(nombreTrim.length >5){
      return true;
    }
    return false;
  }

  const validarEmail = (email)=>{
    
    if((/^\S+@\S+\.\S+$/).test(email)){
      return true;
    }
    return false;
  }
  

  const handleSubmit = (e)=>{
    e.preventDefault();

    const nombreValido = validarNombre(nombre);
    const emailValido = validarEmail(email);

    if(nombreValido && emailValido){
      console.log(`${nombre} nos pondremos en contacto a la brevedad.`);
      setNombre("");
      setEmail("");
      setErrors("")
      setValidacion("info enviada")
      
    }else{
      
      setValidacion("")
      setErrors("Información incorrecta por favor verificar");
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className={Styles.formContain}>
        <input type='text' placeholder='Ingrese el nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <input type='text' placeholder='Ingrese el email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button className={Styles.btn} type="submit">Enviar</button>
        {errors && <label className={Styles.error}>{errors}</label>}
        {validacion && <label className={Styles.ok}>{validacion}</label>}
      </form>     
    </div>
  );
};

export default Form;
