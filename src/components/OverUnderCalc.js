import React from 'react';
import numeral from 'numeral';

export default (props) => {

    const seconds = props.currentState.seconds = parseInt(props.currentState.seconds) || 0;
    const minutesLeftInPeriod = props.currentState.minutes === null ? props.currentState.periodMax : (props.currentState.minutes * 60); 
    const totalSecondsGone = ((props.currentState.currentPeriod - 1) * props.currentState.periodMax) 
         + (props.currentState.periodMax - (minutesLeftInPeriod + seconds));
    const totalSecondsInGame = props.currentState.periodMax * props.currentState.maxPeriods;
    const calcHomeTotal =  (props.currentState.homeTeamScore / totalSecondsGone) * totalSecondsInGame;
    const displayHome = isNaN(calcHomeTotal) ? 'Please enter Home Score': numeral(calcHomeTotal).format('0,0');
    const calcAwayTotal = (props.currentState.awayTeamScore / totalSecondsGone) * totalSecondsInGame;
    const displayAway = isNaN(calcAwayTotal) ? 'Please enter Home Score': numeral(calcAwayTotal).format('0,0');
    const calcFinalScore = calcHomeTotal + calcAwayTotal;
    const displayFinalScore = isNaN(calcFinalScore) ? '' : numeral(calcFinalScore).format('0,0');
    if (props.currentState.gameSections && totalSecondsGone !== 0) { 
        return (
            <div>
                <p>Calculated Home Total: {displayHome}</p>
                <p>Calculated Away Total: {displayAway} </p>
                <p>Calculated Final Total: {displayFinalScore}</p>
            </div>
        )
    } else {
        return '';
    }
};

