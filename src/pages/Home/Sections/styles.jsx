import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ direction }) => (direction === 'column' ? '23%' : '100%')};
`
export const Title = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  margin: 2em 0;
`
export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction};
  width: ${({ direction }) => (direction === 'column' ? '100%' : '')};
`
