import { useFetch } from '../../../hooks/api/useFetch'
import {
  Container,
  Search,
  SearchInput,
  Right,
  SearchedContentDiv,
  SearchedContent,
  SearchedContainer,
  GameImage,
  GameName,
} from './style'

import { CiSearch } from 'react-icons/ci'
import { HiArrowDown } from 'react-icons/hi'
import { useEffect, useRef, useState } from 'react'

const SearchSection = () => {
  const { data } = useFetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/games'
  )
  const [search, setSearch] = useState('')
  const gamesSearcheds = useRef([])
  useEffect(() => {
    gamesSearcheds.current = data?.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) && search
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  return (
    <>
      {console.log(gamesSearcheds.current)}
      <Container>
        <Search>
          <CiSearch />
          <SearchInput
            placeholder="Search your game"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
        <Right>
          <span>Sort</span>
          <sub>
            <HiArrowDown />
          </sub>

          <span>Category</span>
          <sub>
            <HiArrowDown />
          </sub>

          <span>Plataform</span>
          <sub>
            <HiArrowDown />
          </sub>
        </Right>
      </Container>
      <SearchedContainer>
        {search && (
          <SearchedContentDiv>
            {gamesSearcheds.current?.map((item) => (
              <SearchedContent>
                <GameImage>
                  <img src={item?.thumbnail} alt="" />
                </GameImage>
                <GameName>{item?.title}</GameName>
              </SearchedContent>
            ))}
          </SearchedContentDiv>
        )}
      </SearchedContainer>
    </>
  )
}

export default SearchSection
