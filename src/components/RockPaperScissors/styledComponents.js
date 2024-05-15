import styled from 'styled-components'

export const RockPaperScissorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
`

export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 45vw;
  justify-content: space-between;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 50px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
