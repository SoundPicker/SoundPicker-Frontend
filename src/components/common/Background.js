import styled from 'styled-components';
import Bg from '../../assets/images/all_background.png';

const Warp = styled.div`
    width:100vw;
    height:1000vh;
    background-image: url(${Bg});
    background-repeat: no-repeat;
    background-position: center top;
    background-color: black;
`

const Background = ({children}) => {

    return(
        <Warp>
                {children}
        </Warp>
    )
    
}

export default Background;