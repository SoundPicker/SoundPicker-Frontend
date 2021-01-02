import styled from 'styled-components';


const StyledStartWarp = styled.div`
    width:16.5rem;
    height:3.6rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border:1px solid #fff;
    @media only screen and (max-width: 1024px) {
        width:16.5rem;
  }
    @media only screen and (max-width: 768px) {
        width:10.4rem;
  }
`
const StyledText = styled.div`
     font-weight: bold;
    font-size: 1.2rem;
    color: #FFFFFF;
`
const Time = styled.input`
    width:5rem;
    background-color:transparent;
    outline:none;
    border:0;
    font-size: 1.2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
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