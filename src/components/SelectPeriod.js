import React, { Component } from 'react';
import { connect } from 'react-redux';
import { periodWordsHandler, setPeriodSelection } from '../actions/filters';
import Styles from '../styles/styles.module.scss';

class SelectPeriod extends Component {
    periodWordsHandler = () => {
        const PeriodWords = [
           {id: '1', name: 'Quarter'},
           {id: '2', name: 'Period'},
           {id: '3', name: 'Half'},
        ];
        this.props.periodWordsHandler(PeriodWords);
    }

    GetPeriods = () => {
        return this.props.props.period;
    }

    setPeriodSelection = (PeriodSelection) => {
        this.props.setPeriodSelection(PeriodSelection);
    }

    render () {
        return (
            <>
                {this.props.props.gameSections &&
                ( 
                    <>
                    
                        <label className={Styles["text-input--label"]}>Current {this.props.props.period}:</label>
                        <select className={Styles.select} onChange={(ev) => this.setPeriodSelection(ev.target.value)} value={this.props.props.currentPeriod}>
                            {this.props.props.gameSections.map((sec)=> {
                                return (
                                    <option key={sec+'-1'} value={sec} >{sec}</option>
                                )
                            })}
                        </select>
                    </>
                )}
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        props: state
    };
};

const mapDispatchToProps = (dispatch) => ({
    periodWordsHandler: (PeriodWords) => dispatch(periodWordsHandler(PeriodWords)),
    setPeriodSelection: (PeriodSelection) => dispatch(setPeriodSelection(PeriodSelection))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPeriod);