import {
  InfoContainer, 
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  ButtonLink

} from './InfoElements'



const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt, 
  primary,
  dark, 
  dark2, 
}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}> 
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <SubTitle darkText={darkText}>{description}</SubTitle>
              <BtnWrap>
              <ButtonLink href=" https://api.whatsapp.com/send?phone=5511976426686" target='__blank'>Entre em contato</ButtonLink>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection