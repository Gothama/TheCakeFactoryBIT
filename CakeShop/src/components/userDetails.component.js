import React, { Component } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/style.css"
import { Accordion, Card } from 'react-bootstrap';



export default class UserDetails extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true
    });

  }
  render() {
    return (
      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Services Provided By us</h2>
            <p>Check Out our services</p>
          </div>


          <div className="row" data-aos="fade-up" data-aos-delay="200" >

            <Accordion defaultActiveKey="0" style={{ width: "600px", backgroundColor: "#cda45e", borderColor: "#cda45e" }}>
              <Card style={{ width: "1200px", backgroundColor: "#cda45e" }}>
                <Accordion.Toggle as={Card.Header} eventKey="0" style={{ width: "1200px", backgroundColor: "#cda45e" }}>
                  Customers
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body style={{ width: "1200px", backgroundColor: "#37332a" }}>Customers can register and order delicious cakes from us</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card style={{ width: "1200px", backgroundColor: "#cda45e" }}>
                <Accordion.Toggle as={Card.Header} eventKey="1" style={{ width: "1200px", backgroundColor: "#cda45e", borderColor: "#cda45e" }}>
                  Suppliers
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={{ width: "1200px", backgroundColor: "#37332a" }}>Suppliers can register with us and promote their buisness from our platform</Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>



          </div>

        </div>
      </section>

    );
  }
}