import {
  PortfolioContainer,
  PortfolioH1,
  PotfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioLink,
  PortfolioP,
} from './PortfolioElements'

import Icon1 from '../../images/Icon1.svg'
import Icon2 from '../../images/Icon2.svg'
import Icon3 from '../../images/Icon3.svg'

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Meus Projetos</PortfolioH1>
      <PotfolioWrapper>
        <PortfolioCard>
          <PortfolioIcon src={Icon1}/>         
          <PortfolioLink href='https://fucsia.arq.br/' target='__blank'>
            Fucsia Arquitetura
          </PortfolioLink>
            <PortfolioP>Desenvolvimento de website</PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
        <PortfolioIcon src={Icon2}/>   
        <PortfolioLink href='http://happydarafa.rafalauretto.com/' target='__blank'>
            Happy da Rafa
          </PortfolioLink>
            <PortfolioP>Desenvolvimento de website</PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
        <PortfolioIcon src={Icon3}/> 
        <PortfolioLink href='https://enemeopflores.com.br/' target='__blank'>
            Fucsia Arquitetura
          </PortfolioLink>
            <PortfolioP>Desenvolvimento de website</PortfolioP>
        </PortfolioCard>
      </PotfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio