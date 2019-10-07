import React, { Component } from 'react';

class SelectPeriod extends Component {
    render () {
    return (<>
        {this.props.gameSections &&
           ( 
               <>
               <label>Current {this.props.period}:</label>
                <select onChange={(ev) => this.props.PeriodSelection(ev.target.value)} value={this.props.currentPeriod}>
                    {this.props.gameSections.map((sec)=> {
                        return (
                            <option key={sec+'-1'} value={sec} >{sec}</option>
                        )
                    })}
                </select></>
           )}
    </>)
                }};

export default SelectPeriod;