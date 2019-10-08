import numeral from 'numeral';

export default (props) => {
    const seconds = props.seconds = parseInt(props.seconds) || 0;
    const minutes = isNaN(parseInt(props.minutes)) ? (parseInt(props.periodMax) / 60) : parseInt(props.minutes);
    let totalSecondsGone;

    if ((props.currentPeriod === 1 || props.currentPeriod === null) && ((minutes * 60) === props.periodMax)) { // beginning of the game
        totalSecondsGone = 0;
    } else {
        const minSec = (((props.periodMax / 60) - minutes) * 60) - seconds;
        totalSecondsGone = ((props.currentPeriod - 1) * props.periodMax) + minSec;
    }


    console.log('totalSecondsGone::', totalSecondsGone);
    const totalSecondsInGame = props.periodMax * props.maxPeriods;
    
    const calcHomeTotal =  (props.homeTeamScore / totalSecondsGone) * totalSecondsInGame;
    let displayHome = '';
    if (isNaN(calcHomeTotal)) {
         displayHome = 'Please enter Home Score with a sport and time gone.';
    } else {
        displayHome = numeral(calcHomeTotal).format('0,0');
    }
    
    const calcAwayTotal = (props.awayTeamScore / totalSecondsGone) * totalSecondsInGame;
    let displayAway = '';
    if (isNaN(calcAwayTotal)) {
        displayAway = 'Please enter Away Score with a sport and time gone.';
    } else {
        displayAway = numeral(calcAwayTotal).format('0,0');
    }

    const calcFinalScore = calcHomeTotal + calcAwayTotal;
    const displayFinalScore = isNaN(calcFinalScore) ? 'N/A' : numeral(calcFinalScore).format('0,0');
    const gameSections = props.gameSections;
    const period = props.period;
    const currentPeriod = props.currentPeriod;
    // new array to return to state for total views
    const newProps = {displayHome, displayAway, displayFinalScore, totalSecondsGone, gameSections, minutes, seconds, period, currentPeriod};
    return newProps;        
}; 