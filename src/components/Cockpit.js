import React from 'react';
import Styles from '../styles/styles.module.scss';

const Cockpit = (props) => {
    const classes = []; 

    if (props.persons.length <= 2) {
      classes.push(Styles.red);
    }
    if (props.persons.length <= 1) {
      classes.push(Styles.bold);
    }
    return (
        <div>
            <h1>Hi, I'm a React app</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button 
                className={Styles.button}
                onClick={props.toggle}
            >
            Toggle People
            </button>
        </div>
    );
}

export default Cockpit;