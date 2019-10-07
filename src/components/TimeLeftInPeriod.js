import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../hoc/Auxilary';
import { setMinutes, setSeconds } from '../actions/filters';

export class TimeLeftInPeriod extends Component {
    getMinutes = (e) => {
        let minutes = e;
        let seconds;
        if (minutes >= (this.props.props.periodMax / 60)){
            minutes = this.props.props.periodMax / 60;
            seconds = 0;
        } else {
            seconds = this.props.props.seconds;
        }
        this.props.setMinutes(minutes, seconds);
    }

    getSeconds = (e) => {
        let seconds = e;
        if (seconds >= 60) {
            seconds = 59;
        }
        this.props.setSeconds(seconds);
    }

    render (){
        if (this.props.props.gameSections) {
            let minutes =  this.props.props.minutes ? this.props.props.minutes : (this.props.props.periodMax / 60);
            let seconds = this.props.props.seconds ? this.props.props.seconds : 0;
            if (minutes > (this.props.props.periodMax / 60)) {
                minutes = this.props.props.periodMax / 60;
                seconds = 0;
            } else if (minutes === (this.props.props.periodMax / 60)) {
                seconds = 0;
            }
                
            
            const minuteMax = this.props.props.periodMax / 60;
            const dis = minutes === (this.props.props.periodMax / 60) ? 'disabled' : null;
            return (
                <Aux>
                    <input type="number" min={0} max={minuteMax} strict="true" value={minutes} onChange={(ev) => this.getMinutes(ev.target.value)} /> 
                    <span>:</span> 
                    <input type="number" min={0} max={59} value={seconds} onChange={(ev) => this.getSeconds(ev.target.value)} disabled={dis}/>
                </Aux>
            )
        } else {
            return '';
        }
    }
}
    

const mapStateToProps = (state) => {
    return {   
       props: state
    };
};

const mapDispatchToProps = (dispatch) => ({
    setMinutes: (minutes, seconds) => dispatch(setMinutes(minutes, seconds)),
    setSeconds: (minutes) => dispatch(setSeconds(minutes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeLeftInPeriod);
