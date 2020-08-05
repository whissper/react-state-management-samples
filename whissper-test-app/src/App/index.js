import React, {useState} from 'react';
import './App.css';
import MyButton from 'App/MyButton';
import {Container, Row, Col, Alert} from 'react-bootstrap';

function App(props) {

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount( (prevCount) => ( ++prevCount ) );
    };

    return (
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
                            <MyButton clickHandler={incrementCounter} counter={count} />
                        </Col>    
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;