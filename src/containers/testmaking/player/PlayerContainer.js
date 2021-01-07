import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Wave from '../../../components/testmaking/questionlist/player/Wave';


const PlayerContainer = ({questionUrl,i,isLoading,isPlaying,player,totalTime,currentTime,playHandler,backClick}) => {
  const [mouseDragX, setMouseDragX] = useState(false);
  const [activeButton, setactiveButton] = useState(false);
  const [containerWidth,setContainerWidth] = useState(307);


  const dragHandler = (e) => {
    const nowFraction = e.offsetX / containerWidth;
    player.seekTo(player.getDuration() * nowFraction, true);
  };

  const drag = () => {
    document.addEventListener("mousemove", dragHandler);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", dragHandler);
      setMouseDragX(false);
    });
  };


  const clickActiveButtonOver = () => {
     setactiveButton(true)
  }
  const clickActiveButtonOut = () => {
    setactiveButton(false)
}
  useEffect(() => {
        const a = document.getElementsByTagName('iframe')[i];
        a.src = `https://www.youtube.com/embed/${questionUrl}?autoplay=0&controls=0&fs=0&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=1`;
  },[questionUrl,i]);


  return (
    <TotalWrap>

    <ControlsWrap>
      <ButtonCover>
          <Button onClick={playHandler} >
          {isLoading ? (
              isPlaying ? (
              <i className="xi-pause" />
              ) : (
              <i className="xi-play" />
              )
          ) : (
              <i className="xi-spinner-3 xi-spin" />
          )}
          </Button>
      </ButtonCover>
      <BackButtonCover>
          <MoveButton onClick={backClick}>
          {isLoading ? (              
              <i className="xi-step-backward" />
          ) : (
              <i className="xi-spinner-3 xi-spin" />
          )}
          </MoveButton>
      </BackButtonCover>


      <TimeWrap>
      {player ? `${currentTime}` : "00:00"}
      </TimeWrap>
      <WaveCenter>
          <WaveWrap>
          <Wave FillColor={player ? String(player?.getCurrentTime() / player?.getDuration()* 10 )  : '0'}/>
                  <div style={{position:'absolute'}}>
                          <LoadBar style={ {
                              width: mouseDragX
                              ? mouseDragX
                              : player ? String(
                                  (player?.getCurrentTime() / player?.getDuration()) * containerWidth
                                  ) + "px" : '0px',

                              border:
                              activeButton || mouseDragX
                                  ? "0px solid #db021f"
                                  : "0px solid #db021f",
                          }} >
                              <DragButton
                              style={{ opacity: isLoading ? activeButton || mouseDragX ? "1" : "1" :"0" }}
                              onMouseOver={clickActiveButtonOver}
                              onMouseOut={clickActiveButtonOut}
                              onMouseDown={drag}
                              isLoading = {isLoading}
                              />
                          </LoadBar>
                  </div>

          </WaveWrap>
      </WaveCenter>
      
    </ControlsWrap>
  </TotalWrap>
  );
};
export default PlayerContainer;


const ButtonCover = styled.div`
  width:2rem;
  height:2rem;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius:50%;
  margin-left:1.9rem;
  margin-right:1rem;
  display:flex;
  justify-content:center;
  align-items:center;

  @media only screen and (max-width: 1024px) {
      margin-left:0rem;
      margin-right:1.4rem;
      width:2.6rem;
      height:2.6rem;
  }
    @media only screen and (max-width: 768px) {
      margin-left:0.8rem;
      margin-right:0.9rem;
      width:2.2rem;
      height:2.2rem;
  }
`

const BackButtonCover = styled.div`
  width:2rem;
  height:2rem;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius:50%;
  margin-right:0.2rem;
  display:flex;
  justify-content:center;
  align-items:center;
  @media only screen and (max-width: 1024px) {
        margin-left:0;
        margin-right:2.2rem;
        width:2.6rem;
        height:2.6rem;
  }
  @media only screen and (max-width: 768px) {
      margin-right:0rem;
      width:2.2rem;
      height:2.2rem;

  }

`

const Button = styled.div`

  all: unset;
  font-size: 1.6rem;
  color: #ffffff;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const MoveButton = styled.div`

   all: unset;
   font-size: 1.6rem;
  color: #ffffff;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const ControlsWrap = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  color: #909090;
  font-size: 12px;
`;

const LoadBar = styled.div`
  position: relative;
  z-index: 100;
  height: 1px;
  top: 1px;
`

const DragButton = styled.div`
  position: absolute;
  transform: translate(70%, -50%);
  right: 0px;
  top: 0px;
  width: 8px;
  height: 8px;
  background-color:${props=> props.isLoading ? "#60FFDA" :""} ;
  border-radius: 50%;
  transition: all 0.1s ease-in;
  border: 1px solid white;
`;

const TimeWrap = styled.div`
    width: 5rem;
    height: 2rem;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.4rem;
    margin-top:0.3rem;
    @media only screen and (max-width: 1024px) {
        margin-right:1.8rem;
  }
    @media only screen and (max-width: 768px) {
        width: 4.5rem;
        font-size:1.2rem;
        margin-top:0.4rem;
        margin-right:0.4rem;



  }
`

const WaveWrap = styled.div`
    width:31.4rem;
    height:3.6rem;
    display:flex;
    align-items:center;
    position:relative;
`

const WaveCenter = styled.div`
    @media only screen and (max-width: 1024px) {
        width:31.4rem;
        height:3.6rem;
        display:flex;
        align-items:center;
        justify-content:center  
    }
    @media only screen and (max-width: 768px) {
        width:31.4rem;
        height:3.6rem;
    }

`

const TotalWrap = styled.div`
  height: 28px;
  display: flex;
  align-items: center;

`;

