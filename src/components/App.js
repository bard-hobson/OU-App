import React, { Component } from 'react';
import Radium, { StyleRoot }  from 'radium';
import Char from '../components/Char';
import Person from './Person';
import Validation from '../components/Validation';
import styles from '../styles/styles.module.scss';

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

    let persons = null;
    const classes = []; //['red', 'bold'].join(' ');

    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }
    if (this.state.togglePerson) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
              return <Person 
                        click={() => this.deletePersonHandler(index)}
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        changed={(e) => this.nameChangedHandler(e, person.id)}
                      />
            })
          }
        </div>
      )  
    }

    const charList = this.state.word.split('').map((ch, index) => {
      return <Char 
                word={ch}
                key={index}
                removeItem={() => this.removeItemHandler(index)} />
    });
    
    return (
      <StyleRoot>
        <div className={styles.app}>
          <h1>Hi, I'm a React app</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            className={styles.button}
            onClick={this.togglePersonsHandler}
          >
            Toggle People
          </button>
          {persons}
          <div>
            <input type="text" name="lengthListener" value={this.state.word} onChange={(e) => this.getLengthListener(e)}/>
            <p>Length of text: {this.state.wordLength}</p>
            <Validation length={this.state.wordLength} />
            {charList}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
