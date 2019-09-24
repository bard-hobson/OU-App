import React from 'react';

export default ({ length }) => {
    return length < 5 ? <p>Text too short</p> : <p>Text is long enough</p>;
};

