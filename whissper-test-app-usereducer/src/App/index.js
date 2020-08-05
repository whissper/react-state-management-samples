import React from 'react';
import './App.css';
import MyButton from 'App/MyButton';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import useAppReducer, { AppDispatch } from 'App/Utils/useAppReducer';

function App(props) {

    const initialState = {
        count: 0
    };

    const [state, dispatch] = useAppReducer(initialState);

    const { count } = state;

    return (
        <AppDispatch.Provider value={{ dispatch, state }}>
            <Container className="h-100">
                <Row className="h-100 align-items-center">
                    <Col>
                        <Row className="justify-content-center">
                            <Col xs="auto" sm="auto" md="auto" lg="auto">
                                <Alert variant="primary">
                                    You clicked {count} times
                                </Alert>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs="auto" sm="auto" md="auto" lg="auto">
                                <MyButton />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </AppDispatch.Provider>
    );
}

export default App;