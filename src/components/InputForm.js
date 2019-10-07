import React, { Component } from 'react';
import SelectPeriod from './SelectPeriod';
import TimeLeft from './TimeLeftInPeriod';

export default class InputForm extends Component {
    
    render () {
        
        return (
            <div>
                <h1>Current Score</h1>
                <form onSubmit={this.props.onSubmit}>
                    <input 
                        type="number" 
                        placeholder="Home Team Score" 
                        value={this.props.homeTeamScore} 
                        onChange={this.props.getHomeScore}
                    />
                    <input 
                        type="number" 
                        placeholder="Away Team Score" 
                        value={this.props.AwayTeamScore} 
                        onChange={this.props.getAwayScore}
                    />
                    <select onChange={(ev) => this.props.sportsPick(ev.target.value)} >
                        <option value="default">-Select Sport-</option>
                        <option value="NBA">NBA</option>
                        <option value="NFL">NFL</option>
                        <option value="NHL">NHL</option>
                        <option value="NCAAF">NCAA Football</option>
                        <option value="NCAAM">NCAA Basketball</option>
                    </select> 
                    <SelectPeriod 
                        period={this.props.period} 
                        currentPeriod={this.props.currentPeriod} 
                        gameSections={this.props.gameSections} 
                        PeriodSelection={this.props.PeriodSelection} 
                    />
                    <TimeLeft 
                        minutes={this.props.minutes}
                        seconds={this.props.seconds}
                        gameSections={this.props.gameSections}
                        getMinutes={this.props.getMinutes}
                        getSeconds={this.props.getSeconds}
                        periodMax={this.props.periodMax}
                    />
                    
                </form>
            </div>
        );
    }
}
