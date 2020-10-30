import {FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteCopy,
  SocialIcons,
  SocialIconLink  

} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLink to="/" onClick={toggleHome}>Home</FooterLink>
                <FooterLink to="about">Sobre</FooterLink>
                <FooterLink to="services">Serviços</FooterLink>
                <FooterLink to="portfolio">Portfolio</FooterLink>             
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'onClick={toggleHome}> 
            FelipeRibeiro|Dev
          </SocialLogo>
          <WebsiteCopy>
          Felipe Ribeiro Dev ©2020 - Feito com 💜 por Felipe Ribeiro
          </WebsiteCopy>
          <SocialIcons>
            <SocialIconLink href="https://www.linkedin.com/in/lfeliperibeiro/" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="https://github.com/lfeliperibeiro" target="_blank" aria-label="GitHub">
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com/Lfelipe_rib" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer