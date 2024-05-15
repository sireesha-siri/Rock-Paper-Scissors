import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  ResultButton,
} from './styledComponents'

const GameResult = props => {
  const {
    choicesList,
    resultText,
    playGame,
    playAgain,
    imageClicked,
    imagesChosenList,
  } = props

  const getGameView = () => (
    <>
      <GameButton
        type="button"
        data-testid="rockButton"
        onClick={() => imageClicked(choicesList[0].id)}
      >
        <GameImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
      </GameButton>

      <GameButton
        type="button"
        data-testid="scissorsButton"
        onClick={() => imageClicked(choicesList[1].id)}
      >
        <GameImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
      </GameButton>

      <GameButton
        type="button"
        data-testid="paperButton"
        onClick={() => imageClicked(choicesList[2].id)}
      >
        <GameImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </GameButton>
    </>
  )

  const getResultView = () => (
    <>
      <ResultImageContainer>
        <ResultName>YOU</ResultName>
        <GameImage src={imagesChosenList[0].imageUrl} alt="your choice" />
      </ResultImageContainer>
      <ResultImageContainer>
        <ResultName>OPPONENT</ResultName>
        <GameImage src={imagesChosenList[1].imageUrl} alt="opponent choice" />
      </ResultImageContainer>
      <ResultImageContainer>
        <ResultText>{resultText}</ResultText>
        <ResultButton type="button" onClick={playAgain}>
          PLAY AGAIN
        </ResultButton>
      </ResultImageContainer>
    </>
  )

  return (
    <GameViewContainer>
      {playGame ? getGameView() : getResultView()}
    </GameViewContainer>
  )
}

export default GameResult
