import styled from 'styled-components';
import {ReactComponent as logoimage} from '../../assets/images/logo.svg';
import BlankTop from '../common/BlankTop';


const StyledLogo = styled(logoimage)`
    width: 29.7rem;
    height: 5.1rem;
    @media only screen and (max-width: 1024px) {
        width: 27.3rem;
        height: 4.7rem;
  }
    @media only screen and (max-width: 768px) {
        width: 22.1rem;
        height: 3.8rem;
  }
`

const StyledSpan = styled.span`
    font-size:1.5rem;
    text-align: center;
    color: #FFFFFF;    

    @media only screen and (max-width: 1024px) {
        font-size:2rem;

  }
    @media only screen and (max-width: 768px) {
        font-size:1.1rem;

  }
`

const HeaderInner = styled.header`
    margin:0 auto;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`


const Header = () => {
    return(
        <HeaderInner>
            <StyledLogo/>
            <BlankTop DesktopMargin='2.7' TabletMargin='2.6' MobileMargin='2.0'/>
            <StyledSpan>당신만의 플레이리스트를 만들어보세요!</StyledSpan>
        </HeaderInner>
    )
}

export default Header;