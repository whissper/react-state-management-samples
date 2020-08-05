import React from 'react';
import './App.css';
import MyButton from 'App/MyButton';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { AppDispatch, useStore } from 'App/Utils/Store';
import { useObserver } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

function App(props) {

    const store = useStore(); 

    return useObserver(() => (
        <AppDispatch.Provider value={{store}}>
            <Container className="h-100">
                <Row className="h-100 align-items-center">
                    <Col>
                        <Row className="justify-content-center">
                            <Col xs="auto" sm="auto" md="auto" lg="auto">
                                <Alert variant="primary">
                                    You clicked {store.count} times
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
    ));
}

export default App;