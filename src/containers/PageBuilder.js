import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import OverUnderCalc from '../components/OverUnderCalc';

export default class FormBuilder extends Component {
    render () {
        
        return (
            <div>
                <InputForm />
                <OverUnderCalc />
            </div>
        )
    }
}