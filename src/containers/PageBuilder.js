import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import OverUnderCalc from '../components/OverUnderCalc';
import Styles from '../styles/styles.module.scss';

export default class PageBuilder extends Component {
    render () {
        
        return (
            <div className={Styles.content_Container}>
                <InputForm />
                <OverUnderCalc />
            </div>
        )
    }
}