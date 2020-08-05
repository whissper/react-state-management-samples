import React, { useContext } from 'react';
import './MyButton.css';
import { Button } from 'react-bootstrap';
import { AppDispatch } from 'App/Utils/Store';

function MyButton(props) {

    const { store } = useContext(AppDispatch);

    const clickHandler = () => {
        store.increment();
    };

    return (
        <Button variant="outline-info" onClick={clickHandler}>
            Times are clicked: {store.count}
        </Button>
    );
}

export default MyButton;