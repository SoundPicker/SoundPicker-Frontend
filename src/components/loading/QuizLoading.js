import React from 'react'
import styled from 'styled-components'
import TitleComponent from './TitleComponent'
import ContentComponent from './ContentComponent'
import BlankTop from '../common/BlankTop'
import LoadingComponent from '../common/LoadingComponent'
import Bg1 from '../../assets/images/quizloading_background1.jpg'
import Bg2 from '../../assets/images/quizloading_background2.jpg'
import Bg3 from '../../assets/images/quizloading_background3.jpg'

const Fix =styled.div`
min-height:100vh;
background-color:  #081923;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: #081923;
  background-image: url(${Bg1});
  @media  (min-width:1024px) {
      min-height:1080px;
    }
    @media only screen and (max-width: 1024px) {
      background-image: url(${Bg2});
      min-height:1336px;
    }

    @media (max-width: 768px) {
      background-image: url(${Bg3});
      min-height:1024px;
    }
`

const Wrapper = styled.div`
  width:97.1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
        width:71.5rem;
  }
    @media only screen and (max-width: 768px) {
        width:54.8rem;
  }
    @media only screen and (max-width: 548px) {
        width:100%;
        padding:0 0.5rem;
    }
`
function QuizLoading() {
  const e = Math.floor(Math.random()*6+1);
  var text="";
  if(e===1){
    text="음향 체크 중...";
  }
  if(e===2){
    text="우주에서 음원을 불러오는 중...";
  }
  if(e===3){
    text="개발자가 X튜브 보는 중...";
  }
  if(e===4){
    text="얼마나 틀리게 할 지 고민중...";
  }
  if(e===5){
    text="속이 뻔한 속임수를 생각하는 중...";
  }
  if(e===6){
    text="CD 장착 중...";
  }

  return (
    <div>
      <Fix>
      <Background>
        <Wrapper>
        <BlankTop DesktopMargin='38' TabletMargin='48.5' MobileMargin='38' />
          <TitleComponent title="순간의 센스가" />
          <BlankTop DesktopMargin="2" TabletMargin="1" MobileMargin="1" />
          <TitleComponent title="정답을 좌우한다" />
          <BlankTop DesktopMargin="3" TabletMargin="2" MobileMargin="2" />
          <LoadingComponent></LoadingComponent>
          <BlankTop DesktopMargin="5" TabletMargin="2" MobileMargin="2" />
          <ContentComponent title={`${text}`}/>;
        </Wrapper>
      </Background>
      </Fix>
    </div>
  )
}
export default QuizLoading
