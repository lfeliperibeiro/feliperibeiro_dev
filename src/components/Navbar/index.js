import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'

import { 
  Nav, 
  NavbarContainer,
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  NavBtn, 
  NavBtnLink 
} from './NavElements'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    }else {
      setScrollNav(false)
    }
  } 
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
   <>
   <IconContext.Provider value={{color: '#ff79c6'}}>
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}> 
          FelipeRibeiro|Dev
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks 
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >
                Sobre
              </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >
                Servicos
              </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >
                Portfolio
                </NavLinks>
          </NavItem>         
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="contact">Whatsapp</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
    </IconContext.Provider>
   </>
  )
}

export default Navbar
