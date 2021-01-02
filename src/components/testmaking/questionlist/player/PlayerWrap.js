import styled from "styled-components";


const StyledWrap = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media only screen and (max-width: 1024px) {
        padding:0 3.8rem;

  }
  @media only screen and (max-width: 768px) {
        padding:0;

  }
`

const PlayerWrap = ({children}) => {

    return <StyledWrap>{children}</StyledWrap>
}

export default PlayerWrap