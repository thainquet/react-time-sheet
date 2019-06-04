import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import './App.css';

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home/Home'
import ChangePass from './components/Home/ChangePassword' 
import PrivateRouter from './components/Auth/PrivateRouter'

import {Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md='12'>
            {/* <PrivateRouter path="/home" TrueCpn={Home} FalseCpn={Login}></PrivateRouter> */}
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route exec path="/" component={Login} />
            <Route path="/update" component={ChangePass} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
