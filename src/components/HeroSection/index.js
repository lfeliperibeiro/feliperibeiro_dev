import { useState } from 'react'
import {
   HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight
  } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../../components/ButtonElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Felipe Ribeiro</HeroH1>
        <HeroP>Desenvolvedor Front-end</HeroP>
        <HeroBtnWrapper>
          <Button to="portfolio"
           onMouseEnter={onHover} 
           onMouseLeave={onHover}
           primary="true"
           dark="true"
           >
            Projetos { hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection