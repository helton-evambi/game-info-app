import { Container, Title, CardContent } from '../styles'
import { useFetch } from '../../../../hooks/api/useFetch'
import Card from '../../../../components/Card/Card'

const StrategyGames = () => {
  const { data } = useFetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    { category: 'strategy' }
  )
  const strategyGames = data?.filter((item, index) => index >= 10 && index < 17)
  return (
    <Container direction={'column'}>
      <Title>Strategy Games</Title>
      <CardContent direction={'column'}>
        {strategyGames?.map((item, index) => (
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

export default StrategyGames
