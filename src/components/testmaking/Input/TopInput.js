import styled from 'styled-components';

const StyledInput = styled.input`
    width:100%;
    background-color:transparent;
    outline:none;
    border:0;
    color: #fff;
    font-size: 1.6rem;
    &::placeholder{
        color: #fff;
    }
`



const TopInput = ({inputName,inputPlaceholder,inputMaxLength}) => {
    return(
        <StyledInput type='text' placeholder={inputPlaceholder} maxLength={inputMaxLength} name={inputName} required/>
    )
}

export default TopInput;