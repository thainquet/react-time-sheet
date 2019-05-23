import * as React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { Row, Col } from 'react-bootstrap'

import Review from './Creating/CreateTasks'
import Chart from './Statistic/BarChart'
import UserArea from './Statistic/User'

import axios from 'axios'

class Home extends React.Component {


  componentWillMount() {
    axios.get('http://127.0.0.1:5000/test')
    .then (data => console.log(data.data[0].id))
  }

  render() {

    return (
      <div>
        <Tabs defaultActiveKey="statistic" id="uncontrolled-tab-example">
          <Tab eventKey="statistic" title="Statistic">
            <br/>
            <Row>
              <Col md={{span: 3}}>
                <UserArea />
              </Col>
              <Col md={{ span: 6}}>
                <Chart />
              </Col>
            </Row>
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

