import { Container, Copy, Info, InfoContent, SocialIcons } from './style'
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
const Footer = () => {
  return (
    <Container>
      <SocialIcons>
        <CiFacebook />
        <CiInstagram />
        <CiTwitter />
        <CiYoutube />
      </SocialIcons>
      <InfoContent>
        <Info>Info - Suport - Marketing</Info>
        <Info>Terms of Use - Privacy Policy</Info>
        <Copy>
          <AiOutlineCopyrightCircle />
          2023 - Helton Evambi
        </Copy>
      </InfoContent>
    </Container>
  )
}

export default Footer
