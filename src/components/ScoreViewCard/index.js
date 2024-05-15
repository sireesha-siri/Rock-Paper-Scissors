import {
  ScoreViewCardContainer,
  GameToolsContainer,
  GameTools,
  ScoreCard,
  ScoreHeading,
  ScoreValue,
} from './styledComponents'

const ScoreViewCard = props => {
  const {score} = props

  return (
    <ScoreViewCardContainer>
      <GameToolsContainer>
        <GameTools>
          ROCK <br /> PAPER <br /> SCISSORS
        </GameTools>
      </GameToolsContainer>

      <ScoreCard>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreValue>{score}</ScoreValue>
      </ScoreCard>
    </ScoreViewCardContainer>
  )
}

export default ScoreViewCard
