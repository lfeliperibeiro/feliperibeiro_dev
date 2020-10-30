import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #282a36;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
  
`
export const CloseIcon = styled(FaTimes)`
  color: #f8f8f2;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #f8f8f2;
`
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }

`
export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #f8f8f2;
  cursor: pointer;

  &:hover {
    color: #ff79c6;
    transition: 0.2s ease-in-out;
  }
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
export const SidebarRoute = styled.a`
  border-radius: 50px;
  background: #bd93f9;
  white-space: nowrap;
  padding: 16px 64px;
  color: #44475a;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff79c6;
    color: #f8f8f2;
  }
`
