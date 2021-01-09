import styled from 'styled-components';
import Bg1920 from '../../assets/images/testmaking/background/1920TMBG.png';
import Bg1024 from '../../assets/images/testmaking/background/1024TMBG.png';
import Bg768 from '../../assets/images/testmaking/background/768TMBG.png';

const Warp = styled.div`
    width:100%;
    height:100%;
    min-height:100vh;
    background-image: url(${Bg1920});
    background-repeat: no-repeat;
    background-position: center top;
    background-color: #081A24;
    @media only screen and (max-width: 1024px) {
      background-image: url(${Bg1024});
  }
    @media only screen and (max-width: 768px) {
      background-image: url(${Bg768});
  }

`
const Background = ({children}) => {
    return<Warp>{children}</Warp>
}
export default Background;