import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  line-height: 1.5;
  padding-left: 30px;
  padding-right:30px;
  @media (max-width: 767px) { //iphone
    padding-left: 10px;
    padding-right:10px;
    font-size:10px;
  }
  padding-top:5px;
  padding-bottom:5px;
  width: ${(props) => props.width || 20 } px ;
  border: 1px solid ${(props) => props.border|| "rgba( 255, 255, 255, 0 )"};
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.background || "rgba( 255, 255, 255, 0 )"};
  font-size: ${props=> props.font || 0}px;
  margin-right:10px;
`

function Button({ children, border, color, background, font }) {
  return (
    <StyledButton border={border} color={color} background={background} font={font}>
      {children}
    </StyledButton>
  )
}
export default Button;