import { Container, Title, CardContent } from '../styles'
import { useFetch } from '../../../../hooks/api/useFetch'
import Card from '../../../../components/Card/Card'

const SportGames = () => {
  const { data } = useFetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    { category: 'sports' }
  )
  const sportGames = data?.filter((item, index) => index >= 0 && index < 7)
  return (
    <Container direction={'column'}>
      <Title>Sport Games</Title>
      <CardContent direction={'column'}>
        {sportGames?.map((item, index) => (
          <Card
            width={'100%'}
            key={index}
            data={item}
            borderRadius={false}
            platform={false}
            size={'small'}
          />
        ))}
      </CardContent>
    </Container>
  )
}

export default SportGames
