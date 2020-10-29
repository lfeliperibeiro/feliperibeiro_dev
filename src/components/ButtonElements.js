import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#bd93f9' : '#282a36')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
  color: ${({dark}) => (dark ? '#282a36' : '#f8f8f2')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({primary}) => (primary ? '#ff79c6' : '#282a36')};
  }
` 
