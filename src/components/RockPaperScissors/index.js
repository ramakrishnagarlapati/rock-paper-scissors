import {useState, useEffect, useRef} from 'react'
import Popup from 'reactjs-popup'
import {
  AppContainer,
  AppHeader,
  OptionsList,
  OptionItem,
  OptionText,
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
} from './styledComponents'

function RockPaperScissors({choicesList}) {
  const [totalScore, setTotalScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [userChoice, setUserChoice] = useState(null)
  const [opponentChoice, setOpponentChoice] = useState(null)
  const [gameStatus, setGameStatus] = useState(null)
  const computeResult = () => {
    if (userChoice === opponentChoice) {
      setGameStatus('DRAW')
      setIsPlaying(false)
    } else if (
      (userChoice === 'PAPER' && opponentChoice === 'ROCK') ||
      (userChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (userChoice === 'SCISSORS' && opponentChoice === 'PAPER')
    ) {
      setTotalScore(totalScore + 1)
      setGameStatus('WIN')
      setIsPlaying(false)
    } else if (
      (userChoice === 'PAPER' && opponentChoice === 'SCISSORS') ||
      (userChoice === 'PAPER' && opponentChoice === 'ROCK') ||
      (userChoice === 'SCISSORS' && opponentChoice === 'ROCK')
    ) {
      setTotalScore(totalScore - 1)
      setGameStatus('LOSE')
      setIsPlaying(false)
    }
  }
  useEffect(() => {
    computeResult()
  }, [userChoice])
  const onClickControlButton = selectedChoiceId => {
    setUserChoice(selectedChoiceId)
    const randomNumber = Math.floor(Math.random() * 3)
    setOpponentChoice(choicesList[randomNumber].id)
  }

  const getTestId = id => {
    if (id === 'PAPER') {
      return 'paperButton'
    }
    if (id === 'ROCK') {
      return 'rockButton'
    }
    return 'scissorsButton'
  }
  const renderGameControls = () => (
    <ControlsList>
      {choicesList.map(eachItem => (
        <ControlItem key={eachItem.id}>
          <ControlButton
            type="button"
            data-testid={getTestId(eachItem.id)}
            onClick={() => onClickControlButton(eachItem.id)}
          >
            <ControlImage src={eachItem.imageUrl} alt={eachItem.id} />
          </ControlButton>
        </ControlItem>
      ))}
    </ControlsList>
  )
  const renderResultView = () => {
    const getImageUrl = id => {
      const object = choicesList.find(item => item.id === id)
      return object.imageUrl
    }
    return (
      userChoice && (
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
            <PlayAgainBtn type="button">Play Again</PlayAgainBtn>
          </GameStatusContainer>
        </ResultViewContainer>
      )
    )
  }
  return (
    <AppContainer>
      <AppHeader>
        <OptionsList>
          {choicesList.map(eachChoice => (
            <OptionItem key={eachChoice.id}>
              <OptionText>{eachChoice.id}</OptionText>
            </OptionItem>
          ))}
        </OptionsList>
        <ScoreBoard>
          <ScoreBoardTitle>Score</ScoreBoardTitle>
          <TotalScore>{totalScore}</TotalScore>
        </ScoreBoard>
      </AppHeader>
      <GameContainer>
        {isPlaying ? renderGameControls() : renderResultView()}
      </GameContainer>
      <PopupContainer>
        <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
          {close => (
            <ModalContainer>
              <CloseButton type="button" onClick={() => close()}>
                Close
              </CloseButton>

              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </ModalContainer>
          )}
        </Popup>
      </PopupContainer>
    </AppContainer>
  )
}
export default RockPaperScissors
