import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import scoresTotal from '../selectors/scoresTotal';
import Styles from '../styles/styles.module.scss';

export const OverUnderCalc = (props) => {
    const dh = isNaN(props.scores.displayHome) ? '00' : props.scores.displayHome;
    const da = isNaN(props.scores.displayAway) ? '00' : props.scores.displayAway;
    const dfs = isNaN(props.scores.displayFinalScore) ? '' : props.scores.displayFinalScore;
    const periodDisplay = props.scores.period === 'Quarter' ? 'Qtr' : props.scores.period; 
    return (
        <div className={Styles.displayBoard}>
            <h1>{numeral(props.scores.minutes).format('00')} <span>:</span> {numeral(props.scores.seconds).format('00')}</h1>
            <div className={Styles.displayBoard_Content}>
            <div className={Styles.displayBoard_Content_Item}>
                <label>HOME</label> 
                <span>{numeral(dh).format('00')}</span>
            </div>
            <div className={[Styles.displayBoard_Content_Item, Styles.displayBoard_Content_Item_Middle].join(' ')}>
                <label>{periodDisplay}</label>
                <span>{props.scores.currentPeriod}</span>
            </div>
            <div className={Styles.displayBoard_Content_Item}>
                <label>AWAY</label>
                <span>{numeral(da).format('00')}</span></div>
            </div>
            <div className={Styles.displayBoard_Final}>
                <label>Final: </label>
                <span>{numeral(dfs).format('00')}</span>
            </div>
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
