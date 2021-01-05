import BlankTop from "../../../components/common/BlankTop";
import TopInput from "../../../components/testmaking/Input/TopInput";
import TopInputText from "../../../components/testmaking/Input/TopInputText";
import TopInputWrap from "../../../components/testmaking/Input/TopInputWrap";
import QuestionListHeader from "../../../components/testmaking/questionlist/QuestionListHeader";
import QuestionListInner from "../../../components/testmaking/questionlist/QuestionListInner";
import QuestionListTitle from "../../../components/testmaking/questionlist/QuestionListTitle";
import TopInner from "../../../components/testmaking/TopInner";
import InputCategoryContainer from "../InputCategoryContainer";
import InputsWrap from '../../../components/testmaking/questionlist/input/InputsWrap';
import QuestionListLeftWrap from "../../../components/testmaking/questionlist/input/QustionListInputLeftWrap";
import QuestionListRightWrap from "../../../components/testmaking/questionlist/input/QustionListInputRightWrap";
import QuestionListInputWrap from "../../../components/testmaking/questionlist/input/QustionListInputWrap";
import QuestionListInputText from "../../../components/testmaking/questionlist/input/QustionListInputText";
import QuestionListInput from "../../../components/testmaking/questionlist/input/QustionListInput";
import QuestionListHintWrap from "../../../components/testmaking/questionlist/input/QustionListHintWrap";
import QuestionListYoutubeInput from "../../../components/testmaking/questionlist/input/QusitonListYoutubeInput";
import PlayerContainer from "../player/PlayerContainer";
import PlayerWrap from "../../../components/testmaking/questionlist/player/PlayerWrap";
import StartTime from "../../../components/testmaking/questionlist/player/StartTime";
import QuestionLustPlusButton from "../../../components/testmaking/questionlist/QuestionListPlusButton";
import QuestionSaveButton from "../../../components/testmaking/questionlist/QuestionListSaveButton";
import React,{useEffect, useState} from 'react';

export let player0;
export let player1;
export let player2;
export let player3;


