import React from "react";
import styled from "styled-components";
import ContentComponent from "./ContentComponent";
import BlankTop from '../common/BlankTop';
import Bg1 from '../../assets/images/start_background1.png';
import Bg2 from '../../assets/images/all_background2.png';
import logo1 from '../../assets/images/image_watermark.png';


const Background = styled.div`
    width:100vw;
    height:1000vh;
    background-repeat: no-repeat;
    background-position: center top;
    background-color: black;
    background-size:contain;
 @media  (max-width:768px) {
  background-image: url(${Bg2});
    }
    @media (min-width: 768px) {
      background-image: url(${Bg1});
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
    margin-top:15%;
      width:100%auto;
    }

    @media (min-width: 1024px) { //desktop
      margin-top:15%;
      width:100%auto;
    }
    @media (max-width: 767px) { //iphone
      width:100%auto;
        margin-top:30%;
  }

`;


const CircleBorder = styled.div`
  
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient( rgba(96,255,205,1) ,rgba(96,255,205,0.2) ,rgba(96,255,205,0.01) );
  box-shadow:  5px 0px 20px -5px  rgba(96,255,205,0.5);
  animation: spin .8s linear 0s infinite;

  @media  (max-width:1024px) { 
    width: 30px;
  height: 30px;
  padding: 4px;
    }
    
    @media (min-width: 1024px) {
      width: 65px;
     height: 65px;
     padding: 7px;
    }
`;

const CircleCore =styled.div`
 width: 100%;
  height: 100%;
  background-color: rgba(12,28,48,1);
  border-radius: 50%;
`;

const SpinnerBox = styled.div`
@keyframes spin {
  from {
    transform: rotate(359deg);
  }
  to{
    transform: rotate(0);
  }
}
* {
  box-sizing: border-box;
}
`;

const MyIcon = styled.img`
  @media (min-width: 768px) and (max-width:1024px) { //between
    width:300px;
    }

    @media (min-width: 1024px) { //desktop
    }
    @media (max-width: 767px) { //iphone
      width:200px;
  }
`;

MyIcon.defaultProps = {
  src: logo1,
};

const StartLoading = () => {

    return(
        <div>
          <Background>
            <Wrapper>
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
                <ContentComponent title="소리로 하는 모든 즐거움" />
                <BlankTop DesktopMargin='3' TabletMargin='2' MobileMargin='2' />
                <MyIcon></MyIcon>
            <BlankTop DesktopMargin='3' TabletMargin='2' MobileMargin='2' />
            <SpinnerBox>
                <CircleBorder>
                    <CircleCore></CircleCore>
                </CircleBorder>
            </SpinnerBox>
            <BlankTop DesktopMargin='5' TabletMargin='2' MobileMargin='2' />
            <ContentComponent title="오늘밤 사픽 주인공은 나야나~ 나야나~ " />
            </Wrapper>
            </Background>
        </div>
    );

};
export default StartLoading;