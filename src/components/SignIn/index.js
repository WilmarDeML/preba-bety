import React from "react";
import { StyledForm } from "../SignUp/styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { verificarExpresion } from '../../validaciones/validaRegex'
import { mostrarContrasena } from "../../validaciones/mostrarPass";
import mostrar from '../../img/mostrar.png'

const SigninForm = () => {

  const [info, setInfo] = useState({
    email: undefined,
    password: undefined
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

    console.log(errors)
  };
    
  const handleSubmit = e => {
		e.preventDefault();

	}
  
  return (
    
    <StyledForm onSubmit={handleSubmit}>

      <span className='span1'>Ingresa a tu plataforma beti</span>

      <label>Correo</label>
      <input
        type="email"
        onChange={handleInputChange}
        name="email"
        placeholder="Escribe aquí"
        required
      />{errors.email && (<span className='error'>{errors.email}</span>)}

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

      <p><Link to='/recuperar' className='link'>Olvidé mi contraseña</Link></p>

      <button className='ingresar'>Ingresar</button>
      
      <div className='footer'>
        <h1>¿No tienes una cuenta?</h1>      
        <label><Link to='/signup' className='link'>Registrate</Link> </label> 
      </div>
    </StyledForm>
  );
}

export default SigninForm