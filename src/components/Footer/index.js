import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Links </FooterLinkTitle>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="about">Sobre</FooterLink>
                <FooterLink to="services">Serviços</FooterLink>
                <FooterLink to="services">Portfolio</FooterLink>             
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer