import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  position: relative;
  height: 37rem;
  width: 8px;
  z-index: 10000;
  right: 23rem;
  border-radius: 3px;
  margin: 1rem auto;
  background-color: #fff;
  transform: rotate(180deg);
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
