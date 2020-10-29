import {
  PortfolioContainer,
  PortfolioH1,
  PotfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
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
          <PortfolioH2>
            Fucsia Arquitetura
          </PortfolioH2>
            <PortfolioP>Desenvolvimento de website</PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
        <PortfolioIcon src={Icon2}/>   
          <PortfolioH2>
            Happy da Rafa
          </PortfolioH2>
            <PortfolioP>Desenvolvimento de website</PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
        <PortfolioIcon src={Icon3}/> 
          <PortfolioH2>
            Fucsia Arquitetura
          </PortfolioH2>
            <PortfolioP>Desenvolvimento de website</PortfolioP>
        </PortfolioCard>
      </PotfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio