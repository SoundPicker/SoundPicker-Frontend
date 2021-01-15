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
  margin: 17rem auto 0 auto;
  margin-bottom: 6rem;
  @media only screen and (max-width: 1024px) {
    margin: 12rem auto 5rem auto;
    margin-bottom: 5rem;
  }
  @media only screen and (max-width: 768px) {
    margin: 10rem auto 3rem auto;
    max-width: 60rem;
    min-width: 30rem;
    margin-bottom: 4rem;
  }
  @media only screen and (max-width: 667px) {
    margin: 8rem auto 2rem auto;
    max-width: 35rem;
    min-width: 30rem;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 375px) {
    margin: 8rem auto 2rem auto;
    max-width: 30rem;
    min-width: 20rem;
    margin-bottom: 3rem;
  }

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
      animation-name: ${FadeOut};
    `}
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
  opacity: 0;
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
