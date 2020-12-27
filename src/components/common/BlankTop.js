import styled from 'styled-components';

const BlankDiv = styled.div`
    width:100%;
    margin-top: ${props=> props.DesktopMargin || 0}rem;
    @media only screen and (max-width: 768px) {
    margin-top: ${props=> props.MobileMargin || 0}rem;
  }
`

const BlankTop = ({DesktopMargin,MobileMargin}) => {
    return <BlankDiv DesktopMargin={DesktopMargin} MobileMargin={MobileMargin}></BlankDiv>
}

export default BlankTop;