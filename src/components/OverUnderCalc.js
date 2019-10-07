import React from 'react';
import { connect } from 'react-redux';
import scoresTotal from '../selectors/scoresTotal';

export const OverUnderCalc = (props) => {
    const dh = isNaN(props.scores.displayHome) ? 'Please enter Home Score with a sport and time gone.' : props.scores.displayHome;
    const da = isNaN(props.scores.displayAway) ? 'Please enter Home Score with a sport and time gone.' : props.scores.displayAway;
    const dfs = isNaN(props.scores.displayFinalScore) ? '' : props.scores.displayFinalScore;
    return (
        <div>
            <p>Calculated Home Total: {dh}</p>
            <p>Calculated Away Total: {da} </p>
            <p>Calculated Final Total: {dfs}</p>
        </div>
    )
};

const mapStateToProps = (state) => {
    const scores = scoresTotal(state);
    return {
        scores
    };
};

export default connect(mapStateToProps)(OverUnderCalc);
