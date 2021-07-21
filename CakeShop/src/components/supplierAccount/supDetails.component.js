
import React, { Component } from 'react';
import { Tab, Row, Nav, Col } from 'react-bootstrap';
import SupAccountDetails from './supAccountDetails.component';
import SupOrder from './supOrder.component';
import SupAddCakeModel from './supAddCakeModel.component';
import AllCakeModels from './allcakemodels.component';

export default class SupDetails extends Component {

  render() {
    return (
      <div className="container" style={{ paddingTop: "100px", paddingBottom: "100px" }}>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first" bg="dark" variant="dark">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">All My Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Account Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Add Cake Model</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">All My Cake Models</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <SupOrder />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <SupAccountDetails />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <SupAddCakeModel />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <AllCakeModels />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>



      </div>
    );
  }
}