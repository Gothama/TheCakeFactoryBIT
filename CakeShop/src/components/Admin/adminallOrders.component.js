import React, { Component } from 'react';
import { Table, Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Moment from 'react-moment';


export default class AdminAllOrders extends Component {
  state = {
    orders: [],
    show: false,
    moreDetails: ""
  }
  constructor() {
    super();
    this.getAllorders();
  }

  close = () => {
    this.setState({
      show: false
    })
  }
  show = (orderID, paymentID, customerID, address) => {

    return (<tr><td>{orderID}</td> <td>{paymentID}</td><td>{customerID}</td><td>{address}</td></tr>)
  }

  getAllorders() {
    axios.get('http://localhost:9020/ordering/').then(res => {
      console.log(res);
      this.setState({ orders: res.data });
      //window.alert("Okay");
    }).catch(err => console.log(err));
  }

  deleteAnOrder(id) {
    axios.post('http://localhost:9020/ordering/' + id).then(res => {
      console.log(res);
      this.getAllorders();
      //window.alert("Okay");
    }).catch(err => console.log(err));

  }


  showMoreDetails = (id) => {
    console.log(id)
    axios.post('http://localhost:9020/ordering/getmoredetails', { orderID: id }
    ).then(res => {
      console.log(res)

      this.setState({
        show: true,
        moreDetails: res.data

      })
      console.log(res)
    }).catch(err => {
      alert(err)
    })
  }

  render() {
    return (

      <div>

        <div style={{ paddingTop: "50px" }} >

          <div style={{/*paddingTop:"100px" ,*/ paddingBottom: "100px", width: "100%" }}>


            <Table striped bordered hover variant="dark" >
              <thead >
                <tr >
                  <th >#</th>
                  <th style={{ textAlign: "center" }}>Cake Model ID</th>
                  <th style={{ textAlign: "center" }}>Supplier Name</th>
                  <th style={{ textAlign: "center" }}>Customer Name</th>
                  <th style={{ textAlign: "center" }}>Quantity</th>
                  <th style={{ textAlign: "center" }}>Required Date</th>
                  <th style={{ textAlign: "center" }}>Order Date</th>
                  <th style={{ textAlign: "center" }}>Manage</th>
                  <th style={{ textAlign: "center" }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {this.state.orders.map(order =>
                  <tr>
                    <td>1</td>
                    <td>{order.cakemodelID}</td>
                    <td>{order.supplierID.name}</td>
                    <td>{order.customerID.name}</td>
                    <td>{order.quantity}</td>
                    <td> <Moment format="YYYY/MM/DD">
                      {order.requiredDate}
                    </Moment>
                    </td>
                    <td> <Moment format="YYYY/MM/DD">
                      {order.orderDate}
                    </Moment>
                    </td>
                    <td><Button variant="danger" onClick={() => this.deleteAnOrder(order._id)}>Cancel</Button>  </td>
                    <td> <Button variant="primary" onClick={() => this.showMoreDetails(order._id)}>Details</Button> </td>
                  </tr>
                )}
              </tbody>
            </Table>
            {this.state.show ?
              <Modal show={this.state.show} style={{ width: "200vh" }}>
                <Modal.Header>More Details</Modal.Header>
                <Modal.Body>
                  <Table striped bordered hover variant="dark">
                    <thead >
                      <tr >
                        {/* <th style={{ textAlign: "center"}}>Order ID</th> */}
                        <th style={{ textAlign: "center" }}>Payment ID</th>
                        <th style={{ textAlign: "center" }}>Customer ID</th>
                        <th style={{ textAlign: "center" }}>Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr> {/* <td>{this.state.moreDetails._id}</td>*/} <td>{this.state.moreDetails.paymentID}</td><td>{this.state.moreDetails.customerID._id}</td>
                        <td>{this.state.moreDetails.customerID.address}</td>
                      </tr>

                    </tbody>
                  </Table>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.close}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal> : null}
          </div>
        </div>


      </div>
    );
  }
}