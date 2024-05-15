import styled from 'styled-components'

export const ScoreViewCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 80%;
  border-style: solid;
  border-color: #ffffff;
  border-width: 2px;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 2%;
`

export const GameToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameTools = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ScoreCard = styled(GameToolsContainer)`
  background-color: white;
  width: 20%;
  height: 90%;
  font-family: 'Bree Serif';
  border-radius: 10px;
  justify-content: center;
  font-weight: bold;
  padding: 5px;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-bottom: 0px;
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const ScoreValue = styled.p`
  color: #223a5f;
  font-size: 42px;
  margin-top: 0px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
