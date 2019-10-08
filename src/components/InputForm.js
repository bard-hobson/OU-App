import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectPeriod from './SelectPeriod';
import TimeLeft from './TimeLeftInPeriod';
import { setSelectSport, setHomeScore, setAwayScore } from '../actions/filters';
import Styles from '../styles/styles.module.scss';

export class InputForm extends Component {
    sportSelectionHandler = (sport) => {
        let period = '';
        let gameSections = [];
        let periodMax = 0;
        let maxPeriods = 4;
        switch (sport) {
            case 'NCAAM':
                period = 'Half';
                gameSections = ['1','2'];
                periodMax = 1200;
                maxPeriods = 2;
                break;
            case 'NHL':
                period = 'Period';
                gameSections = ['1','2', '3'];
                periodMax = 1200;
                maxPeriods = 3;
                break;
            case 'NBA':
                period = 'Quarter';
                gameSections = ['1','2','3','4'];
                periodMax = 720;
                maxPeriods = 4;
                break;
            default:
                period = 'Quarter'; // NFL, NCAAF
                gameSections = ['1','2','3','4'];
                periodMax = 900;
                maxPeriods = 4;
                break;
            }
        const currentPeriod =  1;
        const sportListSelection = sport;
        const filtersUpdate = {
            sportListSelection, period, gameSections, periodMax, maxPeriods, currentPeriod
        }
        this.props.setSelectSport(filtersUpdate);
    }

    setHomeScore = (e) => {
        const homeTeamScore = e;
        this.props.setHomeScore(homeTeamScore);
    }

    setAwayScore = (e) => {
        const awayTeamScore = e;
        this.props.setAwayScore(awayTeamScore);
    }

    render () {
        
        return (
            <div>
                <h2>Over / Under Calculator</h2>
                <form>
                    <input 
                        type="number" 
                        className={Styles["text-input"]}
                        placeholder="Home Team Score" 
                        value={this.props.homeTeamScore} 
                        onChange={(ev) => this.setHomeScore(ev.target.value)}
                    />
                    <input 
                        type="number" 
                        className={Styles["text-input"]}
                        placeholder="Away Team Score" 
                        value={this.props.awayTeamScore} 
                        onChange={(ev) => this.setAwayScore(ev.target.value)}
                    />
                    <select className={Styles["text-input"]} onChange={(ev) => this.sportSelectionHandler(ev.target.value)} >
                        <option value="default">-Select Sport-</option>
                        <option value="NBA">NBA</option>
                        <option value="NFL">NFL</option>
                        <option value="NHL">NHL</option>
                        <option value="NCAAF">NCAA Football</option>
                        <option value="NCAAM">NCAA Basketball</option>
                    </select> 
                    <div className={Styles["filter-box"]}>
                        <SelectPeriod />
                        <TimeLeft />
                    </div>
                    
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ filters: state.filters });

const mapDispatchToProps = (dispatch) => ({
    setSelectSport: (filtersUpdate) => dispatch(setSelectSport(filtersUpdate)),
    setHomeScore: (homeTeamScore) => dispatch(setHomeScore(homeTeamScore)),
    setAwayScore: (awayTeamScore) => dispatch(setAwayScore(awayTeamScore))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);