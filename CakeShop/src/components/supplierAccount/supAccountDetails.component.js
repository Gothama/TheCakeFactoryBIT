
import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2'


const apiC = axios.create({
  baseURL: `http://localhost:9020/supplier/`
})

const passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneregex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const nameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export default class SupAccountDetails extends Component {

  state = {
    sname: "",
    saddress: "",
    susername: "",
    spassword: "",
    smobile: "",
    semail: "",
    phoneerrors: false,
    nameerrors: false,
    emailerrors: false,
    passworderrors: false
  };
  constructor() {
    super();
    this.getsupplierData();
  }

  getsupplierData = () => {
    apiC.post('fsupplier/', { supplierID: localStorage.getItem("supplierID") }).then(res => {
      console.log(res.data)
      this.setState({
        sname: res.data.name,
        saddress: res.data.address,
        susername: res.data.username,
        spassword: res.data.password,
        smobile: res.data.telephoneNum,
        semail: res.data.email
      }
      )
    }).catch(err => {
      window.alert("Error in login")



    })
  }

  onChangeSPassword = (event) => {
    event.preventDefault();
    let p = event.target.value
    if (!passregex.test(p)) {
      this.setState({
        passworderrors: true
      })
    }
    else {
      this.setState({ spassword: event.target.value, passworderrors: false })
    }
  }

  



  onChangeSupplierUsername = (event) => {
    this.setState({ susername: event.target.value })

  }


  onChangeSName = (event) => {
    event.preventDefault();
    let n = event.target.value
    if (!nameregex.test(n)) {
      this.setState({ nameerrors: true })
    }
    else {
      this.setState({ sname: event.target.value, nameerrors: false })
    }

  }

  


  onChangeSAddress = (event) => {
    this.setState({ saddress: event.target.value })

  }
  onChangeSMobile = (event) => {
    event.preventDefault();
    let m = event.target.value
    if (!phoneregex.test(m)) {
      this.setState({ phoneerrors: true })
    }
    else {
      this.setState({ smobile: event.target.value, phoneerrors: false })
    }


  }

  onChangeSEmail = (event) => {
    event.preventDefault();
    let m = event.target.value
    if (!emailregex.test(m)) {
      this.setState({ emailerrors: true })
    }
    else {
      this.setState({ semail: event.target.value, emailerrors: false })
    }


  }
  handleSubmitS = event => {
    event.preventDefault();
    apiC.put(`/update`, {
      supplierID: localStorage.getItem("supplierID"),
      name: this.state.sname,
      address: this.state.saddress,
      username: this.state.susername,
      password: this.state.spassword,
      telephoneNum: this.state.smobile,
      email: this.state.semail
    })
      .then(res => {
        console.log(res.data);
        if (res.data === "Successfull") {
          this.getsupplierData();
          console.log("Updated");
          Swal.fire(
            'Updated !',
            'Account Updated Successully',
            'success'
          )
          // this.props.history.push('/');
          // window.location.reload();
        }
        else {
          Swal.fire(
            'Unsuccessfull !',
            'Account Update unSuccessull',
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

        <Form style={{ padding: "20px" }} onSubmit={this.handleSubmitS}>





          <Form.Group as={Row} controlId="formHorizontalFName" >
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangeSName} Value={this.state.sname} required />
              {this.state.nameerrors ?
                    <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid Name</div>
                    : null}
            </Col>
          </Form.Group>


          <Form.Group as={Row} controlId="formHorizontalLName" >
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangeSupplierUsername} Value={this.state.susername} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalUserName" >
            <Form.Label column sm={2}>
              Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangeSAddress} Value={this.state.saddress} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" onChange={this.onChangeSPassword} value={this.state.spassword} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
            <Form.Label column sm={2}>
              Mobile No.
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangeSMobile} Value={this.state.smobile} required />
              {this.state.phoneerrors ?
                    <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid number</div>
                    : null}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalDOB">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" onChange={this.onChangeSEmail} Value={this.state.semail} required />
              {this.state.emailerrors ?
                    <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid Email address</div>
                    : null}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalDOB">
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangeSupplierUsername} value={this.state.susername} required />
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