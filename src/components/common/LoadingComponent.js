import React from "react";
import styled from "styled-components";


const CircleBorder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient( rgba(96,255,205,1) ,rgba(96,255,205,0.2) ,rgba(96,255,205,0.01) );
  box-shadow:  5px 0px 20px -5px  rgba(96,255,205,0.5);
  animation: spin .8s linear 0s infinite;

  @media  (max-width:1024px) { 
    width: 30px;
  height: 30px;
  padding: 4px;
    }
    
    @media (min-width: 1024px) {
      width: 65px;
     height: 65px;
     padding: 7px;
    }
`;


const CircleCore =styled.div`
 width: 100%;
  height: 100%;
  background-color: rgba(12,28,48,1);
  border-radius: 50%;
`;

const SpinnerBox = styled.div`
@keyframes spin {
  from {
    transform: rotate(359deg);
  }
  to{
    transform: rotate(0);
  }
}
* {
  box-sizing: border-box;
}
`;

const LoadingComponent = ({}) => {
    return(
   
        <SpinnerBox>
        <CircleBorder>
            <CircleCore></CircleCore>
        </CircleBorder>
    </SpinnerBox>

    );

};
export default LoadingComponent;