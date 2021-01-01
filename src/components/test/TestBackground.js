import styled from 'styled-components'
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
  background-image: url(${bg1440});
  /* Tablet &amp; Desktop Device */
  @media all and (min-width: 768px) {
    //사용자 해상도가 768px 이상일 때 이 코드가 실행됨. 테블릿과 데스크톱의 공통 코드를 작성한다.
    background-image: url(${bg768});
  }

  /* Tablet Device */
  @media all and (min-width: 768px) and (max-width: 1024px) {
    //사용자 해상도가 768px 이상이고 1024px 이하일 때 이 코드가 실행됨. 아이패드 또는 비교적 작은 해상도의 랩탑이나 데스크톱에 대응하는 코드를 작성한다.
    background-image: url(${bg1024});
  }

  /* Desktop Device */
  @media all and (min-width: 1025px) {
    //사용자 해상도가 1025px 이상일 때 이 코드가 실행됨. 1025px 이상의 랩탑 또는 데스크톱에 대응하는 코드를 작성한다.
    background-image: url(${bg1440});
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
