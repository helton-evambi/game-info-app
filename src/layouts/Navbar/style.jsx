import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100wh;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.secundary};
  color: #DEE2E6;
`
export const Left = styled.div`
  border-right: 1px solid #E9ECEF;
  padding: 0.2em;
  font-weight: 700;
  font-size: 1.3rem;
  cursor: pointer;
`
export const Menu = styled.ul`
  display: flex;
  list-style: none;
`
export const MenuItem = styled.li`
  margin-right: 1em;
  cursor: pointer;
  font-size: 1.2rem;
`
export const Right = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 1em;
`