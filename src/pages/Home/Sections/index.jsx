import React from 'react'
import styled from 'styled-components'
import FeaturedGames from './FeaturedGames'
import BrowserGames from './BrowserGames'
import PcGames from './PcGames'
import ShooterGames from './ShooterGames'
import SportGames from './SportGames'
import StrategyGames from './StrategyGames'
import RacingGames from './RacingGames'

const ContainerColumn = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  flex-wrap: wrap;
`
const ContainerRow = styled(ContainerColumn)`
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #fff;
  opacity: 0.7;
`

const Sections = () => {
  return (
    <>
      <ContainerColumn>
        <FeaturedGames />
        <PcGames />
        <BrowserGames />
      </ContainerColumn>

      <ContainerRow>
        <ShooterGames />
        <SportGames />
        <StrategyGames />
        <RacingGames />
      </ContainerRow>
    </>
  )
}

export default Sections
