import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 3em auto;
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 700px;
  margin-bottom: 1em;
`
export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  box-shadow: 5px 5px 10px 5px ${({ theme }) => theme.colors.secundary};
`
export const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Title = styled.h1`
  font-size: 2rem;
  margin: 1em auto;
`
export const DetailContent = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.4em;
`
