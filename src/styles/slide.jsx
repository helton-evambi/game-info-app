import styled from 'styled-components'

export const Slider = styled.div`
  width: 400%;
  height: 100%;
  display: flex;
  margin-left: ${({ margin }) => margin}%;
  transition: all ${({ transition }) => transition}s;
`
export const Slide = styled.div`
  width: 25%;
  display: flex;
`
