import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import OverUnderCalc from '../components/OverUnderCalc';

export default class FormBuilder extends Component {
    state = {
        homeTeamScore: 0,
        awayTeamScore: 0,
        sportListSelection: null,
        period: '',
        gameSections: '',
        currentPeriod: null,
        maxPeriods: 4,
        periodMax: 900, //all minutes are saved to seconds to make calculations easier later
        minutes: null,
        seconds: null
    }

    periodWordsHandler = () => {
        const PeriodWords = [
           {id: '1', name: 'Quarter'},
           {id: '2', name: 'Period'},
           {id: '3', name: 'Half'},
        ];
        this.setState(() => (
            {period: PeriodWords}
        ));
    }

    sportSelectionHandler = (sport) => {
        const sportListSelection = sport;
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
                gameSections = ['1  ','2','3','4'];
                periodMax = 900;
                maxPeriods = 4;
                break;
            }
        this.setState(() => ({ 
            sportListSelection, 
            period, 
            gameSections,
            periodMax,
            maxPeriods,
            currentPeriod: 1
        }));
    }

    GetPeriods = () => {
        return (
            this.state.period
        )
    }
    getPeriodSelection = (PeriodSelection) => {
        this.setState(() => (
            {currentPeriod: PeriodSelection}
        ));
    }

    getHomeScore = (e) => {
        const homeTeamScore = e.target.value;
        this.setState(() => ({ homeTeamScore }));
    }

    getAwayScore = (e) => {
        const awayTeamScore = e.target.value;
        this.setState(() => ({ awayTeamScore }));
    }

    getMinutes = (e) => {
        let minutes = e.target.value;
        if (minutes > (this.state.periodMax / 60)){
            minutes = this.state.periodMax / 60;
        }
        this.setState(() => ({ minutes }));
    }

    getSeconds = (e) => {
        let seconds = e.target.value;
        if (seconds >= 60) {
            seconds = 59;
        }
        this.setState(() => ({ seconds }));
    }
    render () {
        
        return (
            <div>
                <InputForm 
                    whichPeriod={this.periodWordsHandler}
                    sportsPick={this.sportSelectionHandler}
                    period={this.state.period}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    gameSections={this.state.gameSections}
                    currentPeriod={this.state.currentPeriod}
                    PeriodSelection={this.getPeriodSelection}
                    getHomeScore={this.getHomeScore}
                    getAwayScore={this.getAwayScore} 
                    getMinutes={this.getMinutes}
                    getSeconds={this.getSeconds}
                    periodMax={this.state.periodMax}
                />
                <OverUnderCalc currentState={this.state}/>
            </div>
        )
    }
}