import styled from 'styled-components';



const StyledInputWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    animation: fadeIn .8s linear;

    @media only screen and (max-width: 1024px) {
        display:block;
  }
    @media only screen and (max-width: 768px) {
        display:block;
  }
    @media only screen and (max-width: 548px) {
        display:block;
    }
    @keyframes fadeIn {
  from {
    opacity:0;
    transform:translateY(50px)
  }
  to{
    opacity:1;
    transform:translateY(0px)

  }
}
`



const InputsWrap = ({children}) => {
    return <StyledInputWrap>{children}</StyledInputWrap>
}

export default InputsWrap;