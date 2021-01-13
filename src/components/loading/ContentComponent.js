import React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-family: NanumGothic;
    color:#ffffff;
    line-height: 10px;
    text-align:center;
    @media (min-width: 768px) and (max-width:1024px) { //between
        margin-left:10px;
    margin-right:10px;
    font-size:12px;
    }

    @media (min-width: 1024px) { //desktop
        width:460px;
        margin-left:0px;
        margin-right:10px;
        font-size:15px;
    }
    @media (max-width: 767px) { //iphone
        margin-left:10px;
    margin-right:10px;
    font-size:10px;
  }
`

const ContentComponent = ({title}) => { 

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
   
                <Title>{title}</Title>

    );

};
export default ContentComponent;