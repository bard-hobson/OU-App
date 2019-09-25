import React, { Component } from 'react';
import AuthContext from '../context/AuthContext';
import Auxiliary from '../hoc/Auxiliary';
import Cockpit from './Cockpit';
import LenghtListener from './LengthListener';
import PersonList from './PersonList';
import withClass from '../hoc/withClass';
import Styles from '../styles/styles.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asdfaz231a', name: 'Max', age: 28 },
      { id: 'asdfazcqw1', name: 'Rachel', age: 26 },
      { id: 'asdazz76az', name: 'Bard', age: 25 },
    ],
    togglePerson: false,
    showCockpit: true,
    word: '',
    wordLength: 0,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log ('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log('[App.js] componentDidUpdate');
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

  loginHandler = () => {
    this.setState(() => ({ authenticated : true }));
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

    this.setState((prevState, props) => { 
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter + 1 
      }});
  }

  togglePersonsHandler = () => {
    this.setState(() => ({ togglePerson: !this.state.togglePerson })); 
  }

  render () {
    console.log('[App.js] rendering...');
    return (
        <Auxiliary>
          <button onClick={() => {
              this.setState({ showCockpit: !this.state.showCockpit });
            }} 
          >Remove Cockpit </button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler
          }}>
            { this.state.showCockpit && 
              <Cockpit 
                personsLength={this.state.persons.length} 
                toggle={this.togglePersonsHandler}
              />
            }
            { this.state.togglePerson && 
                <PersonList 
                  persons={this.state.persons} 
                  clicked={this.deletePersonHandler} 
                  changed={this.nameChangedHandler}
                  isAuthenticated={this.state.authenticated}
                />
            }
          </AuthContext.Provider>
          <LenghtListener 
            word={this.state.word}
            wordLength={this.state.wordLength}
            removeItemHandler={(index) => this.removeItemHandler(index)}
            getLengthListener={(index) => this.getLengthListener(index)}
          />
        </Auxiliary>
    );
  }
}

export default withClass(App, Styles.app);
