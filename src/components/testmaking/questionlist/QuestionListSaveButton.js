import styled from 'styled-components';


const SaveButtonWrap = styled.div`
    width:28rem;
    height:5.9rem;
    background-image:linear-gradient(to right,rgba(0, 224, 255, 1),rgba(0, 255, 209, 1));
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow: 10px 0 15px -6px rgba(0, 255, 209, 0.3),
                -10px 0 15px -6px rgba(0, 224, 255, 0.3); 
    margin:0 auto;
    @media only screen and (max-width: 1024px) {
        width:34rem;
        height:5.9rem
  }
    @media only screen and (max-width: 768px) {
        width:28rem;
        height:4.6rem
  }
`
const SaveButtonInner = styled.button`
    font-family: NanumGothic;
    outline:none;
    border:0;
    width:27.4rem;
    height:5.3rem;
    background-color:#061A24;
    font-weight: bold;
    font-size: 1.6rem;
    letter-spacing: 0.07em;
    color: #E5E5E5;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow: 10px 0 15px -6px rgba(0, 255, 209, 0.3) inset,
                -10px 0 15px -6px rgba(0, 224, 255, 0.3)inset; 
    cursor:pointer;
    @media only screen and (max-width: 1024px) {
        width:33.4rem;
        height:5.3rem
  }
    @media only screen and (max-width: 768px) {
        width:27.4rem;
        height:4rem;
        font-size: 1.3rem;

  }

`



const QuestionSaveButton = ({onSubmitHandler}) => {
    
    
    return(
        <SaveButtonWrap>
            <SaveButtonInner onSubmit={onSubmitHandler}>
                저장하기
            </SaveButtonInner>
        </SaveButtonWrap>
    )

}

export default QuestionSaveButton;