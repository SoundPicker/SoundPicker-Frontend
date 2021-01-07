import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  line-height: 1.5;
  padding-left: 15px;
  padding-right:15px;
  @media (max-width: 767px) { //iphone
    padding-left: 10px;
    padding-right:10px;
    font-size:10px;
  }
  padding-top:5px;
  padding-bottom:5px;
  height: ${(props) => props.width || 10 } px ;
  border: 1px solid ${(props) => props.border|| "rgba( 255, 255, 255, 0 )"};
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.background || "rgba( 255, 255, 255, 0 )"};
  font-size: ${props=> props.font || 0}px;
  margin-right:10px;
  width:140px;
`

function Button({ children, border, color, background, font, width }) {
  return (
    <StyledButton border={border} color={color} background={background} font={font} width={width} >
      {children}
    </StyledButton>
  )
}
export default Button;