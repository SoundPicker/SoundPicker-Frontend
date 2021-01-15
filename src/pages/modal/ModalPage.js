import React, { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import ModalContent from '../../components/modal/ModalContent.js'
import ModalInner from '../../components/modal/ModalInner'
import ModalOverlay from '../../components/modal/ModalOverlay'
import ModalWrapperContainer from '../../containers/modal/ModalWrapperContainer.js'

function ModalPage({
  visible,
  closeModal,
  maskClosable,
  urlId,
  modalIn,
  modalOut,
}) {
  const [data, setData] = useState('')
  useEffect(() => {
    setData(urlId)
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = `position: ""; top: "";`
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])
  return (
    <>
      <ModalOverlay visible={visible} modalIn={modalIn} modalOut={modalOut} />

      <ModalWrapperContainer
        closeModal={closeModal}
        maskClosable={maskClosable}
        visible={visible}
      >
        <ModalInner modalIn={modalIn}>
          <ModalContent data={data} />
        </ModalInner>

        <AnswerButtonStyle
          modalOut={modalOut}
          modalIn={modalIn}
          onClick={e => {
            closeModal(e)
          }}
        >
          돌아가기
        </AnswerButtonStyle>
      </ModalWrapperContainer>
    </>
  )
}

const FadeIn = keyframes`{
    0% { 
     opacity: 0;
    }
    100% {
    opacity: 1;
    }
  `

const FadeOut = keyframes`{
    0% { 
     opacity: 1;
    }
    100% {
    opacity: 0;
    }
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
  display: block;
  margin: 0 auto;
  z-index: 1000;
  overflow: auto;

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
  ${props =>
    props.modalIn &&
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 1s;
      animation-name: ${FadeIn};
    `}

  ${props =>
    props.modalOut &&
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 1s;
      animation-name: ${FadeOut};
    `}
`

export default ModalPage
