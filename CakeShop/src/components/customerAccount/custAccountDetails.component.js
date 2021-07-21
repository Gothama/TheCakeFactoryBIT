import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2'

const apiC = axios.create({
  baseURL: `http://localhost:9020/customer/`
})

const passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneregex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const nameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export default class custAccountDetails extends Component {

  state = {
    cname: "",
    caddress: "",
    cusername: "",
    cpassword: "",
    cmobile: "",
    cemail: "",
    phoneerrorc: false,
    nameerrorc: false,
    emailerrorc: false,
    passworderrorc: false

  };

  constructor() {
    super();
    this.getCustomerData();
  }

  getCustomerData = () => {
    apiC.post('fcustomer/', { customerID: localStorage.getItem("customerID") }).then(res => {
      console.log(res.data)
      this.setState({
        cname: res.data.name,
        caddress: res.data.address,
        cusername: res.data.username,
        cpassword: res.data.password,
        cmobile: res.data.telephoneNum,
        cemail: res.data.email
      })

    }).catch(err => {
      Swal.fire(
        'Unsuccessfull',
        "Try Again",
        'error'
      )



    })
  }

  onChangeCPassword = (event) => {
    event.preventDefault();
    let p = event.target.value
    if (!passregex.test(p)) {
      this.setState({
        passworderrorc: true
      })
    }
    else {
      this.setState({ cpassword: event.target.value, passworderrorc: false })
    }
  }




  onChangeCustomerUsername = (event) => {
    this.setState({ cusername: event.target.value })

  }


  onChangeCName = (event) => {
    event.preventDefault();
    let n = event.target.value
    if (!nameregex.test(n)) {
      this.setState({ nameerrorc: true })
    }
    else {
      this.setState({ cname: event.target.value, nameerrorc: false })
    }



  }


  onChangeCAddress = (event) => {
    this.setState({ caddress: event.target.value })

  }
  onChangeCMobile = (event) => {
    event.preventDefault();
    let m = event.target.value
    if (!phoneregex.test(m)) {
      this.setState({ phoneerrorc: true })
    }
    else {
      this.setState({ cmobile: event.target.value, phoneerrorc: false })
    }


  }

  onChangeCEmail = (event) => {
    event.preventDefault();
    let m = event.target.value
    if (!emailregex.test(m)) {
      this.setState({ emailerrorc: true })
    }
    else {
      this.setState({ cemail: event.target.value, emailerrorc: false })
    }


  }
  handleSubmitC = event => {
    event.preventDefault();
    apiC.put(`/update`, {
      customerID: localStorage.getItem("customerID"),
      name: this.state.cname,
      address: this.state.caddress,
      username: this.state.cusername,
      password: this.state.cpassword,
      telephoneNum: this.state.cmobile,
      email: this.state.cemail
    })

      .then(res => {
        console.log(res.data);
        if (res.data === "Successfull") {
          this.getCustomerData();
          console.log("Updated");
          Swal.fire(
            'Successfully Updated',
            "",
            'success'
          )

        }
        else {
          Swal.fire(
            'Unsuccessfull',
            "Try Again",
            'error'
          )
        }
      })
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <div className="section-title">
          <h2>My Account</h2>
          <p>Your Account Details</p>
        </div>

        <Form style={{ padding: "20px" }} onSubmit={this.handleSubmitC}>





          <Form.Group as={Row} controlId="formHorizontalFName" >
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangeCName} Value={this.state.cname} required />
              {this.state.nameerrorc ?
                      <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid Name</div>
                      : null}
            </Col>
          </Form.Group>


          <Form.Group as={Row} controlId="formHorizontalLName" >
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangeCustomerUsername} Value={this.state.cusername} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalUserName" >
            <Form.Label column sm={2}>
              Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangeCAddress} Value={this.state.caddress} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" onChange={this.onChangeCPassword} Value={this.state.cpassword} readOnly />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
            <Form.Label column sm={2}>
              Mobile No.
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangeCMobile} Value={this.state.cmobile} required />
              {this.state.phoneerrorc ?
                      <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid number</div>
                      : null}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalDOB">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" onChange={this.onChangeCEmail} Value={this.state.cemail} required />
              {this.state.emailerrorc ?
                      <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid Email address</div>
                      : null}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalDOB">
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="username" onChange={this.onChangeCustomerUsername} Value={this.state.cusername} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" style={{ backgroundColor: "red" }}>Update</Button>
            </Col>
          </Form.Group>


        </Form>

      </div>
    );
  }
}