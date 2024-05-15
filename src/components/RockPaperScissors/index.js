import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import ScoreViewCard from '../ScoreViewCard'
import GameResult from '../GameResult'

import {
  RockPaperScissorsContainer,
  RulesView,
  PopUpView,
  PopUpImage,
} from './styledComponents'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    resultText: 'YOU WON',
    imagesChosenList: [],
    playGame: true,
  }

  getResult = (you, opponent) => {
    if (you === 'ROCK') {
      switch (opponent) {
        case 'SCISSORS':
          return 'YOU WON'
        case 'PAPER':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAw'
      }
    } else if (you === 'SCISSORS') {
      switch (opponent) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAw'
      }
    } else {
      switch (opponent) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAw'
      }
    }
  }

  imageClicked = id => {
    const {score} = this.state

    const you = choicesList.filter(each => each.id === id)
    const opponent = choicesList[Math.floor(Math.random() * choicesList.length)]
    // console.log(you[0].id)
    // console.log(opponent.id)

    const result = this.getResult(you[0].id, opponent.id)

    let newScore = score

    if (result === 'YOU WON') {
      newScore += 1
    } else if (result === 'YOU LOSE') {
      newScore -= 1
    } else {
      newScore = score
    }

    this.setState({
      score: newScore,
      resultText: result,
      imagesChosenList: [you[0], opponent],
      playGame: false,
    })
  }

  playAgain = () => {
    this.setState({playGame: true})
  }

  render() {
    const {score, resultText, playGame, imagesChosenList} = this.state

    return (
      <RockPaperScissorsContainer>
        <ScoreViewCard score={score} />

        <GameResult
          choicesList={choicesList}
          resultText={resultText}
          playGame={playGame}
          playAgain={this.playAgain}
          imageClicked={this.imageClicked}
          imagesChosenList={imagesChosenList}
        />

        <RulesView>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <PopUpView>
                <button
                  type="button"
                  className="trigger-button-close"
                  onClick={() => close()}
                  aria-label="close"
                >
                  <RiCloseLine />
                </button>

                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </RulesView>
      </RockPaperScissorsContainer>
    )
  }
}

export default RockPaperScissors
