import 
{ 
  Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink 
} 
  from './NavElements'
import { FaBars } from 'react-icons/fa'
const Navbar = ({toggle}) => {
  return (
   <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/"> 
          Felipe Ribeiro
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">Sobre</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Servicos</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="portfolio">Portfolio</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">Contato</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="contact">Whatsapp</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar
