import React from "react";
import { StyledForm } from "../SignUp/styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { verificarInfoSignin } from '../../validaciones/validaRegex'
import { mostrarContrasena } from "../../validaciones/mostrarPass";
import mostrar from '../../img/mostrar.png'

const SigninForm = () => {

  const [info, setInfo] = useState({
    email: undefined,
    password: undefined
  });

  const [errors, setErrors] = useState({
    email: undefined,
    password: undefined
  });

  const handleInputChange = e => {
    setInfo({
        ...info,
        [e.target.name]: e.target.value
    })

    setErrors(verificarInfoSignin({
      ...info,
      [e.target.name]: e.target.value
    }))
    
    console.log(errors)
  };
    
  const handleSubmit = e => {
		e.preventDefault();
    // Aqúí va el código para verificar en base de datos la información del usuario
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

      {/* Botón que hará el submit para comprobar que está registrado 
        <button onClick={handleSubmit} className='ingresar'>Ingresar</>
      */}

      <Link 
        to={!errors ? `/user/${info.email}` : `/signin`} 
        className='link ingresar linkButton'>
          Ingresar
      </Link>

      <div className='footer'>
        <h1>¿No tienes una cuenta?</h1>      
        <label><Link to='/signup' className='link'>Registrate</Link> </label> 
      </div>
    </StyledForm>
  );
}

export default SigninForm