import * as React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { Row, Col } from 'react-bootstrap'

import Review from './Creating/CreateTasks'
import Chart from './Statistic/BarChart'
import UserArea from './Statistic/User'

class Home extends React.Component {

  componentWillMount() {
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

