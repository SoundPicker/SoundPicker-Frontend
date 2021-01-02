import React, { useState, useEffect } from "react";
import Player from "../../../components/testmaking/questionlist/player/Player";
export let player;


const PlayerContainer = () => {
  const [isPlaying, setPlaying] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalTime, setTotalTime] = useState("0:00");
  const [mouseDragX, setMouseDragX] = useState(false);
  const [activeButton, setactiveButton] = useState(false);
  const [containerWidth,setContainerWidth] = useState(307);
  let checkCurrentTime;

  const playerState = (e) => {
    console.log(e)
    console.log(e.data);
    console.log(isLoading)
    if (e.data === 1) {
      setPlaying(true);
    } else if (e.data === 2) {
      setPlaying(false);
    }
  };

  const transTime = (seconds) => {
    if (!seconds) {
      console.log(seconds);
      return;
    }
    const hour = parseInt(seconds / 3600);
    const min = parseInt((seconds % 3600) / 60);
    const sec = seconds % 60;

    return `${hour > 0 ? String(hour) + ":" : ""} ${min}:${
      sec < 10 ? "0" + String(sec) : sec
    }`;
  };

  const setTime = () => {
    setCurrentTime(transTime(player.getCurrentTime().toFixed()));
  };

  const onReadyAPI = () => {
    setLoading(true);
    setPlaying(false);
    checkCurrentTime = setInterval(setTime, 1000);
    setTotalTime(() => transTime(player.getDuration()));
  };

  const dragHandler = (e) => {
    console.log(e)
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

  const playHandler = () => {
    setPlaying(!isPlaying);
  } 
  
  const backClick = () => {
    player.seekTo(player.getCurrentTime() - 10, true)
  }
  const clickActiveButtonOver = () => {
     setactiveButton(true)
  }
  const clickActiveButtonOut = () => {
    setactiveButton(false)
}
  useEffect(() => {
    if (window.YT) {
      console.log(window.YT);
      window.onYouTubeIframeAPIReady = () => {
        player = new window.YT.Player("player", {
          height: "0",
          width: "0",
          videoId: "e-ijD7kdTs4",
          playerVars: {
            autoplay: 1,
            controls: 0,
            fs: 0,
            enablejsapi: 1
          },
          events: {
            onReady: onReadyAPI,
            onStateChange: playerState,
          },
        });
      };
    } else {
      console.log("can not load player");
    }
    return () => {
      clearInterval(checkCurrentTime);
    };
  },[]);

  if (isLoading) {
    if (isPlaying) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }
  

  return (
    <Player 
        isPlaying={isPlaying}
        isLoading={isLoading}
        currentTime={currentTime}
        totalTime={totalTime}
        mouseDragX={mouseDragX}
        activeButton={activeButton}
        containerWidth={containerWidth}
        player={player}
        drag={drag}
        playHandler={playHandler}
        backClick={backClick}
        clickActiveButtonOver={clickActiveButtonOver}
        clickActiveButtonOut={clickActiveButtonOut}
            />
  );
};
export default React.memo(PlayerContainer);



