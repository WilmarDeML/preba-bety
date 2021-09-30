import { StyledNavBar, StyledUl, MyLi } from './styles'
import logo from '../../img/logo.png'
import campana from '../../img/campana.png'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <StyledNavBar>
        <StyledUl>
            <li>
                <img src={logo} alt='Logo' />
            </li>
            <MyLi>
                <img src={campana} alt='Campana' />
                {/* Botón que invoca el método para cerrar sesión */}
                {/* <button onClick={handleOnclick}>Cerrar Sesión</button> */}
                <Link to='/register/signin' className='link'>Cerrar Sesión</Link>
            </MyLi>
        </StyledUl>
    </StyledNavBar>
)

export default NavBar