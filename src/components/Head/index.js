import React from "react";
import logo from '../../img/logo.png'
import { StyledHead } from "./styles";
import { Link } from "react-router-dom";

const Head = () => (
    <StyledHead>
        <Link to='/' className='link'><img src={logo} alt="Logo" /></Link>
        <h1>beti</h1>
    </StyledHead>
)

export default Head