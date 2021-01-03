import styled from 'styled-components'
import bg1920 from '../../assets/images/test/all_background1920.png'
import bg1440 from '../../assets/images/test/all_background1440.png'
import bg1024 from '../../assets/images/test/all_background1024.png'
import bg768 from '../../assets/images/test/all_background768.png'

const TestWrap = styled.div`
  height: 500vh;
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: #081923;
  background-size: contain;
  background-image: url(${bg1920});
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    background-image: url(${bg1024});
  }
  @media only screen and (max-width: 768px) {
    background-image: url(${bg768});
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
