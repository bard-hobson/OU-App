import React, { Component } from 'react';
import AuthContext from '../context/AuthContext';
import Auxiliary from '../hoc/Auxiliary';
import PropTypes from 'prop-types';
import withClass from '../hoc/withClass';
import Styles from '../styles/styles.module.scss';


class PersonListItem extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render () {
        console.log('[PersonListItem.js] is rendering...');
        return (
            <Auxiliary>
                <AuthContext.Consumer>
                    {((context) => this.props.isAuth ? <p>Authenticated!</p> : <p>Please Login!</p>)}
                </AuthContext.Consumer>
                <div className={Styles.personcard}>
                    <p onClick={this.props.click}>Hi! I am {this.props.name} and I am {this.props.age} years old! </p>
                    <p>{this.props.children}</p>
                    <input 
                        type="text" 
                        //ref={(inputEl) => {this.inputElement = inputEl}} //works fine, constructor method better though
                        ref={this.inputElementRef}
                        onChange={this.props.changed} 
                        defaultValue={this.props.name}
                    />
                </div>
            </Auxiliary>
        )
    }
};

PersonListItem.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(PersonListItem, Styles.person);