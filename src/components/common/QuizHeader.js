import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import ham from '../../assets/menu.png'
import arrow from '../../assets/button_back.png'
import BlankTop from './BlankTop'

function QuizHeader() {
  const [clickArrow, setClickArrow] = useState(true)

  useEffect(() => console.log(clickArrow), [clickArrow])

  return (
    <>
      <QuizWrapper>
        <HamImg
          onClick={() => setClickArrow(false)}
          src={ham}
          onClick={() => {
            setClickArrow(false)
          }}
        />
        <MenuBox clickArrow={clickArrow}>
          <ArrowWrapper>
            <ArrowImg
              src={arrow}
              onClick={() => {
                setClickArrow(true)
              }}
            />
            <BlankTop DesktopMargin="3" TabletMargin="3" MobileMargin="2.6" />
          </ArrowWrapper>
          <ContentWrapper>
            <div>ddd</div>
          </ContentWrapper>
        </MenuBox>
      </QuizWrapper>
    </>
  )
}

const SlideOff = keyframes`
  from {
    width: 20%;
    
  }
  to {
    width: 0%;
  }
`

const SlideOn = keyframes`
  from {
    width: 0%;
    
  }
  to {
    width: 20%;
    
  }
`

const QuizWrapper = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
`
const HamImg = styled.img`
  /* width: 100%; */
  cursor: pointer;
  height: 4rem;
  /* border: 1px solid blue; */
`
const ArrowImg = styled.img`
  display: block;
  width: 3rem;
  margin-right: 1rem;
  cursor: pointer;
  /* z-index: 999999; */
  /* position: fixed; */
`

const ArrowWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  /* border: 1px solid red; */
  justify-content: flex-end;

  width: 100%;
`
const ContentWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  /* border: 1px solid red; */
  justify-content: center;
  font-size: 1.4rem;
  /* font-weight: 500; */
  color: #fff;
  width: 100%;
`

const MenuBox = styled.div`
  width: 0%;
  height: 85vh;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  ${props =>
    props.clickArrow &&
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      /* animation-iteration-count: 1; */
      animation-name: ${SlideOff};
      width: 0%;
    `}
  ${props =>
    !props.clickArrow &&
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      /* animation-iteration-count: 1; */
      animation-name: ${SlideOn};
      width: 20%;
    `}
`

export default QuizHeader
