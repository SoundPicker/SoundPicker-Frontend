import styled from 'styled-components';


const StyledStartWarp = styled.div`
    width:16.5rem;
    height:3.6rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border:1px solid #fff;
    padding-left:2rem;
    padding-top:1.1rem;
    padding-bottom:1.1rem;
    padding-right:2rem;

    @media only screen and (max-width: 1024px) {
        width:14rem;
  }
    @media only screen and (max-width: 768px) {
        width:10.4rem;
        height:2.8rem;
        padding-left:0.9rem;
        padding-top:0.8rem;
        padding-bottom:0.8rem;
        padding-right:0.9rem;

  }
`
const StyledText = styled.div`
     font-weight: bold;
    font-size: 1.2rem;
    color: #FFFFFF;
    margin-top:0.2rem;

    @media only screen and (max-width: 768px) {
        font-size: 1.1rem;
        margin-top:0rem;

  }
`
const Time = styled.input`
    width:5rem;
    background-color:transparent;
    outline:none;
    border:0;
    font-size: 1.2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    @media only screen and (max-width: 768px) {
        width:3.4rem;

        font-size: 1.1rem;

  }
`


const StartTime = () => {


    return(
        <StyledStartWarp>
            <StyledText>시작시간</StyledText>
            <Time type='text'placeholder="00:00" />
        </StyledStartWarp>
    )
}

export default StartTime;