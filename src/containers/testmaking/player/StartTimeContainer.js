import { useState } from "react";
import StartTime from "../../../components/testmaking/questionlist/player/StartTime"







const StartTimeContainer = ({changeStartTime,totalTime}) => {

    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);

    const vsTime = () => {
        const inputTime =  parseInt(minutes*60 + seconds);
        if(parseInt(totalTime-4) >= inputTime){
            changeStartTime(inputTime);
        }
    }

    const onChangeMinutes = e => {
        const minute = e.target.value;
        setMinutes(minute);
        vsTime();
    }

    const onChangeSeconds = e => {
        const second = e.target.value;
        setSeconds(second);
        vsTime();
    }

    return <StartTime onChangeMinutes={onChangeMinutes} onChangeSeconds={onChangeSeconds}/>
}

export default StartTimeContainer;