const TestMakingFormContainer = () => {
    let checkCurrentTime0;
    let checkCurrentTime1;
    let checkCurrentTime2;
    let checkCurrentTime3;


    const [questions,setQuestions] = useState([{
        questionNumber : 1,
        questionYoutubeURL : "",
        questionStartsfrom : "",
        hint : "",
        answer: "",
        answerYoutubeURL: ""
    }]);

    const [isPlaying0, setPlaying0] = useState(false);
    const [isLoading0, setLoading0] = useState(false);
    const [currentTime0, setCurrentTime0] = useState("0:00");
    const [totalTime0, setTotalTime0] = useState("0:00");

    const [isPlaying1, setPlaying1] = useState(false);
    const [isLoading1, setLoading1] = useState(false);
    const [currentTime1, setCurrentTime1] = useState("0:00");
    const [totalTime1, setTotalTime1] = useState("0:00");

    const [isPlaying2, setPlaying2] = useState(false);
    const [isLoading2, setLoading2] = useState(false);
    const [currentTime2, setCurrentTime2] = useState("0:00");
    const [totalTime2, setTotalTime2] = useState("0:00");

    const [isPlaying3, setPlaying3] = useState(false);
    const [isLoading3, setLoading3] = useState(false);
    const [currentTime3, setCurrentTime3] = useState("0:00");
    const [totalTime3, setTotalTime3] = useState("0:00");


    const changeText = questionNumber => e => {
        const { target: { value } } = e;
        const { target: { name } } = e;
        const tempsQustios = questions.map(question => {
            if( question.questionNumber === questionNumber+1 ){
                question[name] = value;
            }

            return question;

        });

        setQuestions(tempsQustios);

    }
    const addQuestions = () => {
        let data = {
            questionNumber : questions.length +1,
            questionYoutubeURL : "",
            questionStartsfrom : "",
            hint : "",
            answer: "",
            answerYoutubeURL: ""

        };
        console.log(questions)
        setQuestions([...questions, data]);
    }

    const deleteQuestions = questionNumber => () => {
        let tempQuestions = questions.filter(question => {
            return question.questionNumber !== questionNumber + 1;
        })

        setQuestions(tempQuestions);
    }

    const getYoutubeId = questionNumber => e => {
        const { target: { value } } = e;
        const { target: { name } } = e;
        console.log(name,value)
        if(value)  {
            const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            const matchs = value.match(regExp);
            console.log(matchs);
            if(value!==''&&matchs&&matchs[7].length===11){

                const tempsQustios = questions.map(question => {
                    if( question.questionNumber === questionNumber+1 ){
                        question[name] = matchs[7];
                    }
        
                    return question;
        
                });  
                setQuestions(tempsQustios);
            }else{
                const tempsQustios = questions.map(question => {
                    if( question.questionNumber === questionNumber+1 ){
                        question[name] = "";
                    }
        
                    return question;
        
                });  
                setQuestions(tempsQustios);
            }
        }
        
    }

  const playerState0 = (e) => {
    if (e.data === 1) {
      setPlaying0(true);
    } else if (e.data === 2) {
      setPlaying0(false);
    }
  };
  const playerState1 = (e) => {
    if (e.data === 1) {
      setPlaying1(true);
    } else if (e.data === 2) {
      setPlaying1(false);
    }
  };
  const playerState2 = (e) => {
    if (e.data === 1) {
      setPlaying2(true);
    } else if (e.data === 2) {
      setPlaying2(false);
    }
  };
  const playerState3 = (e) => {
    if (e.data === 1) {
      setPlaying3(true);
    } else if (e.data === 2) {
      setPlaying3(false);
    }
  };

  const transTime = (seconds) => {
    if (!seconds) {      return;
    }
    const hour = parseInt(seconds / 3600);
    const min = parseInt((seconds % 3600) / 60);
    const sec = seconds % 60;

    return `${hour > 0 ? String(hour) + ":" : ""} ${min}:${
      sec < 10 ? "0" + String(sec) : sec
    }`;
  };

  const setTime0 = () => {
    setCurrentTime0(transTime(player0.getCurrentTime().toFixed()));
  };
  const setTime1 = () => {
    setCurrentTime1(transTime(player1.getCurrentTime().toFixed()));
  };
  const setTime2 = () => {
    setCurrentTime2(transTime(player2.getCurrentTime().toFixed()));
  };

  const onReadyAPI0 = () => {
    setLoading0(true);
    setPlaying0(false);
    checkCurrentTime0 = setInterval(setTime0, 1000);
    setTotalTime0(() => transTime(player0.getDuration()));
  };
  const onReadyAPI1 = () => {
    setLoading1(true);
    setPlaying1(false);
    checkCurrentTime1 = setInterval(setTime1, 1000);
    setTotalTime1(() => transTime(player1.getDuration()));
  };
  const onReadyAPI2 = () => {
    setLoading2(true);
    setPlaying2(false);
    checkCurrentTime2 = setInterval(setTime2, 1000);
    setTotalTime2(() => transTime(player2.getDuration()));
  };


  const playHandler0 = () => {
    setPlaying0(!isPlaying0);
  } 
  
  const playHandler1 = () => {
  setPlaying1(!isPlaying1);
} 
const playHandler2 = () => {
  setPlaying2(!isPlaying2);
} 

  const backClick0 = () => {
      if(isLoading0)player0.seekTo(player0.getCurrentTime() - 10, true)

  }
  const backClick1 = () => {
    if(isLoading1)player1.seekTo(player1.getCurrentTime() - 10, true)

}
const backClick2 = () => {
    if(isLoading2)player2.seekTo(player2.getCurrentTime() - 10, true)

}

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
        
        window.onYouTubeIframeAPIReady = () => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          player0 = new window.YT.Player(`player0`, {
            height: "0",
            width: "0",
            videoId: "xYMxzPqBU-s",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3001'
            },
            events: {
              onReady: onReadyAPI0,
              onStateChange: playerState0,
            },
          });
          player1 = new window.YT.Player(`player1`, {
            height: "0",
            width: "0",
            videoId: "xYMxzPqBU-s",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3001'
            },
            events: {
              onReady: onReadyAPI1,
              onStateChange: playerState1,
            },
          });
          player2 = new window.YT.Player(`player2`, {
            height: "0",
            width: "0",
            videoId: "xYMxzPqBU-s",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3001'
            },
            events: {
              onReady: onReadyAPI2,
              onStateChange: playerState2,
            },
          });

        }
        return () => {
          clearInterval(checkCurrentTime0);
          clearInterval(checkCurrentTime1);
          clearInterval(checkCurrentTime2);

        };
        
      }, []);


      if (isLoading0) {
        if (isPlaying0) {
          player0?.playVideo();
        } else {
          player0?.pauseVideo();
        }
      }

      if (isLoading1) {    
        if (isPlaying1) {
          player1?.playVideo();

        } else {
          player1?.pauseVideo();
        }
      }

      if (isLoading2) {
          if (isPlaying2) {
              player2?.playVideo();
            } else {
             player2?.pauseVideo();
        }
      }


    return(
        <form>
        <div id='player0'></div>
        <div id='player1'></div>
        <div id='player2'></div>


            <TopInner>
                <table></table>
                <BlankTop DesktopMargin='3.6' TabletMargin='2' MobileMargin='2.6'/>
                <TopInputWrap>
                    <TopInputText text='제목'/>
                    <TopInput inputName='title' inputPlaceholder='최대 20자' inputMaxLength='20' />
                </TopInputWrap>
                <BlankTop DesktopMargin='3.6' TabletMargin='3.4' MobileMargin='2.6'/>
                <TopInputWrap>
                    <TopInputText text='내용'/>
                    <TopInput inputName='description' inputPlaceholder='최대 40자' inputMaxLength='40'/>
                </TopInputWrap>
                <BlankTop DesktopMargin='3.6' TabletMargin='3.7' MobileMargin='2.6'/>
                <TopInputWrap>
                    <TopInputText text='카테고리'/>
                    <InputCategoryContainer inputName='CategoryId' inputPlaceholder='오른쪽 화살표를 눌러 카테고리를 골라주세요'/>
                </TopInputWrap>
            </TopInner>
            <BlankTop DesktopMargin='6.4' TabletMargin='8.7' MobileMargin ='6.2'/>
            <QuestionListTitle/>

            {questions.length !== 0 && (
            <QuestionListInner>
                {questions.map((d,i)=>(
                 <div key={i}>
                    <QuestionListHeader deleteQuestions={deleteQuestions(i)} i={i} />
                    <InputsWrap >
                        <QuestionListLeftWrap >
                            <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='2.6'/>
                            <QuestionListInputWrap>
                                <QuestionListInputText text={"Qustion00"+(i+1)} />
                                <QuestionListInput inputName='answer' inputPlaceholder='정답을 적어주세요'  changeText={changeText(i)} />
                            </QuestionListInputWrap>
                            <BlankTop DesktopMargin='1.9' TabletMargin='3.9' MobileMargin='2.6'/>
                            <QuestionListHintWrap>
                                <QuestionListInputText text='Hint' />
                                <QuestionListInput inputName='hint' inputPlaceholder='힌트를 자유롭게 적어주세요'  changeText={changeText(i)} />
                            </QuestionListHintWrap>
                        </QuestionListLeftWrap>

                        <QuestionListRightWrap>

                            <BlankTop DesktopMargin='1.9' TabletMargin='3.9' MobileMargin='2.6'/>
                            <QuestionListInputWrap>
                                <QuestionListInputText text='Youtube Link' />
                                <QuestionListYoutubeInput inputName='questionYoutubeURL' inputPlaceholder='1초/3초간 나올 음악 주소를 넣어주세요'  getYoutubeId={getYoutubeId(i)} />
                            </QuestionListInputWrap>
                            <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='1.6'/>

                           {questions[i].questionYoutubeURL ? 
                            <PlayerWrap>
                               {i===0? <PlayerContainer questionUrl={questions[i].questionYoutubeURL} 
                                                        player={player0} i={i} 
                                                        isPlaying={isPlaying0}
                                                        isLoading={isLoading0}
                                                        currentTime={currentTime0}
                                                        totalTime={totalTime0}
                                                        playHandler={playHandler0}
                                                        backClick={backClick0}/>: 
                                i===1? <PlayerContainer questionUrl={questions[i].questionYoutubeURL} 
                                                        player={player1} i={i} 
                                                        isPlaying={isPlaying1}
                                                        isLoading={isLoading1}
                                                        currentTime={currentTime1}
                                                        totalTime={totalTime1}
                                                        playHandler={playHandler1}
                                                        backClick={backClick1}/>:
                                i===2? <PlayerContainer questionUrl={questions[i].questionYoutubeURL} 
                                                        player={player1} i={i} 
                                                        isPlaying={isPlaying2}
                                                        isLoading={isLoading2}
                                                        currentTime={currentTime2}
                                                        totalTime={totalTime2}
                                                        playHandler={playHandler2}
                                                        backClick={backClick2}/>:""} 
                                <StartTime  changeText={changeText(i)}/>
                            </PlayerWrap>
                            : ""}

                            <BlankTop DesktopMargin='1.9' TabletMargin='2.4' MobileMargin='1.7'/>
                            <QuestionListInputWrap>
                                <QuestionListInputText text='Youtube Link' />
                                <QuestionListYoutubeInput inputName='answerYoutubeURL' inputPlaceholder='정답 공개 후 보여줄 영상을 넣어주세요'  changeText={getYoutubeId(i)} />
                            </QuestionListInputWrap>

                        </QuestionListRightWrap>
                    </InputsWrap>
                </div>
                ))}

                <BlankTop DesktopMargin='4.7' TabletMargin='5.2' MobileMargin='4.7'/>
                <QuestionLustPlusButton addQuestions={addQuestions} />
                <BlankTop DesktopMargin='3.6' TabletMargin='6' MobileMargin='3.5'/>
                <QuestionSaveButton />
                <BlankTop DesktopMargin='3.6' TabletMargin='9.1' MobileMargin='3.5'/>
                <table></table>
            </QuestionListInner>     

               
            )}

        </form>
    )

}

export default TestMakingFormContainer;