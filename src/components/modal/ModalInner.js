import styled, { keyframes, css } from 'styled-components'

const LayoutInner = styled.div`
  box-shadow: 0px 0px 8px 2px #60ffda;
  background: black;
  padding: 0.3rem;
  overflow: hidden;
  border-radius: 0.9rem;
  width: 100%;
  max-width: 85rem;
  min-width: 64.8rem;
  margin: 7.2rem auto;
  outline: 0;
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
      animation-name: ${FadeIn};
    `}
  @media only screen and (max-width: 880px) {
    width: 95vw;
  }
`

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
  opacity: 1;
  }
`
// min-height: 50%;

const ModalInner = ({ children, modalIn }) => {
  return (
    <LayoutInner modalIn={modalIn} tabIndex="0">
      {' '}
      {children}{' '}
    </LayoutInner>
  )
}

export default ModalInner
