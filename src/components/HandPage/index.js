import React from "react";
import { Link } from "react-router-dom";
import { StyledDiv } from "../SignUp/styles";

const Principal = () => (
    <>
    <StyledDiv>
        <Link to='/register/signup' className='link'>Registrar Empresa</Link>
        <Link to='/register/signin' className='link'>Ingresar a mi cuenta</Link>
    </StyledDiv>
    </>
)

export default Principal