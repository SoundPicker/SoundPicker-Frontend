import styled from 'styled-components';


const StyledInputWrap = styled.div`
    width:33.5rem;

    @media only screen and (max-width: 1024px) {
        width:100%;

  }
    @media only screen and (max-width: 768px) {
        width:100%;
  } 
`



const QustionListLeftWrap = ({children}) => {
    return <StyledInputWrap>{children}</StyledInputWrap>
} 

export default QustionListLeftWrap;