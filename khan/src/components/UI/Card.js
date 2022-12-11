import React from 'react';

//Concept of children props
import '../UI/Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card; 