import { HeroContainer, HeroBg, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection