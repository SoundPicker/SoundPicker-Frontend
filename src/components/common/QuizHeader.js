import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import ham from '../../assets/menu.png'
import arrow from '../../assets/button_back.png'
import BlankTop from './BlankTop'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from '../../_actions/user_action'

function QuizHeader() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  const [clickOpenArrow, setClickOpenArrow] = useState(false)
  const [clickCloseArrow, setClickCloseArrow] = useState(false)
  // useEffect(() => console.log(clickArrow), [clickArrow])
  const history = useHistory()
  const [myState, setMyState] = useState({ status: 'idle', member: null })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(() => {
      dispatch(auth()).then(response => {
        setMyState({ status: 'pending' })
        const data = response.payload.data
        setTimeout(() => setMyState({ status: 'resolved', member: data }), 600)
      })
    })
    ;(async () => {
      try {
      } catch (e) {}
    })()
  }, [])

  switch (myState.status) {
    case 'pending':
      return <h1></h1>
    case 'resolved':
      return (
        <>
          <QuizWrapper>
            <HamImg
              // onClick={() => setClickArrow(false)}
              onClick={() => {
                setClickOpenArrow(true)
                setClickCloseArrow(false)
              }}
              src={ham}
            />
            <MenuBox
              clickCloseArrow={clickCloseArrow}
              clickOpenArrow={clickOpenArrow}
            >
              <ArrowWrapper>
                <ArrowImg
                  src={arrow}
                  onClick={() => {
                    setClickCloseArrow(true)
                    setClickOpenArrow(false)
                  }}
                />
                <BlankTop
                  DesktopMargin="7"
                  TabletMargin="3"
                  MobileMargin="2.6"
                />
              </ArrowWrapper>
              <ContentWrapper>
                <UserInfo>
                  <span>Hi, {myState.member.nickname}</span>
                </UserInfo>
              </ContentWrapper>
              <BlankTop DesktopMargin="3" TabletMargin="3" MobileMargin="2.6" />
              <LineWrapper>
                <ContentLine />
              </LineWrapper>
              <BlankTop DesktopMargin="5" TabletMargin="3" MobileMargin="2.6" />
              <PageWrapper>
                <ul>
                  <li
                    onClick={() => {
                      history.push('/')
                    }}
                  >
                    Main
                  </li>
                  <li
                    onClick={() => {
                      history.push('/testmaking')
                    }}
                  >
                    Make
                  </li>
                  <li
                    onClick={() => {
                      history.push('/mypage')
                    }}
                  >
                    My page
                  </li>
                </ul>
              </PageWrapper>
            </MenuBox>
          </QuizWrapper>
        </>
      )
    case 'rejected':
      return (
        <>
          <QuizWrapper>
            <HamImg
              onClick={() => {
                setClickOpenArrow(true)
                setClickCloseArrow(false)
              }}
              src={ham}
            />
            <MenuBox
              clickCloseArrow={clickCloseArrow}
              clickOpenArrow={clickOpenArrow}
            >
              <ArrowWrapper>
                <ArrowImg
                  src={arrow}
                  onClick={() => {
                    setClickCloseArrow(true)
                    setClickOpenArrow(false)
                  }}
                />
                <BlankTop
                  DesktopMargin="7"
                  TabletMargin="3"
                  MobileMargin="2.6"
                />
              </ArrowWrapper>
              <ContentWrapper>
                <UserInfo>
                  <span>Hi, User!</span>
                </UserInfo>
              </ContentWrapper>
              <BlankTop DesktopMargin="3" TabletMargin="3" MobileMargin="2.6" />
              <LineWrapper>
                <ContentLine />
              </LineWrapper>
              <BlankTop DesktopMargin="5" TabletMargin="3" MobileMargin="2.6" />
              <PageWrapper>
                <ul>
                  <li
                    onClick={() => {
                      history.push('/')
                    }}
                  >
                    Main
                  </li>
                  <li
                    onClick={() => {
                      history.push('/testmaking')
                    }}
                  >
                    Make
                  </li>
                  <li
                    onClick={() => {
                      history.push('/mypage')
                    }}
                  >
                    My page
                  </li>
                </ul>
              </PageWrapper>
            </MenuBox>
          </QuizWrapper>
        </>
      )
    case 'idle':
    default:
      return <div></div>
  }
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

const ContentLine = styled.div`
  margin: 0 auto;
  white-space: nowrap;
  width: 85%;
  border-bottom: 1px solid #fff;
`
const QuizWrapper = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  z-index: 999999;
`
const HamImg = styled.img`
  margin-left: 2rem;
  cursor: pointer;
  height: 4rem;
`
const ArrowImg = styled.img`
  display: block;
  width: 3rem;
  margin-right: 2rem;
  cursor: pointer;
  position: fixed;
`

const ArrowWrapper = styled.div`
  margin-top: 1rem;
  padding-right: 2rem;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  /* border: 1px solid red; */
`
const ContentWrapper = styled.div`
  white-space: nowrap;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  font-size: 1.4rem;
  color: #fff;
  width: 100%;
  padding-right: 68%;
`

const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  color: #fff;
  width: 100%;
`
const UserInfo = styled.div`
  display: block;
  /* border: 1px solid orange; */
`

const PageWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: flex-end;
  padding-right: 73%;
  font-size: 1.4rem;
  color: #fff;
  width: 100%;
  ul {
    li {
      cursor: pointer;
      margin-bottom: 3rem;
    }
    li:hover {
      margin-bottom: 3rem;
      color: #60ffe2;
    }
  }
`

const MenuBox = styled.div`
  /* width: 0%; */
  height: 100vh;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 0%;
  ${props =>
    props.clickCloseArrow &&
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      animation-name: ${SlideOff};
      width: 0%;
      padding: 0;
    `}
  ${props =>
    props.clickOpenArrow &&
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      animation-name: ${SlideOn};
      width: 20%;
    `}
`

export default QuizHeader

//
