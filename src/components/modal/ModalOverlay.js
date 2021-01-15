import styled, { css, keyframes } from 'styled-components'

const Overlay = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: all 1s ease-in-out;
  ${props =>
    props.modalIn &&
    css`
      animation-timing-function: ease-in-out;
      animation-duration: 1s;
      animation-name: ${FadeIn};
    `}
`

const FadeIn = keyframes`{
  0% { 
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const FadeOut = keyframes`{
  0% { 
    background-color: rgba(0, 0, 0, 0.5);
  }
  100% {
    background-color: rgba(0, 0, 0, 0);
  }
`

const ModalOverlay = ({ visible, modalIn, modalOut }) => {
  return <Overlay visible={visible} modalIn={modalIn} modalOut={modalOut} />
}

export default ModalOverlay
