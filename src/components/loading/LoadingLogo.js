import React from "react";
import styled from "styled-components";
import capture from '../../assets/images/capture.PNG';
import TitleComponent from "./TitleComponent";
import ContentComponent from "./ContentComponent";
import BlankTop from '../../components/common/BlankTop';
const Wrapper=styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top:16px;
  margin-bottom:16px;
  background:url(${capture});
  background-size: cover;
  z-index:0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 768px) and (max-width:1000px) {
        justify-content:center;
    }

    @media (min-width: 1000px) {
        width:100%auto;
        display:flex;
        justify-content:center;
    }
`;

const Width = styled.div`
    //~1000px까지 960px 너비 고정
    //~768까지 마진 20px 두고 너비 좁혀지게

    
`

const CircleBorder = styled.div`
  width: 65px;
  height: 65px;
  padding: 7px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left:150px;
  border-radius: 50%;
  background: linear-gradient( rgba(96,255,205,1) ,rgba(96,255,205,0.2) ,rgba(96,255,205,0.01) );
  box-shadow:  5px 0px 20px -5px  rgba(96,255,205,0.5);
  animation: spin .8s linear 0s infinite;
  
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

const LoadingLogo = () => {

    return(
        <div>
            <Wrapper>
                <Width>
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
                <ContentComponent title="by 리니꿍 " />
                <BlankTop DesktopMargin='2' TabletMargin='2' MobileMargin='2' />
            <TitleComponent title="레드벨벳 찐팬만 맞출 수 있는 정답모음" />
            <BlankTop DesktopMargin='2' TabletMargin='2' MobileMargin='2' />
            <SpinnerBox>
                <CircleBorder>
                    <CircleCore></CircleCore>
                </CircleBorder>
            </SpinnerBox>
            <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
            <ContentComponent title="아 빌리빈유 아빌리빈마라잎 벌써 일초가 지났지마-한~" />
            </Width>
            </Wrapper>
        </div>
    );

};
export default LoadingLogo;