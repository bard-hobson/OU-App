import React from 'react';
import Radium from 'radium';
import styles from '../styles/styles.module.scss';

const Person = (props) => {
    return (
        <div className={styles.personcard}>
            <p onClick={props.click}>Hi! I am {props.name} and I am {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
};

export default Radium(Person);