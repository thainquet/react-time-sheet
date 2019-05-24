import * as React from 'react';
import { Tabs, Tab } from 'react-bootstrap'

import Login from '../Login'
import Register from '../Register'

const MainPage = () => {
  return (
    <div>
      {/* <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link to='/home'>Login</Link>
      </Form> */}
      <Tabs defaultActiveKey="login" transition={false}>
        <Tab eventKey="login" title="Login">
          <Login />
        </Tab>
        <Tab eventKey="register" title="register">
          <Register />
        </Tab>
      </Tabs>
    </div>
  );
}


export default MainPage;

