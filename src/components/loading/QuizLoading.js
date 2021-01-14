import React from 'react'
import styled from 'styled-components'
import TitleComponent from './TitleComponent'
import ContentComponent from './ContentComponent'
import BlankTop from '../common/BlankTop'
import LoadingComponent from '../common/LoadingComponent'
import Bg1 from '../../assets/images/quizloading_background1.jpg'
import Bg2 from '../../assets/images/quizloading_background2.jpg'

const Background = styled.div`
  width: 100vw;
  height: 100%;
  min-height:100vh;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: rgba(12, 26, 34, 1);
  background-size: cover;
  @media (min-width: 768px) and (max-width:1024px){
      background-image: url(${Bg2});
      background-size: contain;
    }
    @media  (max-width:1440px) {
      background-size: contain;
    }
 @media  (min-width:1024px) {
  background-image: url(${Bg1});
  
    }
    @media (max-width: 768px) {
      background-image: url(${Bg2});
      background-size: contain;

    }
`

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    //between
    margin-top: 50%;
    width: 100%auto;
  }

  @media (min-width: 1024px) {
    //desktop
    margin-top: 20%;
    width: 100%auto;
  }
  @media (max-width: 767px) {
    //iphone
    width: 100%auto;
    margin-top: 50%;
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
      <Background>
        <Wrapper>
          <TitleComponent title="순간의 센스가" />
          <BlankTop DesktopMargin="2" TabletMargin="1" MobileMargin="1" />
          <TitleComponent title="정답을 좌우한다" />
          <BlankTop DesktopMargin="3" TabletMargin="2" MobileMargin="2" />
          <LoadingComponent></LoadingComponent>
          <BlankTop DesktopMargin="5" TabletMargin="2" MobileMargin="2" />
          <ContentComponent title={`${text}`}/>;
        </Wrapper>
      </Background>
    </div>
  )
}
export default QuizLoading
