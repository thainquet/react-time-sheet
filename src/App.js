import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import './App.css';
import Home from './components/Home/Home'
// import MainPage from './components/Login/MainPage'
import Login from './components/Login/Login'

import testHook from './components/Login/hookLogin'

import {Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md='12'>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/testHook" component={testHook} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
