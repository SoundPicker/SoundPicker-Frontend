import styled from 'styled-components';
import {ReactComponent as BtnDelete} from '../../../assets/icons/button_delete.svg'

const StyledQustionListHeader = styled.header`
        width: 97.1rem;
        height: 5.8rem;
        display:flex;
        justify-content: space-between;
    @media only screen and (max-width: 1024px) {
        width:71.5rem;
        height: 8.3rem;

  }
    @media only screen and (max-width: 768px) {
        width:54.8rem;
        height: 5.8rem;

  }
    @media only screen and (max-width: 548px) {
        width:100%;
        height: 5.8rem;
        padding:0 0.5rem;
    }  

`

const StyledBtnDelete = styled(BtnDelete)`
        align-self:flex-end;
        width:3.6rem;
        height: 3.6rem;
        cursor: pointer;
    @media only screen and (max-width: 1024px) {
        width:3.6rem;
        height: 3.6rem;

  }
    @media only screen and (max-width: 768px) {
        width:3.2rem;
        height: 3.2rem;

  }


`

const QustionListHeader = () => {
    return(
        <StyledQustionListHeader>
            <div></div><StyledBtnDelete />
        </StyledQustionListHeader>
    )
}

export default QustionListHeader