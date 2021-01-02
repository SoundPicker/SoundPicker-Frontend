import styled from 'styled-components';

const BlankDiv = styled.div`
    width:100%;
    margin-right: ${props=> props.DesktopMargin || 0}rem;
    @media only screen and (max-width: 1024px) {
    margin-left: ${props=> props.TabletMargin || 0}rem;
  }
    @media only screen and (max-width: 768px) {
    margin-left: ${props=> props.MobileMargin || 0}rem;
  }
`

const BlankLeft = ({DesktopMargin,TabletMargin,MobileMargin}) => {

    return <BlankDiv DesktopMargin={DesktopMargin} TabletMargin={TabletMargin} MobileMargin={MobileMargin}></BlankDiv>
}

export default BlankLeft;