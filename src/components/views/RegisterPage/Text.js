import React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-family: NanumGothic;
    color:#ffffff;
    line-height: 40px;
    font-size: ${props=> props.DesktopLength || 0}px;
    @media only screen and (max-width: 1024px) {
    font-size: ${props=> props.TabletLength || 0}px;
  }
    @media only screen and (max-width: 768px) {
    font-size: ${props=> props.MobileLength || 0}px;
    }
`

const TextComponent = ({title,DesktopLength,TabletLength,MobileLength}) => { 


    return  <Title DesktopLength={DesktopLength} TabletLength={TabletLength} MobileLength={MobileLength} > {title} </Title>
}

export default TextComponent;