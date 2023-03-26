import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5em;
  margin-top: 3em;
  background-color: ${({ theme }) => theme.colors.secundary};
`
export const SocialIcons = styled.div`
  display: flex;
  font-size: 3rem;
`
export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`
export const Info = styled.p`
  margin: 0.2em 0;
  font-weight: 550;
  font-size: 1rem;
`
export const Copy = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 1em;
`
