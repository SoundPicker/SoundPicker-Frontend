import styled from 'styled-components';


const StyledStartWarp = styled.div`
    width:16.5rem;
    height:3.6rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border:1px solid #fff;
    padding-left:1.5rem;
    padding-top:1.1rem;
    padding-bottom:1.1rem;
    padding-right:1rem;

    @media only screen and (max-width: 1024px) {
        width:14rem;
        height:4.2rem;
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

    @media only screen and (max-width: 768px) {
        font-size: 1.1rem;
        margin-top:0rem;

  }
`
const TimeWrap = styled.div`
    width:5rem;
    display:flex;
    align-items:center;
    @media only screen and (max-width: 1024px) {
        margin-left:0.2rem;

  }
    @media only screen and (max-width: 768px) {
        width:3.4rem;
        margin-right:0.8rem;
        font-size: 1.1rem;
        margin-left:0rem;

  }
`
const Time = styled.input`
    width:2.3rem;
    background-color:transparent;
    appearance: none;
    outline:none;
    border:0;
    font-size: 1.2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    @media only screen and (max-width: 768px) {
        font-size: 1.1rem;
  }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
}
`
const Verse = styled.div`
    background-color:transparent;
    font-size: 1.2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    @media only screen and (max-width: 768px) {
        font-size: 1.1rem;
  }
`
const StartTime = ({maxLengthCheck,onChangeMinutes,onChangeSeconds,questionStartsfrom}) => {

    return(
        <StyledStartWarp>
            <StyledText>시작시간</StyledText>
            <TimeWrap>
                <Time type="number" name='min' placeholder="00" min={0} maxLength="2" value={questionStartsfrom||questionStartsfrom===0 ? parseInt(questionStartsfrom / 60):""} onChange={onChangeMinutes} onInput={maxLengthCheck} required/>
                    <Verse>
                        :
                    </Verse>
                <Time  type="number" name='sec' placeholder="00" min={0} maxLength="2" value={questionStartsfrom||questionStartsfrom===0 ? parseInt(questionStartsfrom % 60):""} max={60} onChange={onChangeSeconds} onInput={maxLengthCheck} required />
            </TimeWrap>
        </StyledStartWarp>
    )
}

export default StartTime;