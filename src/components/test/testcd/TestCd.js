import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import recordImg from '../../../assets/images/test/graphic_black_cd.png'
import cdImg from '../../../assets/images/test/blackcd_house-1.png'
import BlankTop from '../../common/BlankTop'
import logo from '../../../assets/images/test/image_watermark.png'
import TextComponent from '../../common/test/TextComponent'

const TestCd = ({ recordList }) => {
  //state정의
  const [buttonText, setButtonText] = useState('정답보기') //클릭한 버튼명(버튼명으로 현재 상태비교)
  const [rotateSecond, setRotateSecond] = useState(0) //1초재생인지 3초재생인지 상태값(0일때는 애니메이션 없음)
  const [recordInside, isRecordInside] = useState(false) //레코드판을 넣는 애니메이션 트리거
  const [activeIndex, setActiveIndex] = useState(0) //현재 선택된 레코드판 index넘버
  const [answer, setAnswer] = useState() //정답 text state
  const [soundUrl, setSoundUrl] = useState()

  useEffect(() => {
    isRecordInside(false)
    setButtonText('정답보기')
    setAnswer(undefined)
    setSoundUrl(recordList[activeIndex].sound)
    console.log(activeIndex)
    console.log(recordList[activeIndex])
  }, [activeIndex])

  //다음문제 버튼 이벤트 정의
  const handleNextButton = () => {
    //버튼 텍스트가 '정답보기' 일때 버튼명을 '다음문제'로 변경 후 레코드 집어넣는 트리거를true로 바꿔줌
    if (buttonText === '정답보기') {
      isRecordInside(true)
      setButtonText('다음문제')
      setAnswer(recordList[activeIndex].result)
    } else {
      //버튼 텍스트가 '다음문제'일때 선택된 레코드를 1증가하여 다음 레코드를 불러옴
      setActiveIndex(activeIndex + 1)
    }
  }

  //레코드판 돌아가는 애니메이션 핸들러
  const handleRotateAnimation = second => {
    //레코드판 재생시간이 0초일때만 에니메이션 실행을 하여 마구 연타하였을때 애니메이션 꼬이는것을 방지
    if (rotateSecond === 0) {
      setRotateSecond(second)
      //이곳에 사운드 재생
      console.log(recordList[activeIndex].sound)
      console.log(soundUrl, '사운드유아렐 들어간거')

      var audio = new Audio(soundUrl)
      audio.play()
    }
  }

  return (
    <>
      <table></table>
      <BlankTop DesktopMargin="20" TabletMargin="20" MobileMargin="20" />
      <IconWrapper>
        <MyIcon />
      </IconWrapper>
      <BlankTop DesktopMargin="3" TabletMargin="20" MobileMargin="20" />
      <TitleWrapper>
        <TextComponent
          title="레드벨벳 찐팬만 맞출 수 있는 정답 모음"
          DesktopLength="20"
          TabletLength="15"
          MobileLength="10"
        />
      </TitleWrapper>
      <BlankTop DesktopMargin="8" TabletMargin="20" MobileMargin="20" />
      <Container>
        <ContentContainer>
          {recordList.map((item, index) => {
            return (
              <SwiperContainer
                key={index}
                activeIndex={activeIndex}
                thisIndex={index}
              >
                <CaseImg src={cdImg} />
                {index === activeIndex && (
                  <>
                    <AnswerText inside={recordInside}>
                      {answer ?? '정답은?'}
                    </AnswerText>
                    <RecordImg
                      src={recordImg}
                      rotateSecond={rotateSecond}
                      onAnimationEnd={() => setRotateSecond(0)} // 해당요소의 애니메이션이 종료됐을때 레코드판 돌리는 재생시간을 다시 0초로 초기화
                      inside={recordInside} //레코드가 들어가는 애니메이션을위한 트리거 변수
                    />
                  </>
                )}
              </SwiperContainer>
            )
          })}
        </ContentContainer>
      </Container>
      <BlankTop DesktopMargin="5" TabletMargin="4" MobileMargin="3" />

      <ButtonContainer>
        <RowContainer>
          <ListenButtonWrapper>
            <ListenButtonStyle onClick={() => handleRotateAnimation(1)}>
              1초 듣기
            </ListenButtonStyle>
            <ListenButtonDisinguish>/</ListenButtonDisinguish>
            <ListenButtonStyle onClick={() => handleRotateAnimation(3)}>
              3초 듣기
            </ListenButtonStyle>
          </ListenButtonWrapper>
        </RowContainer>
        <BlankTop DesktopMargin="5" TabletMargin="4" MobileMargin="3" />

        <BigButtonWrapper>
          <HintButtonStyle>힌트보기</HintButtonStyle>
          <AnswerButtonStyle onClick={handleNextButton}>
            {buttonText}
          </AnswerButtonStyle>
        </BigButtonWrapper>
      </ButtonContainer>
    </>
  )
}

