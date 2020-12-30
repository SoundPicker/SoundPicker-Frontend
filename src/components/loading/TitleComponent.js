import React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-family: NanumGothic;
    font-size:32px;
    color:#ffffff;
    font-weight:bold;
    line-height: 35px;
    text-align:center;
    @media (min-width: 768px) and (max-width:1000px) {
        left:0;
        width:350px;
        margin-left:20px;
        margin-right:10px;
    }

    @media (min-width: 1000px) {
        width:460px;
        margin-left:0px;
        margin-right:10px;

    }
    @media (max-width: 768px) {
        margin-left:10px;
        margin-right:10px;
    }
`

const TitleComponent = ({title}) => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
   
                <Title>{title}</Title>

    );

};
export default TitleComponent;