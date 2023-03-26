import { Container, Title, CardContent } from '../styles'
import { useFetch } from '../../../../hooks/api/useFetch'
import Card from '../../../../components/Card/Card'
const ShooterGames = () => {
  const { data } = useFetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    { category: 'shooter' }
  )
  const ShooterGames = data?.filter((item, index) => index >= 10 && index < 17)
  return (
    <Container direction={'column'}>
      <Title>Shooter Games</Title>
      <CardContent direction={'column'}>
        {ShooterGames?.map((item, index) => (
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

export default ShooterGames
