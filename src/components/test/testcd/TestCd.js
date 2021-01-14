import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import recordImg from '../../../assets/images/test/graphic_black_cd.jpg'
import cdImg from '../../../assets/images/test/blackcd_house-1.jpg'
import defaultCdImg from '../../../assets/images/test/blackcd_house.jpg'
import BlankTop from '../../common/BlankTop'
import logo from '../../../assets/images/test/image_watermark-1.jpg'
import TextComponent from '../../common/test/TextComponent'
import { useHistory } from 'react-router-dom'
import ProgressBar from '../testcd/ProgressBar'
import ModalPage from '../../../pages/modal/ModalPage'
import QuizHeader from '../../common/QuizHeader'

const TestCd = ({ newList, match }) => {
  //state정의
  const [hintText, setHintText] = useState('힌트 보기')
  const [buttonText, setButtonText] = useState('정답 보기') //클릭한 버튼명(버튼명으로 현재 상태비교)
  const [rotateSecond, setRotateSecond] = useState(0) //1초재생인지 3초재생인지 상태값(0일때는 애니메이션 없음)
  const [recordInside, isRecordInside] = useState(false) //레코드판을 넣는 애니메이션 트리거
  const [activeIndex, setActiveIndex] = useState(0) //현재 선택된 레코드판 index넘버
  const [answer, setAnswer] = useState() //정답 text state
  const [sound1Url, setSound1Url] = useState()
  const [sound3Url, setSound3Url] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [isHint, setIsHint] = useState(false)
  const [modalIn, setModalIn] = useState(false)
  const [modalOut, setModalOut] = useState(false)

  const history = useHistory()

  useEffect(() => {
    isRecordInside(false)
    setButtonText('정답 보기')
    setAnswer(undefined)
    setSound1Url(newList[activeIndex].sound1URL)
    setSound3Url(newList[activeIndex].sound3URL)
  }, [activeIndex])

  const openModal = () => {
    setModalVisible(true)
    setModalOut(false)
  }

  const closeModal = () => {
    setModalOut(true)
    setModalVisible(false)
  }

  //다음문제 버튼 이벤트 정의
  const handleHintButton = () => {
    if (hintText === '힌트 보기') {
      setIsHint(true)
      setTimeout(() => {
        setHintText(`${newList[activeIndex].hint}`)
      }, 500)
    } else if (hintText === '관련 영상 보기') {
      setModalIn(true)
      openModal()
    }
  }

  const handleNextButton = () => {
    //버튼 텍스트가 '정답보기' 일때 버튼명을 '다음문제'로 변경 후 레코드 집어넣는 트리거를true로 바꿔줌 //
    if (buttonText === '정답 보기') {
      isRecordInside(true)
      setHintText('관련 영상 보기')

      if (activeIndex + 1 < newList.length) {
        setButtonText('다음 문제')
        setAnswer(newList[activeIndex].answer)
        setIsHint(false)
      } else {
        setAnswer(newList[activeIndex].answer)
        setButtonText('테스트 완료')
      }
    } else if (buttonText === '다음 문제') {
      //버튼 텍스트가 '다음문제'일때 선택된 레코드를 1증가하여 다음 레코드를 불러옴
      setHintText('힌트 보기')
      if (activeIndex + 1 < newList.length) {
        setActiveIndex(activeIndex + 1)
      }
    } else if (buttonText === '테스트 완료') {
      history.push(`/test/${match.params.id}/recommendation`)
      console.log(history)
    }
  }

  //레코드판 돌아가는 애니메이션 핸들러
  const handleRotateAnimation = second => {
    //레코드판 재생시간이 0초일때만 에니메이션 실행을 하여 마구 연타하였을때 애니메이션 꼬이는것을 방지
    console.log(rotateSecond)
    if (rotateSecond === 0) {
      setRotateSecond(second)
      //이곳에 사운드 재생
      if (second === 1) {
        // 1초 사운드
        var audio = new Audio(sound1Url)
        audio.play()
        // setRotateSecond(0)
      } else {
        // 3초 사운드
        var audio = new Audio(sound3Url)
        audio.play()
      }
    }
  }

  return (
    <>
      <table></table>
      {modalVisible && (
        <ModalPage
          modalIn={modalIn}
          modalOut={modalOut}
          urlId={newList[activeIndex].answerYoutubeURL}
          visible={modalVisible}
          maskClosable={true}
          closeModal={closeModal}
        />
      )}
      <QuizHeader />
      <BlankTop DesktopMargin="15" TabletMargin="32" MobileMargin="21" />
      <IconWrapper>
        <MyIcon />
      </IconWrapper>
      <BlankTop DesktopMargin="3" TabletMargin="3" MobileMargin="2.6" />
      <TitleWrapper>
        <TextComponent
          title={newList[activeIndex].testTitle}
          DesktopLength="2"
          TabletLength="2"
          MobileLength="1.2"
        />
      </TitleWrapper>
      <BlankTop DesktopMargin="4.2" TabletMargin="5" MobileMargin="9" />
      <Container>
        <ContentContainer>
          <ProgressBar percentual={(100 / newList.length) * activeIndex} />
          {newList.map((item, index) => {
            return (
              <SwiperContainer
                key={index}
                activeIndex={activeIndex}
                thisIndex={index}
              >
                <CaseImg
                  src={activeIndex === index ? cdImg : defaultCdImg}
                  // src={cdImg}
                />
                {index === activeIndex && (
                  <>
                    <AnswerText inside={recordInside}>
                      {answer ?? '정답은?'}
                    </AnswerText>

                    <RecordWrapper inside={recordInside}>
                      <RecordImg
                        src={recordImg}
                        rotateSecond={rotateSecond}
                        onAnimationEnd={() => setRotateSecond(0)}
                        // 해당요소의 애니메이션이 종료됐을때 레코드판 돌리는 재생시간을 다시 0초로 초기화
                        // inside={recordInside}
                        //레코드가 들어가는 애니메이션을위한 트리거 변수
                      />
                    </RecordWrapper>
                  </>
                )}
              </SwiperContainer>
            )
          })}
        </ContentContainer>
      </Container>
      <BlankTop DesktopMargin="1" TabletMargin="5" MobileMargin="10" />

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
        <BlankTop DesktopMargin="3" TabletMargin="1" MobileMargin="3" />

        <BigButtonWrapper>
          <HintButtonStyle onClick={handleHintButton} hint={isHint}>
            {hintText}
          </HintButtonStyle>
          <AnswerButtonStyle onClick={handleNextButton}>
            {buttonText}
          </AnswerButtonStyle>
        </BigButtonWrapper>
      </ButtonContainer>
    </>
  )
}

