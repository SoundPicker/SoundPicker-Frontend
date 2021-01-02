import styled from "styled-components";


const StyledWrap = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const PlayerWrap = ({children}) => {

    return <StyledWrap>{children}</StyledWrap>
}

export default PlayerWrap