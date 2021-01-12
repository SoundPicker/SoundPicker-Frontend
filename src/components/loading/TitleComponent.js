import React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-family: NanumGothic;
    color:#ffffff;
    font-weight:bold;
    
    text-align:center;
    @media  (max-width:1024px) {
        width:300px;
        margin-left:10px;
        margin-right:10px;
        font-size:20px;
        line-height: 30px;
    }

    @media (min-width: 1024px) {
        width:400px;
        margin-left:0px;
        margin-right:10px;
        font-size:32px;
        line-height: 35px;
    }

    
`

const TitleComponent = ({title}) => {
    return(
   
                <Title>{title}</Title>

    );

};
export default TitleComponent;