/**키프레임 시작 */

const RecordWrapper = styled.div`
  z-index: 1;
  margin-left: -26%;
  animation-fill-mode: forwards;
  @media only screen and (max-width: 1024px) {
    margin-left: -26%;
  }
  @media only screen and (max-width: 768px) {
    /* width: 18.5rem; */
  }
  ${props =>
    props.inside && //레코드판을 집어넣는 css애니메이션 추가 트리거가 true일때 실행.
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      animation-iteration-count: 1;
      animation-name: ${RecordInside};
    `}
`

const HintFade = keyframes`
  0% { 
   opacity: 1;
  }
  50% {
   width: 0;
   opacity: 0;
  }
  100% {
  opacity: 1;
  }

`

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
  margin-left: -35%
}
100% {
  
  margin-left: 0%;
}
`

//신규 레코드판이 선택될때 나오는 애니메이션 키프레임
const ActiveAnimation = keyframes`
0% {
    opacity: .5;
    transform: translateX(50%) scale(.6);
 
}
100% {
    transform: translateX(0%) scale(1);
    opacity: 1;
}
`
const ActiveAnimation1024 = keyframes`
0% {
    opacity: .5;
    transform: translateX(40%) scale(.6);
 
}
100% {
    transform: translateX(0%) scale(1);
    opacity: 1;
}
`
const ActiveAnimation768 = keyframes`
0% {
    opacity: .5;
    transform: translateX(50%) scale(.6);
 
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
    opacity: .5; 
    transform: translateX(-65%) scale(0.6);
}
`

const UnActiveAnimation1024 = keyframes`
0% {
    transform: translateX(0%) scale(1);
    opacity: 1;
}
100% {
    opacity: .5; 
    transform: translateX(-68%) scale(0.7);
}
`

const UnActiveAnimation768 = keyframes`
0% {
    transform: translateX(0%) scale(1);
    opacity: 1;
}
100% {
    opacity: .5; 
    transform: translateX(-130%) scale(1);
}
`
/* 키프레임 종료 */

/* Start Logo */
const IconWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`

const MyIcon = styled.img`
  width: 19rem;
  @media only screen and (max-width: 1024px) {
    width: 19rem;
  }
  @media only screen and (max-width: 768px) {
    width: 18.5rem;
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
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 41rem;
  padding-right: 11rem;
  // 1920 기준
  @media only screen and (max-width: 1024px) {
    height: 38rem;
    padding-right: 8rem;
  }
  @media only screen and (max-width: 768px) {
    height: 26rem;
    padding-left: 5rem;
  }
  @media only screen and (max-width: 375px) {
    height: 26rem;
    padding-left: 0rem;
  }
`
const AnswerText = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #030f2c;
  position: absolute;
  z-index: 10;
  padding-left: 40px;
  object-fit: contain;
  margin-left: -35%;
  animation-fill-mode: forwards;
  @media only screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 375px) {
    /* margin-left: -15%; */
  }
  ${props =>
    props.inside && //레코드판을 집어넣는 css애니메이션 추가 트리거가 true일때 실행.
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      animation-iteration-count: 1;
      animation-name: ${TextInside};
    `}
