import React from 'react';
import Char from './Char';
import Validation from './Validation';

const LenghtListener = (props) => {

    const charList = props.word.split('').map((ch, index) => {
        return <Char 
                  word={ch}
                  key={index}
                  removeItem={() => props.removeItemHandler(index)} />
    });
    
    return (
        <div>
            <input type="text" name="lengthListener" value={props.word} onChange={(e) => props.getLengthListener(e)}/>
            <p>Length of text: {props.wordLength}</p>
            <Validation length={props.wordLength} />
            {charList}
        </div>
    );
};

export default LenghtListener;