import { useEffect, useState } from "react";
import StartTime from "../../../components/testmaking/questionlist/player/StartTime"







const StartTimeContainer = ({changeStartTime,totalTime}) => {

    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);

    const onChangeMinutes = e => {
        const minute = e.target.value;
        console.log(minute)
        setMinutes(minute);
    }

    const onChangeSeconds = e => {
        const second = e.target.value;
        console.log(seconds)

        setSeconds(second);
    }
    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
         object.target.value = object.target.value.slice(0, object.target.maxLength)
          }
        }

    useEffect(()=>{
        console.log(totalTime);
        console.log(minutes)
        console.log(seconds);
        const inputTime =  parseInt(minutes*60) + parseInt(seconds);
        if(parseInt(totalTime-4) >= inputTime){
            changeStartTime(inputTime);
        } 
    },[minutes,seconds])

    return <StartTime maxLengthCheck={maxLengthCheck} onChangeMinutes={onChangeMinutes} onChangeSeconds={onChangeSeconds}/>
}

export default StartTimeContainer;