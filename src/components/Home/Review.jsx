import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

export default class Review extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src="" alt="avt"/>
                </div>
                <div className="col-md-10">
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
                </div>
            </div>
        </div>
      </div>
    );
  }
}

