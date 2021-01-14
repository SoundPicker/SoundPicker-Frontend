import styled from 'styled-components';


const StyledInputWrap = styled.div`
    width:100%;
    height:4.8rem;
    display:flex;
    justify-content: space-between;
    align-items: center;  
    @media only screen and (max-width: 1024px) {
        height:4.3rem;
        border-bottom: 1px solid #fff;
  }
    @media only screen and (max-width: 768px) {
        height:3.3rem;
        border-bottom: 1px solid #fff;
  } 
`



const QustionListHintWrap = ({children}) => {
    return <StyledInputWrap>{children}</StyledInputWrap>
} 

export default QustionListHintWrap;