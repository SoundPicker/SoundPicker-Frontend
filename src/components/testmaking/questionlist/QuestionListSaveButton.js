import styled from 'styled-components';


const SaveButtonWrap = styled.div`
    width:28rem;
    height:5.9rem;
    background-image:linear-gradient(to right,rgba(20, 0, 255, 1),rgba(0, 255, 240, 1));
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow: 10px 0 15px -6px rgba(0, 255, 240, 0.3),
                -10px 0 15px -5px rgba(20, 0, 255, 0.3); 
    margin:0 auto;
`
const SaveButtonInner = styled.button`
    font-family: NanumGothic;
    outline:none;
    border:0;
    width:27.4rem;
    height:5.2rem;
    background-color:#061A24;
    font-weight: bold;
    font-size: 1.6rem;
    letter-spacing: 0.07em;
    color: #E5E5E5;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow: 10px 0 15px -6px rgba(20, 0, 255, 0.3) inset,
                -10px 0 15px -5px rgba(0, 255, 240, 0.3)inset; 

`



const QuestionSaveButton = () => {
    
    
    return(
        <SaveButtonWrap>
            <SaveButtonInner>
                저장하기
            </SaveButtonInner>
        </SaveButtonWrap>
    )

}

export default QuestionSaveButton;