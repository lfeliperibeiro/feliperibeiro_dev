import styled from 'styled-components'

  export const PortfolioContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #44475a	;

    @media screen and (max-width: 768px) {
      height: 1100px;
    }

    @media screen and (max-width: 480px) {
      height: 1300px;
    }
  `
  export const PotfolioWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
    }
  `
  export const PortfolioCard = styled.div`
    background: #f8f8f2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

  `
  export const PortfolioIcon = styled.img`
    height: 200px;
    width: 230px;
    margin-bottom: 10px;    
  `
  export const PortfolioH1 = styled.h1`
    font-size: 2,5rem;
    color: #f1fa8c;
    margin-bottom: 64px;
    

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  `
  export const PortfolioH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
    color: #bd93f9;
    
  `
  export const PortfolioP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #44475a;
  `