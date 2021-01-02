import styled from 'styled-components';



const StyledInputWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    @media only screen and (max-width: 1024px) {
        display:block;
  }
    @media only screen and (max-width: 768px) {
        display:block;
  }
    @media only screen and (max-width: 548px) {
        display:block;
    }
`



const InputsWrap = ({children}) => {
    return <StyledInputWrap>{children}</StyledInputWrap>
}

export default InputsWrap;