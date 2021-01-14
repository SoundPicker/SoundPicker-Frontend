import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  position: relative;
  width: 8px;
  z-index: 998;
  border-radius: 3px;
  margin: 1rem auto;
  background-color: #fff;
  transform: rotate(180deg);
  height: 37rem;
  right: 24rem;
  @media only screen and (max-width: 1024px) {
    height: 34rem;
    right: 22rem;
  }
  @media only screen and (max-width: 768px) {
    height: 23rem;
    right: 17rem;
  }
  @media only screen and (max-width: 375px) {
    height: 23rem;
    right: 13rem;
  }
`

const Fill = styled.div`
  background: linear-gradient(
    90deg,
    rgba(73, 255, 242, 1) 0%,
    rgba(73, 255, 233, 1) 35%,
    rgba(56, 245, 238, 1) 66%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 0px 0px 30px 3px #60ffda;
  height: 100%;
  border-radius: inherit;
  transition: height 0.6s ease-in;
  height: ${props => `${props.percentual}%`};
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
  }
`

const ProgressBar = ({ percentual }) => {
  return (
    <div>
      <Bar>
        <Fill percentual={`${Math.round(percentual)}`} />
      </Bar>
    </div>
  )
}

export default ProgressBar
