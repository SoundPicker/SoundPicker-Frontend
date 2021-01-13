import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import ham from '../../assets/images/hammenu/menu.jpg'
import arrow from '../../assets/images/hammenu/button_back.jpg'
import BlankTop from './BlankTop'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from '../../_actions/user_action'

function QuizHeader() {
  useEffect(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), []) // 처음 들어왔을때만 스크롤 맨위로 + 메뉴 열어도 위치 고정
  const [clickOpenArrow, setClickOpenArrow] = useState(false) // 여는 트리거
  const [clickCloseArrow, setClickCloseArrow] = useState(false) // 닫는 트리거

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
              </ArrowWrapper>
              <BlankTop DesktopMargin="7" TabletMargin="8" MobileMargin="7" />
              <ContentWrapper>
                <UserInfo>
                  {myState.member.nickname ? ( // 로그인 한 경우 : 로그아웃인 상태로 게임 하는경우
                    <span>Hi, {myState.member.nickname}</span>
                  ) : (
                    <span>Hi, User</span>
                  )}
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
                    My Page
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
              </ArrowWrapper>
              <BlankTop DesktopMargin="7" TabletMargin="8" MobileMargin="7" />
              <ContentWrapper>
                <UserInfo>
                  <span>Hi, User</span>
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
                    My Page
                  </li>
                </ul>
              </PageWrapper>
            </MenuBox>
          </QuizWrapper>
        </>
      )
    case 'idle':
    default:
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
              </ArrowWrapper>
              <BlankTop DesktopMargin="7" TabletMargin="8" MobileMargin="7" />
              <ContentWrapper>
                <UserInfo>
                  <span>Hi, User</span>
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
                    My Page
                  </li>
                </ul>
              </PageWrapper>
            </MenuBox>
          </QuizWrapper>
        </>
      )
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
const SlideOff1024 = keyframes`
  from {
    width: 30%;
  }
  to {
    width: 0%;
  }
`
const SlideOff768 = keyframes`
  from {
    width: 30%;
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
const SlideOn1024 = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 30%;
  }
`
const SlideOn768 = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 30%;
  }
`

const QuizWrapper = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  z-index: 999999;
`
const HamImg = styled.img`
  display: block;
  margin-left: 2rem;
  margin-top: 1.5rem;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  @media only screen and (max-width: 1024px) {
    width: 3rem;
    height: 3rem;
  }
  @media only screen and (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`
const ArrowImg = styled.img`
  overflow: hidden;
  display: block;
  width: 3rem;
  cursor: pointer;
  position: fixed;
`

const ArrowWrapper = styled.div`
  overflow: hidden;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
`
const ContentWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  font-size: 1.4rem;
  color: #fff;
  width: 100%;
  padding: 0 4rem;
`

const LineWrapper = styled.div`
  overflow: hidden;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  color: #fff;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    padding: 0 4rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 4rem;
  }
`

const ContentLine = styled.div`
  margin: 0 auto;
  width: 100%;
  white-space: nowrap;
  border: 1px solid #fff;
`

const UserInfo = styled.div`
  display: block;
`

const PageWrapper = styled.div`
  padding: 0 4rem;
  overflow: ellipsis;
  display: flex;
  white-space: nowrap;
  justify-content: flex-start;
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
  overflow: hidden;
  height: 100vh;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;

  top: 0;
  width: 0%;
  ${props =>
    props.clickCloseArrow &&
    css`
      width: 0%;
      padding: 0;
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      animation-name: ${SlideOff};
      @media only screen and (max-width: 1024px) {
        animation-name: ${SlideOff1024};
      }
      @media only screen and (max-width: 768px) {
        animation-name: ${SlideOff768};
      }
    `}
  ${props =>
    props.clickOpenArrow &&
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      animation-name: ${SlideOn};
      width: 20%;
      @media only screen and (max-width: 1024px) {
        width: 30%;
        animation-name: ${SlideOn1024};
      }
      @media only screen and (max-width: 768px) {
        width: 30%;
        animation-name: ${SlideOn768};
      }
    `}
`

export default QuizHeader
