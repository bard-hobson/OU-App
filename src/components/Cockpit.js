import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Styles from '../styles/styles.module.scss';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request example...
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        
    });
    const classes = []; 

    if (props.personsLength <= 2) {
      classes.push(Styles.red);
    }
    if (props.personsLength <= 1) {
      classes.push(Styles.bold);
    }
    return (
        <div>
            <h1>Hi, I'm a React app</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button 
                className={Styles.button}
                onClick={props.toggle}
                ref={toggleBtnRef}
            >
                Toggle People
            </button>

            <button onClick={authContext.login}>Login</button>
        </div>
    );
}

export default React.memo(Cockpit);