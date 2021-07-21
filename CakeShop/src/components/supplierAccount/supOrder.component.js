import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Moment from 'react-moment';
import Swal from 'sweetalert2'


export default class SupOrder extends Component {
  state = {
    orders: []
  }
  constructor() {
    super();
    this.getAllorders();
  }

  getAllorders() {
    let supplierID = localStorage.getItem("supplierID");
    axios.get('http://localhost:9020/ordering/supplierID/' + supplierID).then(res => {
      console.log(res);
      if (res.data === "null") {
        this.setState({ orders: [] });
      }
      else {
        this.setState({ orders: res.data });
      }

      //window.alert("Okay");
    }).catch(err => console.log(err));
  }

  deleteAnOrder(id) {
    console.log(id);
    axios.delete('http://localhost:9020/ordering/delete/' + id).then(res => {
      console.log(res);
      if (res.data === "deleted") {
        this.successfulmessage("Successfully Deleted")
        this.getAllorders();
      }
      else {
        window.alert(res.data)
        this.getAllorders();
      }

    }).catch(err => window.alert(err));

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
        <div style={{ padding: "20px" }}>




          <div className="section-title">
            <h2>Orders added by me</h2>
            <p>Your Cake Products</p>
          </div>

          <div className="row">
            <Table striped bordered hover variant="dark" >
              <thead >
                <tr >
                  <th >#</th>
                  <th style={{ textAlign: "center" }}>Cake Model ID</th>
                  <th style={{ textAlign: "center" }}>Quantity</th>
                  <th style={{ textAlign: "center" }}>Required Date</th>
                  <th style={{ textAlign: "center" }}>Order Date</th>
                  <th style={{ textAlign: "center" }}>Image</th>
                  <th style={{ textAlign: "center" }}>Manage</th>
                </tr>
              </thead>
              <tbody>
                {this.state.orders.map(order =>
                  <tr>
                    <td>1</td>
                    <td>{order.cakemodelID._id}</td>
                    <td>{order.quantity}</td>
                    <td> <Moment format="YYYY/MM/DD">
                      {order.requiredDate}
                    </Moment>
                    </td>
                    <td> <Moment format="YYYY/MM/DD">
                      {order.orderDate}
                    </Moment>
                    </td>
                    <td><img src={order.cakemodelID.cImageUrl} style={{ height: "100px", width: "100px" }} /></td>
                    <td><Button variant="danger" onClick={() => this.deleteAnOrder(order._id)}>Cancel</Button> </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>

        </div>
      </div>
    )
  }
}

