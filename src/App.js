import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import './App.css';
import Home from './components/Home/Home'
// import MainPage from './components/Login/MainPage'
import Login from './components/Login/Login'
// import {ValidationSchemaExample as tempLogin} from './components/Login/tempLogin'

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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
