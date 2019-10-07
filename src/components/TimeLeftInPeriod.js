import React from 'react';

const TimeLeftInPeriod = (props) => {
        if (props.gameSections) {
            let minutes =  props.minutes ? props.minutes : (props.periodMax / 60);
            let seconds = props.seconds ? props.seconds : 0;
            if (minutes > (props.periodMax / 60)) {
                minutes = props.periodMax / 60;
                seconds = 0;
            } else if (minutes === (props.periodMax / 60)) {
                seconds = 0;
            }
                
            
            const minuteMax = props.periodMax / 60;
            const dis = minutes === (props.periodMax / 60) ? 'disabled' : null;
            console.log("minutes:: " + minutes + ", periodMax::" + (props.periodMax / 60))
            return (
                <>
                    <input type="number" min={0} max={minuteMax} strict="true" value={minutes} onChange={props.getMinutes} /> 
                    <span>:</span> 
                    <input type="number" min={0} max={59} value={seconds} onChange={props.getSeconds} disabled={dis}/>
                </>
            )
        } else {
            return '';
        }
}
    

export default TimeLeftInPeriod;
