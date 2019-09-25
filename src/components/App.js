import React, { Component } from 'react';
import Radium, { StyleRoot }  from 'radium';
import PersonList from './PersonList';
import Styles from '../styles/styles.module.scss';
import Cockpit from './Cockpit';
import LenghtListener from './LengthListener';

class App extends Component {
  state = {
    persons: [
      { id: 'asdfaz231a', name: 'Max', age: 28 },
      { id: 'asdfazcqw1', name: 'Rachel', age: 26 },
      { id: 'asdazz76az', name: 'Bard', age: 25 },
    ],
    togglePerson: false,
    word: '',
    wordLength: 0
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }
  removeItemHandler = (index) => {
    const text = this.state.word.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    const updatedLength = updatedText.length;
    this.setState({ word: updatedText, wordLength: updatedLength });
  }

  getLengthListener = (e) => {
    const word = e.target.value;
    const wordLength = e.target.value.length;
    this.setState({ word, wordLength });  
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    this.setState(() => ({ togglePerson: !this.state.togglePerson })); 
  }

  render () {
    return (
      <StyleRoot>
        <div className={Styles.app}>
          <Cockpit 
            persons={this.state.persons} 
            toggle={this.togglePersonsHandler} 
          />
          { this.state.togglePerson && 
              <PersonList 
                persons={this.state.persons} 
                clicked={this.deletePersonHandler} 
                changed={this.nameChangedHandler}
              />
          }
          <LenghtListener 
            word={this.state.word}
            wordLength={this.state.wordLength}
            removeItemHandler={(index) => this.removeItemHandler(index)}
            getLengthListener={(index) => this.getLengthListener(index)}
          />
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
