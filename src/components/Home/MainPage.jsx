import * as React from 'react';

import Form from 'react-bootstrap/Form'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  

  componentWillMount() {
  }

  render() {

    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Button component={Link} to="/review">Login</Button> */}
          <Link to='/home'>Login</Link>
        </Form>
            </div>
    );
  }
}


export default MainPage;

