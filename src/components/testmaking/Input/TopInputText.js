import styled from "styled-components";


const StyledInputText = styled.span`
    width:12.4rem;
    padding-left:2rem;
    padding-bottom:1.5rem;
    padding-top:1.7rem;
    @media only screen and (max-width: 1024px) {
        width:20.4rem;
        padding-bottom:1.5rem;
        padding-left:1.9rem;
        padding-top:1.1rem;

  }
    @media only screen and (max-width: 768px) {
        width:15.6rem;
        padding-left:1.4rem;
        padding-bottom:1rem;
        padding-top:0.5rem;
  } 

`
const Title = styled.div`
    font-family: NanumGothic;
    color:#ffffff;
    line-height: 10px;
    font-weight:bold;
    font-size: ${props=> props.DesktopLength || 0}px;
    @media only screen and (max-width: 1024px) {
    font-size: ${props=> props.TabletLength || 0}px;
  }
    @media only screen and (max-width: 768px) {
    font-size: ${props=> props.MobileLength || 0}px;
    }
`


const TopInputText = ({text}) => {
    return(
        <StyledInputText>
            <Title DesktopLength='16' TabletLength='16' MobileLength='14' >{text}</Title>
        </StyledInputText>
    )
}

export default TopInputText;