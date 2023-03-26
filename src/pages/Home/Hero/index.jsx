import {
  Container,
  Image,
  Details,
  DetailTitle,
  DetailContent,
  Description,
} from './style'
import { useFetch } from '../../../hooks/api/useFetch'
import { Slide, Slider } from '../../../styles/slide'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const Hero = () => {
  const { data } = useFetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/game',
    { id: 3 }
  )
  const [margin, setMargin] = useState(0)
  const [transition, setTransition] = useState(1)
  const [increment, setIcrement] = useState(0)

  setInterval(() => {
    setIcrement(increment + 1)
    console.log(increment)
  }, 2000)

  return (
    <Container>
      <Slider margin={margin} transition={transition}>
        <Slide>
          <Image src={data?.screenshots[0].image} />
          <Details>
            <DetailTitle>{data?.title}</DetailTitle>
            <DetailContent>platform: {data?.platform}</DetailContent>
            <DetailContent>publisher: {data?.publisher}</DetailContent>
            <DetailContent>developer: {data?.developer}</DetailContent>
            <DetailContent>release date: {data?.release_date}</DetailContent>
            <Description>{data?.short_description}</Description>
          </Details>
        </Slide>
        <Slide>
          <Image src={data?.screenshots[1].image} />
          <Details>
            <DetailTitle>{data?.title}</DetailTitle>
            <DetailContent>platform: {data?.platform}</DetailContent>
            <DetailContent>publisher: {data?.publisher}</DetailContent>
            <DetailContent>developer: {data?.developer}</DetailContent>
            <DetailContent>release date: {data?.release_date}</DetailContent>
            <Description>{data?.short_description}</Description>
          </Details>
        </Slide>
        <Slide>
          <Image src={data?.screenshots[2].image} />
          <Details>
            <DetailTitle>{data?.title}</DetailTitle>
            <DetailContent>platform: {data?.platform}</DetailContent>
            <DetailContent>publisher: {data?.publisher}</DetailContent>
            <DetailContent>developer: {data?.developer}</DetailContent>
            <DetailContent>release date: {data?.release_date}</DetailContent>
            <Description>{data?.short_description}</Description>
          </Details>
        </Slide>
      </Slider>
    </Container>
  )
}

export default Hero