/**키프레임 시작 */

//1초 레코드판 돌리는 키프레임
const Rotate1Record = keyframes`
  0% {
    transform: rotate( 0deg )
  }
  100% {
    transform: rotate( 360deg )
  }
`
//3초 레코드판 돌리는 키프레임
const Rotate3Record = keyframes`
  0% {
    transform: rotate( 0deg )
  }
  100% {
    transform: rotate( 1080deg )
  }
`
//레코드판을 집어넣는 키프레임
const RecordInside = keyframes`
  0% {
    margin-left: -25%
  }
  100% {
    margin-left: -50%
  }
  `

const TextInside = keyframes`
0% {
  margin-left: -25%
}
100% {
  margin-left: 0%
}
`

//신규 레코드판이 선택될때 나오는 애니메이션 키프레임
const ActiveAnimation = keyframes`
0% {
    transform: translateX(50%) scale(.5);
    opacity: .5;
}
100% {
    transform: translateX(0%) scale(1);
    opacity: 1;
}
`

//레코드판이 왼쪽으로 들어갈때 나오는 애니메이션 키프레임
const UnActiveAnimation = keyframes`
0% {
    transform: translateX(0%) scale(1);
    opacity: 1;
}
    100% {
    transform: translateX(-71%) scale(.5);
    opacity: .5;
    
}
`
/* 키프레임 종료 */

const TestCdWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid blue; */
`

/* Start Logo */
const IconWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`

const MyIcon = styled.img`
  @media (min-width: 768px) and (max-width: 1024px) {
    //between
    width: 30rem;
  }
  @media (min-width: 1024px) {
    //desktop
    width: 20rem;
  }
  @media (max-width: 767px) {
    //iphone
    width: 15rem;
  }
`

MyIcon.defaultProps = {
  src: logo,
}

/* End Logo */

/* Start Title  */

const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
`

/* End Title */

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  /* border: 1px solid red; */
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 20rem;
  /* position: absolute; */
  /* border: 1px solid blue; */
  @media all and (max-width: 768px) {
    height: 10rem;
  }

  @media all and (min-width: 1025px) {
    height: 35rem;
  }
`

const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  /* border: 1px solid orange; */
`

const AnswerText = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #030f2c;
  position: absolute;
  z-index: 11;
  object-fit: contain;
  margin-left: -25%;
  animation-fill-mode: forwards;
  ${props =>
    props.inside && //레코드판을 집어넣는 css애니메이션 추가 트리거가 true일때 실행.
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      animation-iteration-count: 1;
      animation-name: ${TextInside};
    `}
