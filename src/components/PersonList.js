import React from 'react';
import PersonListItem from './PersonListItem';

const PersonList = (props) => props.persons.map((person, index) => {
    return  <PersonListItem 
                click={() => props.clicked(index)}
                key={person.id}
                name={person.name} 
                age={person.age}
                changed={(e) => props.changed(e, person.id)}
            />        
});

export default PersonList;