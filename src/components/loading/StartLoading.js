import React, { useEffect } from "react";
import styled from "styled-components";
import ContentComponent from "./ContentComponent";
import BlankTop from '../common/BlankTop';
import LoadingComponent from '../common/LoadingComponent';
import Bg1 from '../../assets/images/startloading_background2.jpg';
import Bg2 from '../../assets/images/startloading_background1.jpg';
import logo1 from '../../assets/images/image_watermark.png';


const Background = styled.div`
    width:100vw;
    height:100%;
    min-height:100vh;
    background-repeat: no-repeat;
    background-position: center top;
    background-color: rgba( 12, 26, 34, 1);
    background-size:cover;
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
`;


const Wrapper=styled.div`
 position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 768px) and (max-width:1024px) { //between
    margin-top:45%;
      width:100%auto;
    }

    @media (min-width: 1024px) { //desktop
      margin-top:15%;
      width:100%auto;
    }
    @media (max-width: 767px) { //iphone
      width:100%auto;
        margin-top:40%;
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
          <Background>
            <Wrapper>
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
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
        </div>
    );

};
export default StartLoading;