import React from 'react';

export default ({ word, removeItem }) => {
    
    return (
        <div>
            <li className="charbox" onClick={removeItem}>{word}</li>
        </div>
    )
}