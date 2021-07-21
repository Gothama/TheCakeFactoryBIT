import React, { Component } from 'react';
import { Form, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2'



export default class SupAddCakeModel extends Component {


  state = {
    supplierID: localStorage.getItem("supplierID"),
    cimageURL: "",
    description: "",
    price: "",
    cakeName: "",
    ingrediants: "",
    uploading: ""
  };


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
  selectImage = (event) => {
    this.setState({
      image: event.target.files[0]
    })
  }


  onChangeCakeName = (event) => {
    this.setState({ cakeName: event.target.value })

  }

  onChangecImageURL = (event) => {
    this.setState({ cimageURL: event.target.value })

  }
  onChangeDescription = (event) => {
    this.setState({ description: event.target.value })

  }

  onChangePrice = (event) => {
    this.setState({ price: event.target.value })

  }
  onChangeIngrediants = (event) => {
    this.setState({ ingrediants: event.target.value })

  }

  handleSubmit = event => {
    event.preventDefault();

    console.log("okay");

    const cake = {
      supplierID: this.state.supplierID,
      cImageUrl: this.state.cimageURL,
      description: this.state.description,
      price: this.state.price,
      cakeName: this.state.cakeName,
      ingrediants: this.state.ingrediants
    };

    console.log(cake);
    axios.post("http://localhost:9020/cakes/ncake", {
      supplierID: this.state.supplierID,
      cImageUrl: this.state.cimageURL,
      description: this.state.description,
      price: this.state.price,
      cakeName: this.state.cakeName,
      ingrediants: this.state.ingrediants
    })
      .then(response => {
        console.log(response)
        if (response.data === "Successfull") {
          Swal.fire(
            'Successfully Added',
            "",
            'success'
          )
        }
        else {
          Swal.fire(
            'Unsuccessfull !',
            '',
            'error'
          )
        }
      }).catch(error => {
        console.log(error)
      })
  };

  upload = (event) => {

    if (this.state.image.size > 600 * 600) // 1mb
      return alert("Size too large!")

    if (this.state.image.type !== 'image/jpeg' && this.state.image.type !== 'image/png') // 1mb
      return alert("File format is incorrect.")


    console.log(this.state.image)
    const formData = new FormData()
    formData.append("file", this.state.image)
    formData.append("upload_preset", "w2qn2jsf")
    axios.post("https://api.cloudinary.com/v1_1/dbecgupu0/image/upload", formData, {
      onUploadProgress: data => {

        this.setState({ uploading: Math.round((100 * data.loaded) / data.total) })
        this.successfulmessage("Image Uploaded Successfully")
      }

    }).then((res) => {
      console.log(res)
      this.setState({ cimageURL: res.data.secure_url })
    })


    console.log(this.state.cimageURL)
  }


  render() {

    return (
      <div style={{ padding: "20px" }}>
        <div className="section-title">
          <h2>Add Cake Model</h2>
          <p>Add Your Cake Model</p>
        </div>

        <Form style={{ padding: "20px" }} onSubmit={this.handleSubmit}>





          <Form.Group as={Row} controlId="formHorizontalFName" >
            <Form.Label column sm={2}>
              Cake Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text"
                required onChange={this.onChangeCakeName}

              />
            </Col>
          </Form.Group>


          <Form.Group as={Row} controlId="formHorizontalLName" >
            <Form.Label column sm={2}>
              ingrediants
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text"
                required onChange={this.onChangeIngrediants}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalUserName" >
            <Form.Label column sm={2}>
              ImageURL
            </Form.Label>
            <Col sm={7}>
              <Form.Control type="file" onChange={this.selectImage} />

            </Col>
            <Col sm={3}>
              <Button type="button" onClick={this.upload} style={{ backgroundColor: "red" }}>Upload Image</Button>
            </Col>

          </Form.Group>
          {this.state.uploading && <ProgressBar variant="danger" now={this.state.uploading} label={`${this.state.uploading}%`} />}
          <br />
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Description
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text"
                required onChange={this.onChangeDescription}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
            <Form.Label column sm={2}>
              Price
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text"
                required onChange={this.onChangePrice}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" style={{ backgroundColor: "red" }} >Add Cake Model</Button>
            </Col>
          </Form.Group>


        </Form>

      </div>
    );
  }
}