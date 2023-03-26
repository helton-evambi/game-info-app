import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1400px;
  height: 700px;
  overflow: hidden;
  margin: 0 auto;
`
export const Image = styled.img`
  width: 70%;
  height: 100%;
  border-radius: 8px;
  margin-right: 2em;
`
export const Details = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0.4;
`
export const DetailTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1em;
`
export const DetailContent = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.4em;
`
export const Description = styled(DetailContent)`
  margin-top: 1.2em;
  font-style: italic;
`
