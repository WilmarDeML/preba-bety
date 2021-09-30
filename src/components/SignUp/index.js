import React from "react";
import { StyledForm } from "./styles";
import { Link } from "react-router-dom";
import iconAtras from '../../img/atras.png'
import mostrar from '../../img/mostrar.png'
import { useState } from "react";
import { verificarInfoSignup } from '../../validaciones/validaRegex'
import { mostrarContrasena } from '../../validaciones/mostrarPass'

export default function SignupForm() {

  const [info, setInfo] = useState({
    nombreNegocio: undefined,
    email: undefined,
    nit: undefined,
    industria: undefined,
    password: undefined,
    terminos: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = e => {
    console.log(e.target.value)
    
    setInfo({
        ...info,
        [e.target.name]: e.target.value
    })

    if(e.target.name === 'terminos' && info.terminos === 'on'){
      setInfo({
        ...info,
        terminos: ''
      })
    }

    setErrors(verificarInfoSignup({
      ...info,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = e => {
    e.preventDefault()
    //Código para postear info en base de datos
  }
  return (
    
    <StyledForm onSubmit={handleSubmit}>
      <span>
        <img src={iconAtras} alt='Atras' />
        <label>Registra tu negocio</label>
      </span>

      <label>Nombre del negocio</label>
      <input
        type="text"
        onChange={handleInputChange}
        name="empresa"
        placeholder="Escribe aquí"
        required
        maxLength='20'
      />
      {errors.empresa && (<span className='error'>{errors.empresa}</span>)}

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

      {errors.password && (<span className='error'>{errors.password}</span>)}

      <div className='check'>
          <input
            type="checkbox"
            name="terminos"
            onChange={handleInputChange}
            required
          />          
          <label for='terminos'>Aceptar <Link to='/terminos' className='link'>Términos y condiciones</Link></label>
      </div>

      <Link 
        to={!errors && info.terminos.length ? `/register/signin` : `/register/signup`} 
        className='link ingresar linkButton'>
          Registrar Mi cuenta
      </Link>
      
      {/* Boton que hará el submit para que los datos vayan a la base de datos */}
      {/* <button type="submit" value="Sign up" className="registrar">
        Registrar Mi cuenta
      </button> */}
      
      <label className='check'>¿Ya tienes una cuenta? <Link to='/register/signin' className='link'>Inicia sesión</Link></label> 

    </StyledForm>
  );
}
