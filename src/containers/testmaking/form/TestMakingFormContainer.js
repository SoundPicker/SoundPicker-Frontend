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

const TestMakingFormContainer = () => {
    const [questions,setQuestions] = useState([{
        questionNumber : 1,
        questionYoutubeURL : "",
        questionStartsfrom : "",
        hint : "",
        answer: "",
        answerYoutubeURL: ""
    }]);

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

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://www.youtube.com/iframe_api';
    //     const firstScriptTag = document.getElementsByTagName('script')[0];
    //       firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
        
    //     window.onYouTubeIframeAPIReady = () => {
    //       console.error(questionUrl);
    //       // eslint-disable-next-line react-hooks/exhaustive-deps
    //       player0 = new window.YT.Player(`player0`, {
    //         height: "1000",
    //         width: "1000",
    //         videoId: questionUrl,
    //         host: 'https://www.youtube.com',
    //         playerVars: {
    //           autoplay: 0,
    //           controls: 0,
    //           fs: 0,
    //           showinfo:0,
    //           enablejsapi: 1,
    //           origin:'http://localhost:3000'
    //         },
    //         events: {
    //           onReady: onReadyAPI,
    //           onStateChange: playerState,
    //         },
    //       });
    //       console.error('player0', player);
    //     // if (firstScriptTag.id === 'www-widgetapi-script') window.onYouTubeIframeAPIReady();
    //     setTimeout(() => {
    //       const a = document.getElementsByTagName('iframe')[0];
    //       a.src = 'https://www.youtube.com/embed/F9Ex1ESEWN4';
    //     }, 1000)
    //     }
    //     return () => {
    //       // script.remove();
    //       clearInterval(checkCurrentTime);
    //     };
        
    //   }, []);
    

    return(
        <form>
        <div id='player0'></div>
        <div id='player1'></div>

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
                                <PlayerContainer questionUrl={questions[i].questionYoutubeURL} player={player0}/>
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