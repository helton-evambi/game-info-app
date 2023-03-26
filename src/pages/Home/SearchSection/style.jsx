import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 3em;
`
export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  padding: 1em;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secundary};
  font-size: 1rem;
  gap: 0.3rem;
`
export const SearchInput = styled.input.attrs({
  type: 'text',
})`
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`
export const Right = styled.div`
  span {
    margin-left: 0.7em;
    font-size: 1.2rem;
    cursor: default;
  }
`
export const SearchedContainer = styled(Container)`
  justify-content: flex-start;
  align-items: flex-start;
`
export const SearchedContentDiv = styled.div`
  /* display: none; */
  display: flex;
  flex-direction: column;
  top: 0;
  width: 50%;
  min-height: 500px;
  max-height: 750px;
  overflow-y: scroll;
  background-color: #000;
  position: absolute;
  padding: 2em;
  gap: 1em;
`
export const SearchedContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`
export const GameImage = styled.div`
  width: 50px;
  height: 40px;
  img {
    max-width: 100%;
    height: 100%;
  }
`
export const GameName = styled.p`
  &:hover {
    cursor: pointer;
  }
`
