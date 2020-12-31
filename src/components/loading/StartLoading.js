import React from "react";
import styled from "styled-components";
import ContentComponent from "./ContentComponent";
import BlankTop from '../common/BlankTop';
import LoadingComponent from '../common/LoadingComponent';
import UnderLineWrap from '../common/UnderLineWrap';
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
            <LoadingComponent></LoadingComponent>
            <BlankTop DesktopMargin='5' TabletMargin='2' MobileMargin='2' />
            <ContentComponent title="오늘밤 사픽 주인공은 나야나~ 나야나~ " />
            <div></div>
            <UnderLineWrap  DesktopLength='30' TabletLength='20' MobileLength='10' ></UnderLineWrap>
            </Wrapper>
            </Background>
        </div>
    );

};
export default StartLoading;