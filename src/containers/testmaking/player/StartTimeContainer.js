import { useEffect, useState } from "react";
import StartTime from "../../../components/testmaking/questionlist/player/StartTime"







const StartTimeContainer = ({questionStartsfrom,changeStartTime,totalTime}) => {

    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    const onChangeMinutes = e => {
        const minute = e.target.value;
        if(!minute){
            setMinutes(0);
        }else{
            setMinutes(minute);
        }
    }

    const onChangeSeconds = e => {
        const second = e.target.value;

        if(!second){
            setSeconds(0);

        }else{
            if(second >= 60){
                if(totalTime> parseInt(minutes*60) + parseInt(second)){
                    setMinutes(minutes+1);
                    setSeconds(second%60);
                }else{
                    setSeconds(second%60);
                }

            }else{
                setSeconds(second);
            }
        }
    }
    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
         object.target.value = object.target.value.slice(0, object.target.maxLength)
          }
        }
    
    useEffect(()=>{
        if (questionStartsfrom){
            setMinutes( parseInt(questionStartsfrom/60));
            setSeconds( parseInt(questionStartsfrom%60));
        }
    },[])

    useEffect(()=>{

        const inputTime =  parseInt(minutes*60) + parseInt(seconds);
        if(parseInt(totalTime-4) >= inputTime){
            changeStartTime(inputTime);
        }else if(totalTime===170){
            changeStartTime(inputTime);
        }else{
            setMinutes(String(minutes).slice(0,1))
        }
    },[minutes,seconds])

    return <StartTime questionStartsfrom={questionStartsfrom} maxLengthCheck={maxLengthCheck} onChangeMinutes={onChangeMinutes} onChangeSeconds={onChangeSeconds}/>
}

export default StartTimeContainer;