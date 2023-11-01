import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  AppContainer,
  AppHeader,
  AppHeading,
  ScoreBoard,
  ScoreBoardTitle,
  TotalScore,
  GameContainer,
  PopupContainer,
  RulesButton,
  RulesImage,
  ModalContainer,
  CloseButton,
  ControlsList,
  ControlItem,
  ControlButton,
  ControlImage,
  ResultViewContainer,
  Players,
  Player,
  PlayerLabel,
  PlayerChoiceImage,
  GameStatusContainer,
  Status,
  PlayAgainBtn,
  ResponsiveContainer,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    totalScore: 0,
    isPlaying: true,
    userChoice: null,
    opponentChoice: null,
    gameStatus: null,
  }

  computeResult = () => {
    const {userChoice, opponentChoice} = this.state
    if (userChoice === opponentChoice) {
      this.setState({
        gameStatus: 'DRAW',
        isPlaying: false,
      })
    } else if (
      (userChoice === 'PAPER' && opponentChoice === 'ROCK') ||
      (userChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (userChoice === 'ROCK' && opponentChoice === 'SCISSORS')
    ) {
      this.setState(prevState => ({
        totalScore: prevState.totalScore + 1,
        gameStatus: 'WON',
        isPlaying: false,
      }))
    } else if (
      (userChoice === 'PAPER' && opponentChoice === 'SCISSORS') ||
      (userChoice === 'ROCK' && opponentChoice === 'PAPER') ||
      (userChoice === 'SCISSORS' && opponentChoice === 'ROCK')
    ) {
      this.setState(prevState => ({
        totalScore: prevState.totalScore - 1,
        gameStatus: 'LOSE',
        isPlaying: false,
      }))
    }
  }

  onClickControlButton = selectedChoiceId => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * 3)
    this.setState(
      {
        userChoice: selectedChoiceId,
        opponentChoice: choicesList[randomNumber].id,
      },
      this.computeResult,
    )
  }

  onClickPlayAgainBtn = () => {
    this.setState({
      userChoice: null,
      opponentChoice: null,
      gameStatus: null,
      isPlaying: true,
    })
  }

  getTestId = id => {
    if (id === 'PAPER') {
      return 'paperButton'
    }
    if (id === 'ROCK') {
      return 'rockButton'
    }
    return 'scissorsButton'
  }

  renderGameControls = () => {
    const {choicesList} = this.props
    return (
      <ControlsList>
        {choicesList.map(eachItem => (
          <ControlItem key={eachItem.id}>
            <ControlButton
              type="button"
              data-testid={this.getTestId(eachItem.id)}
              onClick={() => this.onClickControlButton(eachItem.id)}
            >
              <ControlImage src={eachItem.imageUrl} alt={eachItem.id} />
            </ControlButton>
          </ControlItem>
        ))}
      </ControlsList>
    )
  }

  renderResultView = () => {
    const {userChoice, opponentChoice, gameStatus} = this.state
    const {choicesList} = this.props
    const getImageUrl = id => {
      const object = choicesList.find(item => item.id === id)
      return object.imageUrl
    }
    return (
      <ResultViewContainer>
        <Players>
          <Player>
            <PlayerLabel>You</PlayerLabel>
            <PlayerChoiceImage
              src={getImageUrl(userChoice)}
              alt="your choice"
            />
          </Player>
          <Player>
            <PlayerLabel>Opponent</PlayerLabel>
            <PlayerChoiceImage
              src={getImageUrl(opponentChoice)}
              alt="opponent choice"
            />
          </Player>
        </Players>

        <GameStatusContainer>
          <Status>
            {gameStatus === 'DRAW' ? 'IT IS DRAW' : `YOU ${gameStatus}`}
          </Status>
          <PlayAgainBtn type="button" onClick={this.onClickPlayAgainBtn}>
            PLAY AGAIN
          </PlayAgainBtn>
        </GameStatusContainer>
      </ResultViewContainer>
    )
  }

  render() {
    const {choicesList} = this.props
    const {totalScore, isPlaying} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <AppHeader>
            <AppHeading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
              <br />
            </AppHeading>

            <ScoreBoard>
              <ScoreBoardTitle>Score</ScoreBoardTitle>
              <TotalScore>{totalScore}</TotalScore>
            </ScoreBoard>
          </AppHeader>
          <GameContainer>
            {isPlaying ? this.renderGameControls() : this.renderResultView()}
          </GameContainer>
          <PopupContainer>
            <Popup
              modal
              trigger={<RulesButton type="button">Rules</RulesButton>}
              overlayStyle={{backgroundColor: 'rgba(0,0,0,0.6)'}}
            >
              {close => (
                <ModalContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine size={20} color="#231f20" />
                  </CloseButton>

                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ModalContainer>
              )}
            </Popup>
          </PopupContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default RockPaperScissors
