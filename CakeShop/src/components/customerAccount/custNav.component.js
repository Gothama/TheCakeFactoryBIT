import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import image from "../../assets/img/logo.gif"

export default class CustNav extends Component {

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" style={{ height: "80px" }} fixed="top">
          <div className="container" >
            <Navbar.Brand href="/">
              <img
                src={image}
                width="90"
                height="80"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /> </Navbar.Brand>
            <Navbar.Brand href="/">
              Customer Dashboard
            </Navbar.Brand>
          </div>
        </Navbar>



      </div>
    );
  }
}