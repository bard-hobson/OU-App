import numeral from 'numeral';

export default (props) => {
    const seconds = props.seconds = parseInt(props.seconds) || 0;
    const minutes = parseInt(props.minutes);// || 0;
    
    const totalSecondsGone = ((props.currentPeriod - 1) * props.periodMax) 
           + ((((props.periodMax / 60) - minutes) * 60) + seconds);
    
    
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
    // new array to return to state for total views
    const newProps = {displayHome, displayAway, displayFinalScore, totalSecondsGone, gameSections};
    return newProps;        
}; 