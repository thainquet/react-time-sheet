import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import './App.css';

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home/Home'

import {Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md='12'>
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route exec path="/login" component={Login} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
