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
import QuestionLustPlusButton from "../../../components/testmaking/questionlist/QuestionListPlusButton";
import QuestionSaveButton from "../../../components/testmaking/questionlist/QuestionListSaveButton";
import React,{useEffect, useState} from 'react';
import StartTimeContainer from "../player/StartTimeContainer";
import axios from "axios";
import LoadingComponent from "../../../components/common/LoadingComponent";
import TextComponent from "../../../components/common/TextComponent";

export let player0;
export let player1;
export let player2;
export let player3;
export let player4;
export let player5;
export let player6;
export let player7;
export let player8;
export let player9;
export let send=true ;
export let viewLoadingCount = 0;
const TestMakingFormContainer = ({history}) => {
  const jwt = window.localStorage.getItem('jwt');
    let checkCurrentTime0;
    let checkCurrentTime1;
    let checkCurrentTime2;
    let checkCurrentTime3;
    let checkCurrentTime4;
    let checkCurrentTime5;
    let checkCurrentTime6;
    let checkCurrentTime7;
    let checkCurrentTime8;
    let checkCurrentTime9;

    const [timer, setTimer] = useState(0);
    const [testTitle,setTestTitle] = useState('');
    const [testDescription,setTestDescription] = useState('');
    const [testCategory,setTestCategory] = useState('');

    const [questions,setQuestions] = useState([{
        questionNumber : 1,
        questionYoutubeURL : "",
        questionStartsfrom : "",
        hint : "",
        answer: "",
        answerYoutubeURL: "",
    }]);
    const [links,setLinks] = useState([{
      questionNumber : 1,
      questionYoutubeURL : "",
      answerYoutubeURL: "",
    }]);

    const [viewLoading,setViewLoading] = useState(false);
    const [serverLoading,setServerLoading] = useState(true);

    const [isPlaying0, setPlaying0] = useState(false);
    const [isLoading0, setLoading0] = useState(false);
    const [currentTime0, setCurrentTime0] = useState("00:00");
    const [totalTime0, setTotalTime0] = useState("00:00");

    const [isPlaying1, setPlaying1] = useState(false);
    const [isLoading1, setLoading1] = useState(false);
    const [currentTime1, setCurrentTime1] = useState("00:00");
    const [totalTime1, setTotalTime1] = useState("00:00");

    const [isPlaying2, setPlaying2] = useState(false);
    const [isLoading2, setLoading2] = useState(false);
    const [currentTime2, setCurrentTime2] = useState("00:00");
    const [totalTime2, setTotalTime2] = useState("00:00");

    const [isPlaying3, setPlaying3] = useState(false);
    const [isLoading3, setLoading3] = useState(false);
    const [currentTime3, setCurrentTime3] = useState("00:00");
    const [totalTime3, setTotalTime3] = useState("00:00");

    const [isPlaying4, setPlaying4] = useState(false);
    const [isLoading4, setLoading4] = useState(false);
    const [currentTime4, setCurrentTime4] = useState("00:00");
    const [totalTime4, setTotalTime4] = useState("00:00");

    const [isPlaying5, setPlaying5] = useState(false);
    const [isLoading5, setLoading5] = useState(false);
    const [currentTime5, setCurrentTime5] = useState("00:00");
    const [totalTime5, setTotalTime5] = useState("00:00");

    const [isPlaying6, setPlaying6] = useState(false);
    const [isLoading6, setLoading6] = useState(false);
    const [currentTime6, setCurrentTime6] = useState("00:00");
    const [totalTime6, setTotalTime6] = useState("00:00");

    const [isPlaying7, setPlaying7] = useState(false);
    const [isLoading7, setLoading7] = useState(false);
    const [currentTime7, setCurrentTime7] = useState("00:00");
    const [totalTime7, setTotalTime7] = useState("00:00");

    const [isPlaying8, setPlaying8] = useState(false);
    const [isLoading8, setLoading8] = useState(false);
    const [currentTime8, setCurrentTime8] = useState("00:00");
    const [totalTime8, setTotalTime8] = useState("00:00");

    const [isPlaying9, setPlaying9] = useState(false);
    const [isLoading9, setLoading9] = useState(false);
    const [currentTime9, setCurrentTime9] = useState("00:00");
    const [totalTime9, setTotalTime9] = useState("00:00");

    const changeTitle = e => {
      const {target: {value}} = e;
      setTestTitle(value);
    }
    const changeDescription = e => {
      const {target: {value}} = e;
      setTestDescription(value);
    }

    const changeCategory = e => {
      setTestCategory(e);
    }

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

    const changeStartTime = questionNumber => e => {
        const tempsQustios = questions.map(question => {
            if( question.questionNumber === questionNumber+1 ){
                question["questionStartsfrom"] = e;
            }

            return question;

        });

        setQuestions(tempsQustios);
    }

    

    const addQuestions = () => {
        if(questions.length === 10) return
        let data = {
            questionNumber : questions.length +1,
            questionYoutubeURL : "",
            questionStartsfrom : "",
            hint : "",
            answer: "",
            answerYoutubeURL: ""

        };

        setQuestions([...questions, data]);
        let data2 = {
          questionNumber : questions.length +1,
          questionYoutubeURL : "",
          answerYoutubeURL: ""
        }
        setLinks([...links,data2]);
    }

    const deleteQuestions = questionNumber => () => {
        let tempQuestions = questions.filter(question => {
            return question.questionNumber !== questionNumber + 1;
        })
        let i = 1;
        const reTempQuestions = tempQuestions.map(question => {
            question.questionNumber = i;
            i++;
            return question;
        })

        setQuestions(reTempQuestions);
        let tempLinks = links.filter(link => {
          return link.questionNumber !== questionNumber + 1;
      })
      let l = 1;
      const reTempLinks = tempLinks.map(link => {
          link.questionNumber = l;
          l++;
          return link;
      })

      setLinks(reTempLinks);
    }

    const getYoutubeId = questionNumber => e => {
        const { target: { value } } = e;
        const { target: { name } } = e;
        if(value)  {
            const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            const matchs = value.match(regExp);
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
                const tempsLinks = links.map(link => {
                  if( link.questionNumber === questionNumber+1 ){
                    link[name] = value;
                  }
      
                  return link;
      
              });  
              setLinks(tempsLinks);
            }
        }else{
          const tempsQustios = questions.map(question => {
            if( question.questionNumber === questionNumber+1 ){
                question[name] = "";
            }

            return question;

        }
        
        );  
        const tempsLinks = links.map(link => {
          if( link.questionNumber === questionNumber+1 ){
            link[name] = "";
          }

          return link;

      });  
      setLinks(tempsLinks);
        setQuestions(tempsQustios);
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
  const playerState4 = (e) => {
    if (e.data === 1) {
      setPlaying4(true);
    } else if (e.data === 2) {
      setPlaying4(false);
    }
  };
  const playerState5 = (e) => {
    if (e.data === 1) {
      setPlaying5(true);
    } else if (e.data === 2) {
      setPlaying5(false);
    }
  };
  const playerState6 = (e) => {
    if (e.data === 1) {
      setPlaying6(true);
    } else if (e.data === 2) {
      setPlaying6(false);
    }
  };
  const playerState7 = (e) => {
    if (e.data === 1) {
      setPlaying7(true);
    } else if (e.data === 2) {
      setPlaying7(false);
    }
  };
  const playerState8 = (e) => {
    if (e.data === 1) {
      setPlaying8(true);
    } else if (e.data === 2) {
      setPlaying8(false);
    }
  };
  const playerState9 = (e) => {
    if (e.data === 1) {
      setPlaying9(true);
    } else if (e.data === 2) {
      setPlaying9(false);
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
  const onSubmitHandler = (e) =>{
    e.preventDefault();

    const variable ={
        title: testTitle,
        description: testDescription,
        CategoryId: testCategory,
        questions: questions,

    }
    const config = {
      headers : {"jwt":jwt}
  }
  setServerLoading(false);
  if(testTitle.length !== 0 && testDescription.length !== 0 && testCategory.length !== 0){
    for(let i = 0; i < questions.length; i++ ){
      if(questions[i].questionYoutubeURL.length === 0 ||questions[i].questionStartsfrom.length === 0 ||questions[i].hint.length === 0 ||
      questions[i].answer.length === 0 ||questions[i].answerYoutubeURL.length === 0){
        send = false;
      }
    }
    if(send===true){
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(async () => {
        try {
          axios.post('http://3.35.187.65:3000/test',variable,config)
        .then(response=> {
            if(response.data.success){
              history.push("/");
            }
        })
        } catch (e) {
          setServerLoading(true);
        }
      }, 5000);
      setTimer(newTimer);
      
    }else{
      setServerLoading(true);
    }

  }else{
    setServerLoading(true);
  }

}

  const setTime0 = () => {
    setCurrentTime0(transTime(player0.getCurrentTime().toFixed()));
  };
  const setTime1 = () => {
    setCurrentTime1(transTime(player1.getCurrentTime().toFixed()));
  };
  const setTime2 = () => {
    setCurrentTime2(transTime(player2.getCurrentTime().toFixed()));
  };
  const setTime3 = () => {
    setCurrentTime3(transTime(player3.getCurrentTime().toFixed()));
  };
  const setTime4 = () => {
    setCurrentTime4(transTime(player4.getCurrentTime().toFixed()));
  };
  const setTime5 = () => {
    setCurrentTime5(transTime(player5.getCurrentTime().toFixed()));
  };
  const setTime6 = () => {
    setCurrentTime6(transTime(player6.getCurrentTime().toFixed()));
  };
  const setTime7 = () => {
    setCurrentTime7(transTime(player7.getCurrentTime().toFixed()));
  };
  const setTime8 = () => {
    setCurrentTime8(transTime(player8.getCurrentTime().toFixed()));
  };
  const setTime9 = () => {
    setCurrentTime9(transTime(player9.getCurrentTime().toFixed()));
  };
  const onReadyAPI0 = () => {
      setLoading0(true);
      setPlaying0(false);
      checkCurrentTime0 = setInterval(setTime0, 1000);
      setTotalTime0(player0.getDuration());

  };
  const onReadyAPI1 = () => {
    setLoading1(true);
    setPlaying1(false);
    checkCurrentTime1 = setInterval(setTime1, 1000);
    setTotalTime1(player1.getDuration());
  };
  const onReadyAPI2 = () => {
    setLoading2(true);
    setPlaying2(false);
    checkCurrentTime2 = setInterval(setTime2, 1000);
    setTotalTime2(player2.getDuration());
  };
  const onReadyAPI3 = () => {
    setLoading3(true);
    setPlaying3(false);
    checkCurrentTime3 = setInterval(setTime3, 1000);
    setTotalTime3(player3.getDuration());
  };
  const onReadyAPI4 = () => {
    setLoading4(true);
    setPlaying4(false);
    checkCurrentTime4 = setInterval(setTime4, 1000);
    setTotalTime4(player4.getDuration());
  };
  const onReadyAPI5 = () => {
    setLoading5(true);
    setPlaying5(false);
    checkCurrentTime5 = setInterval(setTime5, 1000);
    setTotalTime5(player5.getDuration());
  };
  const onReadyAPI6 = () => {
    setLoading6(true);
    setPlaying6(false);
    checkCurrentTime6 = setInterval(setTime6, 1000);
    setTotalTime6(player6.getDuration());
  };
  const onReadyAPI7 = () => {
    setLoading7(true);
    setPlaying7(false);
    checkCurrentTime7 = setInterval(setTime7, 1000);
    setTotalTime7(player7.getDuration());
  };
  const onReadyAPI8 = () => {
    setLoading8(true);
    setPlaying8(false);
    checkCurrentTime8 = setInterval(setTime8, 1000);
    setTotalTime8(player8.getDuration());
  };
  const onReadyAPI9 = () => {
    setLoading9(true);
    setPlaying9(false);
    checkCurrentTime9 = setInterval(setTime9, 1000);
    setTotalTime9(player9.getDuration());
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
    const playHandler3 = () => {
        setPlaying3(!isPlaying3);
    } 
    const playHandler4 = () => {
        setPlaying4(!isPlaying4);
    } 
    const playHandler5 = () => {
        setPlaying5(!isPlaying5);
    } 
    const playHandler6 = () => {
        setPlaying6(!isPlaying6);
    } 
    const playHandler7 = () => {
        setPlaying7(!isPlaying7);
    } 
    const playHandler8 = () => {
        setPlaying8(!isPlaying8);
    } 
    const playHandler9 = () => {
        setPlaying9(!isPlaying9);
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
    const backClick3 = () => {
        if(isLoading3)player3.seekTo(player3.getCurrentTime() - 10, true)

    }
    const backClick4 = () => {
        if(isLoading4)player4.seekTo(player4.getCurrentTime() - 10, true)

    }
    const backClick5 = () => {
        if(isLoading5)player5.seekTo(player5.getCurrentTime() - 10, true)

    }
    const backClick6 = () => {
        if(isLoading6)player6.seekTo(player6.getCurrentTime() - 10, true)

    }
    const backClick7 = () => {
        if(isLoading7)player7.seekTo(player7.getCurrentTime() - 10, true)

    }
    const backClick8 = () => {
        if(isLoading8)player8.seekTo(player8.getCurrentTime() - 10, true)

    }
    const backClick9 = () => {
        if(isLoading9)player9.seekTo(player9.getCurrentTime() - 10, true)

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
            videoId: "7y7roXhpK-8",
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
            videoId: "7y7roXhpK-8",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3000'
            },
            events: {
              onReady: onReadyAPI1,
              onStateChange: playerState1,
            },
          });
          player2 = new window.YT.Player(`player2`, {
            height: "0",
            width: "0",
            videoId: "7y7roXhpK-8",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3000'
            },
            events: {
              onReady: onReadyAPI2,
              onStateChange: playerState2,
            },
          });
          player3 = new window.YT.Player(`player3`, {
            height: "0",
            width: "0",
            videoId: "7y7roXhpK-8",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3000'
            },
            events: {
              onReady: onReadyAPI3,
              onStateChange: playerState3,
            },
          });
          player4 = new window.YT.Player(`player4`, {
            height: "0",
            width: "0",
            videoId: "7y7roXhpK-8",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3000'
            },
            events: {
              onReady: onReadyAPI4,
              onStateChange: playerState4,
            },
          });
          player5 = new window.YT.Player(`player5`, {
            height: "0",
            width: "0",
            videoId: "7y7roXhpK-8",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3000'
            },
            events: {
              onReady: onReadyAPI5,
              onStateChange: playerState5,
            },
          });
          player6 = new window.YT.Player(`player6`, {
            height: "0",
            width: "0",
            videoId: "7y7roXhpK-8",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3000'
            },
            events: {
              onReady: onReadyAPI6,
              onStateChange: playerState6,
            },
          });
          player7 = new window.YT.Player(`player7`, {
            height: "0",
            width: "0",
            videoId: "7y7roXhpK-8",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3000'
            },
            events: {
              onReady: onReadyAPI7,
              onStateChange: playerState7,
            },
          });
          player8 = new window.YT.Player(`player8`, {
            height: "0",
            width: "0",
            videoId: "7y7roXhpK-8",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3000'
            },
            events: {
              onReady: onReadyAPI8,
              onStateChange: playerState8,
            },
          });
          player9 = new window.YT.Player(`player9`, {
            height: "0",
            width: "0",
            videoId: "7y7roXhpK-8",
            host: 'https://www.youtube.com',
            playerVars: {
              autoplay: 0,
              controls: 0,
              fs: 0,
              showinfo:0,
              enablejsapi: 1,
              origin:'http://localhost:3000'
            },
            events: {
              onReady: onReadyAPI9,
              onStateChange: playerState9,
            },
          });

        }
        return () => {
          clearInterval(checkCurrentTime0);
          clearInterval(checkCurrentTime1);
          clearInterval(checkCurrentTime2);
          clearInterval(checkCurrentTime3);
          clearInterval(checkCurrentTime4);
          clearInterval(checkCurrentTime5);
          clearInterval(checkCurrentTime6);
          clearInterval(checkCurrentTime7);
          clearInterval(checkCurrentTime8);
          clearInterval(checkCurrentTime9);

        };
        
      }, []);

      useEffect(()=>{
        if(viewLoadingCount===0){
          if(isLoading0&&
            isLoading1&&
            isLoading2&&
            isLoading3&&
            isLoading4&&
            isLoading5&&
            isLoading6&&
            isLoading7&&
            isLoading8&&
            isLoading9){
              setViewLoading(true)
              viewLoadingCount++;   
              setLoading0(false);
              setLoading1(false);
              setLoading2(false);
              setLoading3(false);
              setLoading4(false);
              setLoading5(false);
              setLoading6(false);
              setLoading7(false);
              setLoading8(false);
              setLoading9(false);

              }
            }
        },[isLoading0, isLoading1, isLoading2, isLoading3, isLoading4, isLoading5, isLoading6, isLoading7, isLoading8, isLoading9]);


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

      if (isLoading3) {
        if (isPlaying3) {
            player3?.playVideo();
          } else {
           player3?.pauseVideo();
      }
    }
    if (isLoading4) {
        if (isPlaying4) {
            player4?.playVideo();
          } else {
           player4?.pauseVideo();
      }
    }
    if (isLoading5) {
        if (isPlaying5) {
            player5?.playVideo();
          } else {
           player5?.pauseVideo();
      }
    }
    if (isLoading6) {
        if (isPlaying6) {
            player6?.playVideo();
          } else {
           player6?.pauseVideo();
      }
    }
    if (isLoading7) {
        if (isPlaying7) {
            player7?.playVideo();
          } else {
           player7?.pauseVideo();
      }
    }
    if (isLoading8) {
        if (isPlaying8) {
            player8?.playVideo();
          } else {
           player8?.pauseVideo();
      }
    }
    if (isLoading9) {
        if (isPlaying9) {
            player9?.playVideo();
          } else {
           player9?.pauseVideo();
      }
    }

    return(
      !viewLoading ?  
      <div style={{display:"flex", justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
         <LoadingComponent/>
         <BlankTop DesktopMargin='3.6' TabletMargin='2' MobileMargin='2.6'/>
         <TextComponent title={"로딩중..."} DesktopLength="14" TabletLength="14" MobileLength='14'/>
      </div>
       : 
      
      <form method='post' onSubmit={onSubmitHandler} >
            <TopInner>
                <table></table>
                <BlankTop DesktopMargin='3.6' TabletMargin='2' MobileMargin='2.6'/>
                <TopInputWrap>
                    <TopInputText text='제목'/>
                    <TopInput inputName='title' inputPlaceholder='최대 25자' inputMaxLength='25' changeHandler={changeTitle} value={testTitle} />
                </TopInputWrap>
                <BlankTop DesktopMargin='3.6' TabletMargin='3.4' MobileMargin='2.6'/>
                <TopInputWrap>
                    <TopInputText text='내용'/>
                    <TopInput inputName='description' inputPlaceholder='최대 45자' inputMaxLength='45' changeHandler={changeDescription} value={testDescription}/>
                </TopInputWrap>
                <BlankTop DesktopMargin='3.6' TabletMargin='3.7' MobileMargin='2.6'/>
                <TopInputWrap>
                    <TopInputText text='카테고리'/>
                    <InputCategoryContainer inputName='CategoryId' inputPlaceholder='오른쪽 화살표를 눌러 카테고리를 골라주세요' changeCategory={changeCategory} testCategory={testCategory}/>
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
                                <QuestionListInputText text={i!==9?"Qustion00"+(i+1):"Qustion010"} />
                                <QuestionListInput inputName='answer' inputMaxLength="20" inputPlaceholder='정답을 적어주세요 (최대 20자)'  changeText={changeText(i)} value={d.answer}/>
                            </QuestionListInputWrap>
                            <BlankTop DesktopMargin='1.9' TabletMargin='3.9' MobileMargin='2.6'/>
                            <QuestionListHintWrap>
                                <QuestionListInputText text='Hint' />
                                <QuestionListInput inputName='hint' inputMaxLength="10" inputPlaceholder='힌트를 적어주세요 (최대 10자)'  changeText={changeText(i)} value={d.hint} />
                            </QuestionListHintWrap>
                        </QuestionListLeftWrap>

                        <QuestionListRightWrap>

                            <BlankTop DesktopMargin='1.9' TabletMargin='3.9' MobileMargin='2.6'/>
                            <QuestionListInputWrap>
                                <QuestionListInputText text='Youtube Link' />
                                <QuestionListYoutubeInput inputName='questionYoutubeURL' inputPlaceholder='1초/3초간 나올 음악 주소를 넣어주세요'  getYoutubeId={getYoutubeId(i)} videoId={questions[i].questionYoutubeURL} questionURL={links[i].questionYoutubeURL} />
                            </QuestionListInputWrap>
                            <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='1.6'/>

                           {questions[i].questionYoutubeURL!==""||questions[i].questionYoutubeURL ? 
                            <PlayerWrap>
                               <PlayerContainer questionUrl={questions[i].questionYoutubeURL} 
                                                        player={
                                                            i===0?player0:
                                                            i===1?player1:
                                                            i===2?player2:
                                                            i===3?player3:
                                                            i===4?player4:
                                                            i===5?player5:
                                                            i===6?player6:
                                                            i===7?player7:
                                                            i===8?player8:
                                                            player9

                                                        } 
                                                        i={i} 
                                                        isPlaying={
                                                            i===0?isPlaying0:
                                                            i===1?isPlaying1:
                                                            i===2?isPlaying2:
                                                            i===3?isPlaying3:
                                                            i===4?isPlaying4:
                                                            i===5?isPlaying5:
                                                            i===6?isPlaying6:
                                                            i===7?isPlaying7:
                                                            i===8?isPlaying8:
                                                                  isPlaying9
                                                            }
                                                        isLoading={
                                                            i===0?isLoading0:
                                                            i===1?isLoading1:
                                                            i===2?isLoading2:
                                                            i===3?isLoading3:
                                                            i===4?isLoading4:
                                                            i===5?isLoading5:
                                                            i===6?isLoading6:
                                                            i===7?isLoading7:
                                                            i===8?isLoading8:
                                                            isLoading9

                                                        }
                                                        currentTime={
                                                            i===0?currentTime0:
                                                            i===1?currentTime1:
                                                            i===2?currentTime2:
                                                            i===3?currentTime3:
                                                            i===4?currentTime4:
                                                            i===5?currentTime5:
                                                            i===6?currentTime6:
                                                            i===7?currentTime7:
                                                            i===8?currentTime8:
                                                            currentTime9

                                                        }
                                                        totalTime={
                                                            i===0?totalTime0:
                                                            i===1?totalTime1:
                                                            i===2?totalTime2:
                                                            i===3?totalTime3:
                                                            i===4?totalTime4:
                                                            i===5?totalTime5:
                                                            i===6?totalTime6:
                                                            i===7?totalTime7:
                                                            i===8?totalTime8:
                                                            totalTime9

                                                        }
                                                        playHandler={
                                                            i===0?playHandler0:
                                                            i===1?playHandler1:
                                                            i===2?playHandler2:
                                                            i===3?playHandler3:
                                                            i===4?playHandler4:
                                                            i===5?playHandler5:
                                                            i===6?playHandler6:
                                                            i===7?playHandler7:
                                                            i===8?playHandler8:
                                                            playHandler9
                                                        }
                                                        backClick={
                                                            i===0?backClick0:
                                                            i===1?backClick1:
                                                            i===2?backClick2:
                                                            i===3?backClick3:
                                                            i===4?backClick4:
                                                            i===5?backClick5:
                                                            i===6?backClick6:
                                                            i===7?backClick7:
                                                            i===8?backClick8:
                                                            backClick9

                                                        }
                                                        /> 
                                                            
                                                      
                                 <StartTimeContainer  changeStartTime={changeStartTime(i)} 
                                                      totalTime={
                                                            i===0?totalTime0:
                                                            i===1?totalTime1:
                                                            i===2?totalTime2:
                                                            i===3?totalTime3:
                                                            i===4?totalTime4:
                                                            i===5?totalTime5:
                                                            i===6?totalTime6:
                                                            i===7?totalTime7:
                                                            i===8?totalTime8:
                                                            totalTime9 }
                                                      questionStartsfrom={
                                                         questions[i].questionStartsfrom
                                                            }/>
                            </PlayerWrap>
                            : ""}

                            <BlankTop DesktopMargin='1.9' TabletMargin='2.4' MobileMargin='1.7'/>
                            <QuestionListInputWrap>
                                <QuestionListInputText text='Youtube Link' />
                                <QuestionListYoutubeInput inputName='answerYoutubeURL' inputPlaceholder='정답 공개 후 보여줄 영상을 넣어주세요'  getYoutubeId={getYoutubeId(i)} videoId={questions[i].answerYoutubeURL} questionURL={links[i].answerYoutubeURL}/>
                            </QuestionListInputWrap>

                        </QuestionListRightWrap>
                    </InputsWrap>
                </div>
                ))}

                <BlankTop DesktopMargin='4.7' TabletMargin='5.2' MobileMargin='4.7'/>
                <QuestionLustPlusButton addQuestions={addQuestions} />
                <BlankTop DesktopMargin='3.6' TabletMargin='6' MobileMargin='3.5'/>

                { serverLoading? 
                    <QuestionSaveButton onSubmitHandler={onSubmitHandler} /> 
                  :
                  <div style={{display:"flex", justifyContent:"center",alignItems:'center'}}>
                    <LoadingComponent/>
                  </div>

                }                
                <BlankTop DesktopMargin='3.6' TabletMargin='9.1' MobileMargin='3.5'/>
                <table></table>
            </QuestionListInner>     

               
            )}

        </form>
      
    )

}

export default TestMakingFormContainer;