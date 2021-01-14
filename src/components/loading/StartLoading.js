import React, { useEffect } from "react";
import styled from "styled-components";
import ContentComponent from "./ContentComponent";
import BlankTop from '../common/BlankTop';
import LoadingComponent from '../common/LoadingComponent';
import Bg1 from '../../assets/images/startloading_background1.jpg';
import Bg2 from '../../assets/images/startloading_background2.jpg';
import logo1 from '../../assets/images/image_watermark.png';
import Bg3 from '../../assets/images/startloading_background3.png';

const Fix =styled.div`
min-height:100vh;
background-color:  #081923;
`;

const Background = styled.div`
    width:100%;
    height:100%;
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
`;


const Wrapper=styled.div`
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

`;


const MyIcon = styled.img`
  @media (min-width: 768px) and (max-width:1024px) { //between
    width:300px;
    }

    @media (min-width: 1024px) { //desktop
    }
    @media (max-width: 767px) { //iphone
      width:150px;
  }
`;

MyIcon.defaultProps = {
  src: logo1,
};




function StartLoading(){

  const e = Math.floor(Math.random()*5+1);
  var text="";
  if(e===1){
    text="모든 테스트를 불러오는 중...";
  }
  if(e===2){
    text="아이돌과 팬미팅 하러 가는 중...";
  }
  if(e===3){
    text="게임 음악 들으러 가는 중...";
  }
  if(e===4){
    text="영화 보고 테스트 만드는 중...";
  }
  if(e===5){
    text="애니 브금 듣고 가슴이 웅장해지는 중...";
  }


    return(
        <div>
          <Fix>
          <Background>
            <Wrapper>
            <BlankTop DesktopMargin='38' TabletMargin='48.5' MobileMargin='38' />
                <ContentComponent title="소리로 하는 모든 즐거움" />
                <BlankTop DesktopMargin='3' TabletMargin='2' MobileMargin='2' />
                <MyIcon></MyIcon>
            <BlankTop DesktopMargin='3' TabletMargin='2' MobileMargin='2' />
            <LoadingComponent></LoadingComponent>
            <BlankTop DesktopMargin='5' TabletMargin='2' MobileMargin='2' />
            <ContentComponent title={`${text}`}/>;
            
            <div></div>
            </Wrapper>
            </Background>
            </Fix>
        </div>
    );

};
export default StartLoading;