import styled from 'styled-components';

const StyledInput = styled.input`
    width:100%;
    background-color:transparent;
    outline:none;
    border:0;
    color: #fff;
    font-size: 1.6rem;
    padding-bottom:1.5rem;
    @media only screen and (max-width: 1024px) {
        padding-bottom:1.6rem;
        font-size: 1.2rem;


  }
    @media only screen and (max-width: 768px) {
        padding-bottom:1.2rem;
        font-size: 1.2rem;

  } 
    &::placeholder{
        color: #fff;
    }
`



const QustionListYoutubeInput = ({inputName,inputPlaceholder,inputMaxLength,getYoutubeId,videoId,questionURL}) => {
    return(
        <>
        {videoId ? 
        <StyledInput type='text' placeholder={inputPlaceholder} maxLength={inputMaxLength} name={inputName} value={`https://www.youtube.com/watch?v=${videoId}`} onChange={getYoutubeId} required/>        
    :
    <StyledInput type='text' placeholder={inputPlaceholder} maxLength={inputMaxLength} name={inputName} value={questionURL} onChange={getYoutubeId} required/>

    }

        </>
    )
}

export default QustionListYoutubeInput;