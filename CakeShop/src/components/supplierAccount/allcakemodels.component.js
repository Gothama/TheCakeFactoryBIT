import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'



export default class AllCakeModels extends Component {
  state = {
    cakes: []
  }
  constructor() {
    super();
    this.getAllCakes();
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

  getAllCakes() {
    let supplierID = localStorage.getItem("supplierID");
    axios.get('http://localhost:9020/cakes/baker/' + supplierID).then(res => {
      console.log(res);
      //this.setState({ cakes:res.data });
      if (res.data === "null") {
        this.setState({ cakes: [] });
      }
      else {
        this.setState({ cakes: res.data });
      }

      //window.alert("Okay");
    }).catch(err => console.log(err));
  }

  deleteAnCake(id) {
    console.log(id);
    axios.delete('http://localhost:9020/cakes/' + id).then(res => {
      console.log(res);
      if (res.data === "deleted") {
        this.successfulmessage("Cake Model Deleted Successfully")
        this.getAllCakes();
      }
      else {
        this.unsuccessfulmessage("Cake was not able to delete")
        this.getAllCakes();
      }

    }).catch(err => window.alert(err));

  }



  render() {
    return (
      <div>
        <div style={{ padding: "20px" }}>

          <div className="section-title">
            <h2>Cake Models added by me</h2>
            <p>Your Cake Products</p>
          </div>

          <div className="row">
            <Table striped bordered hover variant="dark" >
              <thead >
                <tr >
                  <th >#</th>
                  <th style={{ textAlign: "center" }}>Cake Name</th>
                  <th style={{ textAlign: "center" }}>Added Date</th>
                  <th style={{ textAlign: "center" }}>Ingredients</th>
                  <th style={{ textAlign: "center" }}>Description</th>
                  <th style={{ textAlign: "center" }}>Price</th>
                  <th style={{ textAlign: "center" }}>Image</th>
                  <th style={{ textAlign: "center" }}>Manage</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cakes.map(cake =>
                  <tr>
                    <td>1</td>

                    <td>{cake.cakeName}</td>
                    <td> <Moment format="YYYY/MM/DD">
                      {cake.addedDate}
                    </Moment>
                    </td>
                    <td> {cake.ingrediants}
                    </td>
                    <td> {cake.description}
                    </td>
                    <td> Rs. {cake.price}
                    </td>
                    <td><img src={cake.cImageUrl}style={{ height: "100px", width: "100px" }}/></td>
                    <td><Button variant="danger" onClick={() => this.deleteAnCake(cake._id)}>Delete</Button> </td>
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

