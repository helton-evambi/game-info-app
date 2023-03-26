import { Container, Title, CardContent } from '../styles'
import { useFetch } from '../../../../hooks/api/useFetch'
import Card from '../../../../components/Card/Card'

const FeaturedGames = () => {
  const { data } = useFetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/games'
  )
  const featuredGames = data?.filter((_, index) => index < 6)
  return (
    <Container>
      <Title>Featured Games</Title>
      <CardContent direction={'row'}>
        {featuredGames?.map((item, index) => (
          <Card width={'31%'} height={'400px'} key={index} data={item} />
        ))}
      </CardContent>
    </Container>
  )
}

export default FeaturedGames
