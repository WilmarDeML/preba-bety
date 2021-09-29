import React from "react";
import { StyledForm } from "./styles";
import { Link } from "react-router-dom";
import iconAtras from '../../img/atras.png'
import mostrar from '../../img/mostrar.png'
import { useState } from "react";
import { verificarExpresion } from '../../validaciones/validaRegex'
import { mostrarContrasena } from '../../validaciones/mostrarPass'

export default function SignupForm() {

  const [info, setInfo] = useState({
    nombreNegocio: undefined,
    email: undefined,
    nit: undefined,
    industria: undefined,
    // password:false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = e => {
    setInfo({
        ...info,
        [e.target.name]: e.target.value
    })

    setErrors(verificarExpresion({
      ...info,
      [e.target.name]: e.target.value
    }))
  };
  
  return (
    
    <StyledForm /*onSubmit={SubmitHandler}*/>
      <span>
        <img src={iconAtras} alt='Atras' />
        <label>Registra tu negocio</label>
      </span>

      <label>Nombre del negocio</label>
      <input
        type="text"
        onChange={handleInputChange}
        name="nombreNegocio"
        placeholder="Escribe aquí"
        required
        maxLength='20'
      />

      <label>Número de NIT</label>
      <input
        type="text"
        onChange={handleInputChange}
        name="nit"
        placeholder="Escribe aquí"
        required
        maxLength='9'
        pattern='^[0-9]*$'
      />
      {errors.nit && (<span className='error'>{errors.nit}</span>)}

      <label>Industria</label>
      <select name='industria' onChange={handleInputChange} className='inputClass' >
        <option selected value="0"> Selecciona una opción </option>
        <option value='1'>Industria 1</option>
        <option value='2'>Industria 2</option>
      </select>       
      
      <label>Correo</label>
      <input
        type="email"
        onChange={handleInputChange}
        name="email"
        placeholder="Escribe aquí"
        required
      />
      {errors.email && (<span className='error'>{errors.email}</span>)}

      <label>Contraseña</label>
      <div className='divPassword'>
        <input
          type="password"
          onChange={handleInputChange}
          name="password"
          placeholder="Escribe aquí"
          required
          id='password'
        />
        <div  onClick={mostrarContrasena}><img src={mostrar} alt='mostrar' /></div>
      </div>

      <div className='check'>
          <input
            type="checkbox"
            name="terminos"
            required
          />          
          <label for='terminos'>Aceptar <Link to='/terminos' className='link'>Términos y condiciones</Link></label>
      </div>
      
      <button type="submit" value="Sign up" className="registrar">
        Registrar Mi cuenta
      </button>
      
      <label className='check'>¿Ya tienes una cuenta? <Link to='/signin' className='link'>Inicia sesión</Link></label> 

    </StyledForm>
  );
}
