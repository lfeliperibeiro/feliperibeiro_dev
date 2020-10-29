import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, FaBars, NavMenu, NavItem, NavLinks } from './NavElements'

const Navbar = () => {
  return (
   <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/"> 
          Felipe Ribeiro
        </NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">Sobre</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar
