
import React, { Component } from 'react';
import { Tab, Row, Nav, Col } from 'react-bootstrap';
import CustAccountDetails from './custAccountDetails.component';
import CustOrder from './custOrder.component';


export default class CustDetails extends Component {

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
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <CustOrder />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <CustAccountDetails />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>



      </div>
    );
  }
}