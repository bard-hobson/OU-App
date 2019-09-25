import React, { Component } from 'react';
import PersonListItem from './PersonListItem';

class PersonList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[PersonList.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked ||
            nextProps.isAuthenticated !== this.props.isAuthenticated) {
            return true;
        } else {
            return false;
        }
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[PersonList.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('[PersonList.js] componentDidUpdate');
        console.log(Snapshot);
    }

    render () {
        console.log('[PersonList.js] rendering...');

        return this.props.persons.map((person, index) => {
            return (
                <PersonListItem 
                        click={() => this.props.clicked(index)}
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        changed={(e) => this.props.changed(e, person.id)}
                        isAuth={this.props.isAuthenticated}
                    />        
            )
        })
    }
};

export default PersonList;