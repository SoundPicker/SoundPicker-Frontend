import React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-family: NanumGothic;
    color:#ffffff;
    line-height: 10px;
    font-weight:bold;
    font-size: ${props=> props.DesktopLength || 0}px;
    @media only screen and (max-width: 1024px) {
    font-size: ${props=> props.TabletLength || 0}px;
  }
    @media only screen and (max-width: 768px) {
    font-size: ${props=> props.MobileLength || 0}px;
    width:220px;
    }
`

const BoldTextComponent = ({title,DesktopLength,TabletLength,MobileLength}) => { 


    return  <Title DesktopLength={DesktopLength} TabletLength={TabletLength} MobileLength={MobileLength} > {title} </Title>
}

export default BoldTextComponent;