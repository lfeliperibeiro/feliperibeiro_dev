import { Link } from 'react-scroll'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #282a36;
`
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

  @media screen and (max-width: 820px) {
    padding: 32px;
  }
`
export const FooterLinksWrapper = styled.div`
display: flex;
align-items: center;


@media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: #f8f8f2;
  cursor: pointer;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const FooterLink = styled(Link)`
  color: #f8f8f2;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover{
    color: #ff79c6;
    transition: 0.2s ease-out;
  }
`

  export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
  `
  export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
      flex-direction: column;
    }
  `
  export const SocialLogo = styled(Link)`
    color: #bd93f9;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
  `
  export const WebsiteCopy = styled.small`
    color: #f8f8f2;
    margin-bottom: 16px;
  `
  export const SocialIcons = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    width: 240px;
  `
  export const SocialIconLink = styled.a`
    color: #50fa7b;
    font-size: 24px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #ff79c6;
      transition: all 0.2s ease-in-out;
    }
  `
  