`

const RecordImg = styled.img`
  /* border: 1px solid orange; */
  object-fit: contain;
  z-index: 1;
  margin-left: -25%;
  animation-fill-mode: forwards;
  ${props =>
    props.rotateSecond > 0 && //레코드판을 돌리는 css애니메이션 추가 0초 이상일때만 작동하도록 한다.
    css`
      animation-timing-function: ease-in-out;
      animation-duration: ${props.rotateSecond}s;
      animation-iteration-count: 1;
      animation-name: ${props.rotateSecond === 1
        ? Rotate1Record
        : Rotate3Record}; //1초일때 3초일때 분기해서 키프레임을 넣어줌
    `}
  ${props =>
    props.inside && //레코드판을 집어넣는 css애니메이션 추가 트리거가 true일때 실행.
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      animation-iteration-count: 1;
      animation-name: ${RecordInside};
    `}
`

const SwiperContainer = styled.div`
  & > img {
    height: 100%;
  }
  /* border: 1px solid green; */
  margin-right: 10rem;
  display: flex;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  animation-fill-mode: forwards;
  ${({ activeIndex, thisIndex }) => {
    // 선택된 index와 각요소의 index를 비교해서 애니메이션과 위치를 처리해줌
    const compare = Math.abs(activeIndex - thisIndex) //index비교 절대값
    if (activeIndex === thisIndex) {
      //선택된index와 현재요소의 값이 같다면(즉 active상태의 요소일때) 오른쪽에서 가운데로 나오는 애니메이션을 넣어줌
      return css`
        animation-timing-function: ease-in-out;
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-name: ${ActiveAnimation};
        z-index: 10;
      `
    } else if (activeIndex > thisIndex) {
      //선택된index가 현재요소의 값보다 크다면(즉 active상태의 요소보다 왼쪽에 있을때)
      if (compare === 1) {
        //비교값이 1일때(즉 현재 active상태였다가 왼쪽으로 들어가야 하는 상태) 왼쪽으로 슬라이드되는 애니메이션을 넣어줌
        return css`
          animation-timing-function: ease-in-out;
          animation-duration: 0.5s;
          animation-iteration-count: 1;
          animation-name: ${UnActiveAnimation};
        `
      }
      //그이외 그냥 위치만 잡아줌
      return css`
        transform: translateX(-71%) scale(0.5);
        opacity: 0.5;
      `
    } else if (activeIndex < thisIndex) {
      //선택된index가 현재요소의 값보다 작다면(즉 active상태의 요소보다 오른쪽에 있을때)위치만 잡아줌
      return `
        transform: translateX(91%) scale(.5);
        opacity: .5;
    `
    } else {
    }
  }}
`

const CaseImg = styled.img`
  margin-left: 30%;
  height: auto;
  object-fit: contain;
  z-index: 2;
`

/* Start button */

const ButtonContainer = styled.div`
  /* border: 1px solid orange; */
  display: flex;
  flex-direction: column;
  width: 100%;
`
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

const ListenButtonWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListenButtonDisinguish = styled.span`
  font-size: 3.5rem;
  color: #fff;
  font-weight: 300;
  padding: 0 3rem;
`

const ListenButtonStyle = styled.button`
  color: #fff;
  font-size: 1.8rem;
  border: none;
  outline: none;
  background: none;
  padding: 0px;
  cursor: pointer;
  &:hover {
    color: #60ffc6;
  }
`

const BigButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid orange; */
`

const HintButtonStyle = styled.button`
  cursor: pointer;
  display: block;
  color: #fff;
  border: 1px solid #ffffff;
  width: 35rem;
  height: 5rem;
  outline: none;
  background: none;
  padding: 0px;
  margin-bottom: 2rem;
  &:hover {
    color: #49fff2;
    transition: color 0.1s ease-in-out;
  }
`
const AnswerButtonStyle = styled.button`
  cursor: pointer;
  color: #030f2c;
  border: none;
  outline: none;
  width: 35rem;
  height: 5rem;
  box-shadow: 0px 0px 21px -6px #49fff2;
  background: linear-gradient(
    90deg,
    rgba(73, 255, 242, 1) 0%,
    rgba(73, 255, 233, 1) 35%,
    rgba(56, 245, 238, 1) 66%,
    rgba(0, 212, 255, 1) 100%
  );
  &:hover {
    transition: box-shadow 0.5s ease-in-out;
    box-shadow: 0px 0px 40px -6px #49fff2;
  }
  padding: 0px;
`

/* End button */
export default TestCd
