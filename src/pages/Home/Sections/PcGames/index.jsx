import { Container, Title, CardContent } from '../styles'
import { useFetch } from '../../../../hooks/api/useFetch'
import Card from '../../../../components/Card/Card'

const PcGames = () => {
  const { data } = useFetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    { platform: 'pc' }
  )
  const pcGames = data?.filter((_, index) => index >= 10 && index < 15)
  return (
    <Container>
      <Title>Games for Pc</Title>
      <CardContent direction={'row'}>
        {pcGames?.map((item, index) => (
          <Card
            width={'18%'}
            height={'300px'}
            key={index}
            data={item}
            borderRadius={false}
            platform={false}
          />
        ))}
      </CardContent>
    </Container>
  )
}

export default PcGames
