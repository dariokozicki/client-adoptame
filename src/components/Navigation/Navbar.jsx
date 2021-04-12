import React ,{ useState }from 'react'
import {  Nav, Hamburguer, Menu, MenuLink, Logo } from './StyledNav'

const Navbar = () => {
    const [ isOpen, setisOpen] = useState(false)
    return (
        <Nav>
            <Logo href="">
                Adoptame
            </Logo>
            <Hamburguer onClick={()=> setisOpen(!isOpen)}>
                 <div>&#x2630;</div>
            </Hamburguer>
            <Menu isOpen={isOpen}>
                <MenuLink href="">Mascotas</MenuLink>
                <MenuLink href="">Favoritos</MenuLink>
                <MenuLink href="">Refugios</MenuLink>
                <MenuLink href="">Perfil</MenuLink>
                <MenuLink href="">Login</MenuLink>
            </Menu>
        </Nav>
    )
}


export default Navbar
