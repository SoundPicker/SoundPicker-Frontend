import React from "react";
import styled from "styled-components";
import TitleComponent from "./TitleComponent";
import ContentComponent from "./ContentComponent";
import BlankTop from '../common/BlankTop';
import LoadingComponent from '../common/LoadingComponent';
import Bg1 from '../../assets/images/all_background.png';
import Bg2 from '../../assets/images/all_background2.png';

const Background = styled.div`
    width:100vw;
    height:1000vh;
    background-repeat: no-repeat;
    background-position: center top;
    background-color:  rgba( 12, 26, 34, 1);
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
    margin-top:12%;
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
const QuizLoading = () => {

    return(
        <div>
          <Background>
            <Wrapper>
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
                <ContentComponent title="by 리니꿍 " />
                <BlankTop DesktopMargin='2' TabletMargin='2' MobileMargin='2' />
            <TitleComponent title="레드벨벳 찐팬만 맞출 수 있는 정답모음" />
            <BlankTop DesktopMargin='2' TabletMargin='2' MobileMargin='2' />
            <LoadingComponent></LoadingComponent>
            <BlankTop DesktopMargin='5' TabletMargin='2' MobileMargin='2' />
            <ContentComponent title="아 빌리빈유 아빌리빈마라잎 벌써 일초가 지났지마-한~" />
            </Wrapper>
            </Background>
        </div>
    );

};
export default QuizLoading;