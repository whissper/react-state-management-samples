import React, { useContext } from 'react';
import './MyButton.css';
import { Button } from 'react-bootstrap';
import { AppDispatch } from 'App/Utils/useAppReducer';

function MyButton(props) {

    const { state, dispatch } = useContext(AppDispatch);

    const clickHandler = () => {
        dispatch({ type: 'setCount', count: state.count + 1 });
    };

    return (
        <Button variant="outline-info" onClick={clickHandler}>
            Times are clicked: {state.count}
        </Button>
    );
}

export default MyButton;