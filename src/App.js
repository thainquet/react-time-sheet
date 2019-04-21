import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import MainPage from './components/Home/MainPage'
import Review from './components/Home/Review'
import { Container, Row, Col} from 'react-bootstrap'

import {Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md='12'>
            <Route exact path="/" component={MainPage} />
            <Route path="/home" component={Home} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
