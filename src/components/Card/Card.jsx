import { Container, Image, TextContetnt, Title, Text } from "./Card.Style"

const Card = ({data, width, height, borderRadius = true, platform = true, size = 'normal'}) => {
  return (
    <Container 
      width = {width} 
      height = {height} 
      borderRadius = {borderRadius} 
      size = {size}
    >
      <Image src={data.thumbnail} size = {size} borderRadius={borderRadius}/>
      <TextContetnt>
        <Title size = {size}>{data.title}</Title>
        { platform && (<Text size = {size}>{data.platform}</Text>) }
        <Text size = {size}>{data.publisher}</Text>
        <Text size = {size} style={{fontWeight:'bold'}}>{data.release_date}</Text>
      </TextContetnt>
    </Container>
  )
}

export default Card