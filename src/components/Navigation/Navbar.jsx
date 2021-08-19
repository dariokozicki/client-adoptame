import React ,{ useState }from 'react'
import {  Nav, Hamburguer, Menu, Logo, NavContent } from './StyledNav'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [ isOpen, setisOpen] = useState(false)
    return (
        <Nav>
            {<NavContent>
                <Logo href="">
                    Adoptame
                </Logo>
                <Hamburguer onClick={()=> setisOpen(!isOpen)}>
                     <div>&#x2630;</div>
                </Hamburguer>
                <Menu isOpen={isOpen}>
                    <Link to="/">Mascotas</Link>
                    <Link to="/favorites">Favoritos</Link>
                    <Link to="/refuges">Refugios</Link>
                    <Link to="/profile">Perfil</Link>
                    <Link to="/login">Login</Link>
                </Menu>
            </NavContent>}
        </Nav>
    )
}


export default Navbar
