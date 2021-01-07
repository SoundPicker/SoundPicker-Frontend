import React from "react";
import styled from "styled-components";
import BlankTop from '../../components/common/BlankTop';
import UnderLineWrap from '../../components/common/UnderLineWrap';
import TextComponent from '../../components/common/TextComponent';
import Button from '../../components/common/Button';
import BoldTextComponent from '../../components/common/BoldTextComponent';
import Bg1 from '../../assets/images/mypage_background1.png';
import Bg2 from '../../assets/images/mypage_background2.png';
import logo1 from '../../assets/images/image_watermark.png';
import MyPageButton from "./MyPageButton";


const Background = styled.div`
    width:100vw;
    height:200vh;
    background-repeat: no-repeat;
    background-position: center top;
    background-color: rgba( 12, 26, 34, 1);
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
  height: 150%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) and (max-width:1024px) { //between
    margin-top:3%;
      width:100%auto;
    }

    @media (min-width: 1024px) { //desktop
      margin-top:3%;
      width:100%auto;
    }
    @media (max-width: 767px) { //iphone
      width:100%auto;
        margin-top:3%;
  }

`;

const Content=styled.div`
    display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
`

const MyIcon = styled.img`
  @media (min-width: 768px) and (max-width:1024px) { //between
    width:221px;
    }

    @media (min-width: 1024px) { //desktop
    width:297px;
    }
    @media (max-width: 767px) { //iphone
      width:150px;
  }
`;

MyIcon.defaultProps = {
  src: logo1,
};



const MyPage= () => {
    return(
        <div>
          <Background>
            <Wrapper>
                <MyIcon></MyIcon>
                <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='3' />
                <TextComponent title="마이페이지"  DesktopLength='20' TabletLength='15' MobileLength='10'/>  
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
                <Content><BoldTextComponent title="개인정보 수정"  DesktopLength='25' TabletLength='20' MobileLength='15'/></Content>
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
                <Content><TextComponent title="&emsp;리니꿍"  DesktopLength='15' TabletLength='13' MobileLength='12'/>
                <Button font='12' >닉네임 변경</Button>
                </Content>
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
                <Content>
                <TextComponent title="&emsp;sound_picker@gmail.com"  DesktopLength='15' TabletLength='13' MobileLength='12'/>
                <Button font='12' color='gray'>이메일 변경불가</Button>
                </Content>
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
                <Content>
                <TextComponent title="&emsp;"  DesktopLength='15' TabletLength='13' MobileLength='12'/>
                <Button font='12' >비밀번호 변경</Button>
                </Content>
                <BlankTop DesktopMargin='8' TabletMargin='5' MobileMargin='5' />
                <Content><BoldTextComponent title="마이테스트 수정"  DesktopLength='25' TabletLength='20' MobileLength='15'/></Content>
                <BlankTop DesktopMargin='7' TabletMargin='3' MobileMargin='3' />
                <Content>
                <BoldTextComponent title="&emsp;90년대 감성, 다들 기억하잖아요?"  DesktopLength='15' TabletLength='10' MobileLength='10'/>
                <MyPageButton />
                </Content>
                <Content><TextComponent title="&emsp;&ensp;싸이월드 감성 위주로 담아보았습니다."  DesktopLength='10' TabletLength='10' MobileLength='10'/>
                </Content>
                <BlankTop DesktopMargin='2' TabletMargin='2' MobileMargin='2' />
                <UnderLineWrap  DesktopLength='130'BetweenLength='95' TabletLength='70' MobileLength='45' ></UnderLineWrap>
                <BlankTop DesktopMargin='4' TabletMargin='2' MobileMargin='2' />
                <Content>
                <BoldTextComponent title="&emsp;90년대 감성, 다들 기억하잖아요?"  DesktopLength='15' TabletLength='10' MobileLength='10'/>
                <MyPageButton />
                </Content>
                <Content>
                <TextComponent title="&emsp;&ensp;싸이월드 감성 위주로 담아보았습니다."  DesktopLength='10' TabletLength='10' MobileLength='10'/> </Content>
                <BlankTop DesktopMargin='2' TabletMargin='2' MobileMargin='2' />
                <UnderLineWrap  DesktopLength='130'BetweenLength='95' TabletLength='70' MobileLength='45' ></UnderLineWrap>
                <BlankTop DesktopMargin='4' TabletMargin='2' MobileMargin='2' />
                <Content>
                <BoldTextComponent title="&emsp;90년대 감성, 다들 기억하잖아요?"  DesktopLength='15' TabletLength='10' MobileLength='10'/>
                <MyPageButton />
                </Content>
                <Content><TextComponent title="&emsp;&ensp;싸이월드 감성 위주로 담아보았습니다."  DesktopLength='10' TabletLength='10' MobileLength='10'/>
                </Content>
                <BlankTop DesktopMargin='2' TabletMargin='2' MobileMargin='2' />
                <UnderLineWrap  DesktopLength='130'BetweenLength='95' TabletLength='70' MobileLength='45' ></UnderLineWrap>
                </Wrapper>
            </Background>
        </div>
    );

};
export default MyPage;