`

const SwiperContainer = styled.div`
  /* border: 1px solid red; */
  & > img {
    height: 100%;
  }
  display: flex;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  animation-fill-mode: forwards;
  margin-right: 10rem;
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 375px) {
  }
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
        @media only screen and (max-width: 1024px) {
          animation-name: ${ActiveAnimation1024};
        }
        @media only screen and (max-width: 768px) {
          animation-name: ${ActiveAnimation768};
        }
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
          @media only screen and (max-width: 1024px) {
            animation-name: ${UnActiveAnimation1024};
          }
          @media only screen and (max-width: 768px) {
            animation-name: ${UnActiveAnimation768};
          }
        `
      }
      //그이외 그냥 위치만 잡아줌
      return css`
        opacity: 0.5;
        transform: translateX(-65%) scale(0.6);
        @media only screen and (max-width: 1024px) {
          transform: translateX(-68%) scale(0.7);
        }
        @media only screen and (max-width: 768px) {
          transform: translateX(-130%) scale(1);
        }
      `
    } else if (activeIndex < thisIndex) {
      //선택된index가 현재요소의 값보다 작다면(즉 active상태의 요소보다 오른쪽에 있을때)위치만 잡아줌
      return `
      opacity: .5;
      width: 40rem;
      overflow: hidden;        
      transform: translateX(101%) scale(0.6);
      @media only screen and (max-width: 1024px) {
        transform: translateX(89%) scale(0.68);
      }
      @media only screen and (max-width: 768px) {
        transform: translateX(100%) scale(0.7);
      }
    `
    }
  }}
`

const RecordImg = styled.img`
  object-fit: contain;
  animation-fill-mode: forwards;

  ${props =>
    props.rotateSecond > 0 && //레코드판을 돌리는 css애니메이션 추가 0초 초과일때만 작동하도록 한다.
    css`
      animation-timing-function: ease-in-out;
      animation-duration: ${props.rotateSecond}s;
      animation-iteration-count: 1;
      animation-name: ${props.rotateSecond === 1
        ? Rotate1Record
        : Rotate3Record}; //1초일때 3초일때 분기해서 키프레임을 넣어줌
    `}
  width:45rem;
  @media only screen and (max-width: 1024px) {
    width: 40rem;
  }
  @media only screen and (max-width: 768px) {
    width: 26rem;
  }
  @media only screen and (max-width: 375px) {
    width: 28rem;
  }
`

const CaseImg = styled.img`
  overflow: hidden;
  position: relative;
  object-fit: contain;
  z-index: 2;
  margin-left: 30%;
  @media only screen and (max-width: 1024px) {
    margin-left: 30%;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 30%;
  }
  @media only screen and (max-width: 375px) {
    margin-left: 25%;
  }
`

/* Start button */
const ButtonContainer = styled.div`
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
  color: #fff;
  font-weight: 300;
  font-size: 4rem;
  text-align: center;
  padding: 0 6rem;
  @media only screen and (max-width: 1024px) {
    font-size: 3.2rem;
    padding: 0 6rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
    padding: 0 6rem;
  }
`

const ListenButtonStyle = styled.button`
  color: #ffffff;
  font-size: 1.8rem;
  font-family: 'Nanum Gothic';
  font-weight: 100;
  border: none;
  outline: none;
  background: none;
  padding: 0px;
  font-size: 1.5rem;
  @media only screen and (max-width: 1024px) {
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
  }
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
`

const HintButtonStyle = styled.button`
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  color: #fff;
  border: 1px solid #ffffff;
  outline: none;
  background: none;
  padding: 0px;
  width: 44rem;
  height: 5rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 1024px) {
    width: 35rem;
    height: 4rem;
    margin-bottom: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    width: 32rem;
    height: 4rem;
    margin-bottom: 1rem;
  }
  &:hover {
    color: #49fff2;
    transition: color 0.1s ease-in-out;
  }
  ${props =>
    props.hint &&
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 0.6s;
      animation-name: ${HintFade};
    `}
`

const AnswerButtonStyle = styled.button`
  cursor: pointer;
  color: #030f2c;
  border: none;
  outline: none;
  box-shadow: 0px 0px 21px -6px #49fff2;
  padding: 0px;
  width: 44rem;
  height: 5rem;
  @media only screen and (max-width: 1024px) {
    width: 35rem;
    height: 4rem;
  }
  @media only screen and (max-width: 768px) {
    width: 32rem;
    height: 4rem;
  }
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
`
/* End button */
export default TestCd
