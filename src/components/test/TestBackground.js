import styled from 'styled-components'
import bg1920 from '../../assets/images/test/all_background1920.png'
import bg1024 from '../../assets/images/test/all_background1024.png'
import bg768 from '../../assets/images/test/all_background768.png'

const TestWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 150vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: #081923;
  background-image: url(${bg1920});
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    background-image: url(${bg1024});
    height: 180vh;
  }
  @media only screen and (max-width: 768px) {
    background-image: url(${bg768});
    height: 160vh;
  }
`

const TestBackground = ({ children }) => {
  return (
    <>
      <TestWrap>{children}</TestWrap>
    </>
  )
}

export default TestBackground
