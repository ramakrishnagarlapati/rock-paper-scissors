import styled from 'styled-components'

export const AppContainer = styled.div`
  font-family: 'Bree Serif';
  min-height: 100vh;
  background-color: #223a5f;
  color: #fff;
  display: flex;
  justify-content: center;
`
export const ResponsiveContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 50px auto;
  }
`

export const AppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 8px;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 800px;
  }
`

export const AppHeading = styled.h1`
  font-size: 18px;
  font-weight: 500;
`

export const ScoreBoard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
`

export const ScoreBoardTitle = styled.p`
  color: #223a5f;
  font-size: 18px;
  font-weight: 500;
`

export const TotalScore = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-weight: 700;
  font-size: 26px;
  color: #223a5f;
`

export const GameContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopupContainer = styled.div`
  align-self: flex-end;
`

export const RulesButton = styled.button`
  background-color: #fff;
  color: #223a5f;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: inherit;
  font-size: 16px;
  padding: 8px 16px;
`

export const RulesImage = styled.img`
  width: 100%;
  height: 80%;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  gap: 10px;
  @media (min-width: 768px) {
    width: 550px;
    height: 450px;
  }
`

export const CloseButton = styled.button`
  border: none;
  align-self: flex-end;
  padding: 8px;
  cursor: pointer;
`

export const ControlsList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 400px;
  }
`

export const ControlItem = styled.li``

export const ControlButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ControlImage = styled.img`
  width: 150px;
`

export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (min-width: 768px) {
    gap: 50px;
  }
`

export const Players = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 100px;
  }
`

export const Player = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 25px;
  }
`

export const PlayerLabel = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`

export const PlayerChoiceImage = styled.img`
  width: 150px;
`

export const GameStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

export const Status = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
`

export const PlayAgainBtn = styled.button`
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  background-color: #fff;
  color: #223a5f;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  padding: 12px 35px;
`
