import React, { Component } from 'react'
import axios from 'axios';
import "aos/dist/aos.css";
import Header from './header.component'
import Footer from './footer.component';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Form, Row, Col, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import { PayPalButton } from "react-paypal-button-v2";


import "../assets/css/style.css"

const apiA = axios.create({
  baseURL: `http://localhost:9020/email/contact`
})

const apiC = axios.create({
  baseURL: `http://localhost:9020/cakes`
})

export default class productPagecomponent extends Component {
  state = {
    data: [],
    quantity: "",
    requiredDate: "",
    address: "",
    customerID: localStorage.getItem("customerID"),
    psupplierID: "",
    pcakeName: "",
    pingrediants: "",
    pcImageUrl: "",
    pdescription: "",
    pprice: "",
    paddedDate: "",
    pcakeID: "",
    paymentID: "",
    paid: false,
    prequiredDate:""
  }
  constructor(props) {
    super(props);

console.log(this.props.match.params.cakeID)

    apiC.get(`/details/${this.props.match.params.cakeID}`).then(res => {
      console.log(res)

      this.setState({
        psupplierID: res.data.supplierID,
        pcakeName: res.data.cakeName,
        pingrediants: res.data.ingrediants,
        pcImageUrl: res.data.cImageUrl,
        pdescription: res.data.description,
        pprice: res.data.price,
        paddedDate: res.data.addedDate,
        pcakeID: res.data._id
      })


    }).catch(err => {
      window.alert("Error")



    })



  }
  

  onChangeAddress = (event) => {
    this.setState({ address: event.target.value })
    console.log(this.state.address)

  }
  onChangeDate = (event) => {
    this.setState({ prequiredDate: event.target.value })
    console.log(this.state.prequiredDate)

  }
  onChangeQuantity = (event) => {
    this.setState({ quantity: event.target.value })
    console.log(this.state.quantity)

  }
  handleSubmitOrder = event => {
    event.preventDefault();
    if (this.state.paid) {
      axios.post(`http://localhost:9020/ordering/norder`, {
        supplierID: this.state.psupplierID,
        customerID: this.state.customerID,
        cakemodelID: this.props.match.params.cakeID,
        requiredDate: this.state.prequiredDate,
        quantity: this.state.quantity,
        paymentID: this.state.paymentID,
        sendingAddress:this.state.address
      })
        .then(res => {
          console.log(res.data);
          if (res.data.a === "okay") {
            Swal.fire(
              'Ordered !',
              'Order is successfull',
              'success'
            )
            apiA.post("/").then(res=>{
              console.log(res)
            })
            

          }
          else {
            Swal.fire(
              'Unssucessfull !',
              'Try Again',
              'error'
            )
          }
        })
    }
    else {
      Swal.fire(
        'Unssucessfull !',
        'Make the payment first',
        'error'
      )
    }
  }
  dirrect() {
    this.props.history.push('/');
    window.location.reload();
  }

  onPaymentSuccess = (details, data) => {
    // alert("Transaction completed by " + details.payer.name.given_name);

    // OPTIONAL: Call your server to save the transaction
    console.log(data);

    this.setState({
      paid: true,
      paymentID: data.payerID
    })
    this.successfulmessage("Your Payment is successfull")
  }

    successfulmessage = (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }
  unsuccessfulmessage = (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }


  render() {
    return (
      <div>

        <Header />

        <div id="portfolio-details" className="portfolio-details" style={{ paddingTop: "150px" }}>
          <div className="container">

            <div className="portfolio-details-container">
              <div class="owl-carousel portfolio-details-carousel">
                <img src={this.state.pcImageUrl} className="img-fluid" alt="" />

              </div>

              <div className="portfolio-info" style={{ color: "black" }}>
                <h3>Cake information</h3>
                <ul>

                  <li><strong>Cake Name</strong>: {this.state.pcakeName}</li>
                  <li><strong>Description</strong>: {this.state.pdescription}</li>
                  <li><strong>Added date</strong>: <Moment format="YYYY/MM/DD">{this.state.paddedDate}</Moment> </li>
                  <li><strong>Ingredients</strong>: {this.state.pingrediants}</li>
                  <li><strong>Price</strong>: Rs. {this.state.pprice}</li>
                </ul>
              </div>

            </div>

            <div className="portfolio-description">
              <h2>Select the Required Date and Make the order</h2>
              <p>
                <Form onSubmit={this.handleSubmitOrder}>
                  <Form.Group as={Row} controlId="formHorizontalDOB">
                    <Form.Label column sm={2}>
                      Sending Address
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" onChange={this.onChangeAddress} required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalDOB">
                    <Form.Label column sm={2}>
                      Required Date
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="date" onChange={this.onChangeDate} required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalDOB">
                    <Form.Label column sm={2}>
                      Required Quantity
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="number" onChange={this.onChangeQuantity} required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      {localStorage.getItem("loggedIn") === "loggedIn" && localStorage.getItem("AccountType") === "Customer" ? <div> <Button type="submit" style={{ backgroundColor: "red" }}>Order</Button> <br /><br /> <PayPalButton amount="200" onSuccess={(details, data) => this.onPaymentSuccess(details, data)} /> </div> :
                        <Link to={'/signUp'} style={{
                          backgroundColor: "#f44336",
                          color: "white",
                          padding: "10px 20px",
                          textAlign: "center",
                          textDecoration: "none",
                          display: "inline-block",
                          borderRadius: "5px"
                        }}>
                          Pls Sign In to order
                        </Link>}

                    </Col>
                  </Form.Group>
                </Form>
              </p>
            </div>

          </div>
        </div>


        <Footer />

      </div>
    )
  }
}
