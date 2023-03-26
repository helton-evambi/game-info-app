import {
  Container,
  ImageContainer,
  Image,
  DetailContainer,
  DetailContent,
  Title,
} from './style'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/api/useFetch'
import Navbar from '../../layouts/Navbar'

const Detail = () => {
  const { id } = useParams()
  const { data } = useFetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/game',
    { id: id }
  )
  return (
    <>
      <Navbar />
      <Container>
        <ImageContainer>
          <Image src={data?.screenshots[0].image} />
        </ImageContainer>
        <DetailContainer>
          <Title>{data?.title}</Title>
          <DetailContent></DetailContent>
        </DetailContainer>
      </Container>
    </>
  )
}

export default Detail
