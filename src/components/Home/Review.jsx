import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from '../LoadingButton'
import {Col, Row, Container} from 'react-bootstrap'

export default class Review extends Component {
  render() {
    return (
      <div className="App">
        <Container>
            <Row>
                <div className="col-md-2">
                    <img src="" alt="avt"/>
                </div>
                <Col md={{span: 6, offset: 2}}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Asignee</Form.Label>
                        <Form.Control type="email" placeholder="NguyenVanA" disabled/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Task</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Time estimated (unit: hours)</Form.Label>
                        <Form.Control type="number" placeholder="1, 2, ...."/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Note</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    </Form>   
                    <Button data={{test: 'ok'}}/> 
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

