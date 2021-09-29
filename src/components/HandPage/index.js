import React from "react";
import { Link } from "react-router-dom";
import { StyledDiv } from "../SignUp/styles";

const Principal = () => (
    <>
    <StyledDiv>
        <Link to='/signup' className='link'>Registrar Empresa</Link>
        <Link to='/signin' className='link'>Ingresar a mi cuenta</Link>
    </StyledDiv>
    </>
)

export default Principal