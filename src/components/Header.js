import React from 'react';
import Styles from '../styles/styles.module.scss';

const Header = () => (
    <header className={Styles.header}>
        <div className={Styles.content_Container}>
            <div className={Styles.header__content}>
                
                    <h1>O/U</h1>

                <button className={[Styles.button, Styles.button_Link].join(' ')}>Logout</button>
            </div>
        </div>
    </header>
);

export default Header;