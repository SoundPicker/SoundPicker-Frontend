import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  line-height: 1.5;
  padding-left: 15px;
  padding-right:15px;
  @media only screen and (max-width: 767px){ //iphone
    font-size:5px;
    width:47px;
    margin-left: 1px;
    margin-right:1px;
  padding-right:1px;
  padding-left:1px;
  padding-top:1px;
  padding-bottom:1px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size:8px;
    width:90px;
    margin-left: 1px;
    margin-right:1px;
  padding-right:1px;
  padding-left:1px;
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
  cursor:pointer;
  outline:none;

`

function Button({ children, border, color, background, font, width,...rest }) {
  return (
    <StyledButton border={border} color={color} background={background} font={font} width={width}{...rest} >
      {children}
    </StyledButton>
  )
}
export default Button;