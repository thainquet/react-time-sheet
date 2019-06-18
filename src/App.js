import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';

import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register'
import Home from './components/Home/Home'
import ChangePass from './components/ChangePassword/ChangePassword'
import ForgotPass from './components/ForgotPassword/ForgotPassword'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { clearAuth } from 'helpers/clearAuth'

clearAuth();

const App = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md='12'>
            <Router>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/update" component={ChangePass} />
                <Route path="/forgot" component={ForgotPass} />
                <Redirect from="/" to="/login" />
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
