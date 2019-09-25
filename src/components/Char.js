import React from 'react';
import Styles from '../styles/styles.module.scss';

export default ({ word, removeItem }) => {
    
    return (
        <div>
            <li className={Styles.charbox} onClick={removeItem}>{word}</li>
        </div>
    )
}