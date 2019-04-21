import * as React from 'react';

import Form from 'react-bootstrap/Form'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Review from './Review'

class Home extends React.Component {

  

  componentWillMount() {
  }

  render() {

    return (
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
          </Tab>
          <Tab eventKey="profile" title="Create Task">
            <Review />
          </Tab>
          <Tab eventKey="contact" title="Search..">
          </Tab>
        </Tabs>
            </div>
    );
  }
}


export default Home;

