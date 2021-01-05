import {ReactComponent as Plus} from '../../../assets/icons/button_plus.svg';
import styled from 'styled-components';


const Wrap = styled.div`
    width:6.7rem;
    height:6.8rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0 auto;
    cursor: pointer;
    @media only screen and (max-width: 1024px) {
        width:6.7rem;
        height:6.2rem
  }
    @media only screen and (max-width: 768px) {
        width:6.7rem;
        height:6.2rem
  }

`

const Ten = styled.div`
    width:100%;
    font-size:1.2rem;
    color:rgba(96,255,218,1);
    text-align:center;
    margin-top:1.3rem;
`


const QustionLustPlusButton = ({addQuestions}) => {

    return(
        <Wrap>
            <Plus onClick={addQuestions}/>
            <Ten>최대 10개</Ten>
        </Wrap>

    )
}

export default QustionLustPlusButton;