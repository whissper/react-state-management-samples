import React from 'react';
import './MyButton.css';
import {Button} from 'react-bootstrap';

function MyButton(props) {
    
    const {counter, clickHandler} = props;

    return (
        <Button variant="outline-info" onClick={clickHandler}>
            Times are clicked: {counter}
        </Button>
    );
}

export default MyButton;