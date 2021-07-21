import React, { Component } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/style.css"
import { Card, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


export default class CakeTile extends Component {
  constructor(props) {
    super(props);
    this.viewPage = this.viewPage.bind(this);

  }
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true
    });
    //window.alert(this.props.cakeID)
  }

  viewPage() {
    const name = this.props.cakeName;
    const imageURL = this.props.cImageUrl;
    const cid = this.props.cid;
    const ingrediants = this.props.ingrediants;
    const price = this.props.price;
    const description = this.props.description;
    console.log(cid);
    console.log('The link was clicked.');

    Swal.fire({
      title: name,
      html: '<div>Cake Ingrediants: ' + ingrediants + '<br />Cake price: ' + price + '<br />Description: ' + description + '<br />Required Date: <input type="datetime-local"/></div>',
      imageUrl: imageURL,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })

  }
  render() {
    return (

      <div className="col-lg-4" style={{ paddingBottom: "20px" }}>
        <Card className="box" style={{ width: '23rem', paddingBottom: "10px" }} data-aos="zoom-in" data-aos-delay="200">
          <Card.Img variant="top" src={this.props.cImageUrl} />
          <Card.Body>
            <Card.Title>Cake Name : {this.props.cakeName}</Card.Title>
            <Card.Text>
              Cake Price : {this.props.price}
            </Card.Text>
            <Card.Text>

              Model Added on: <Moment format="YYYY/MM/DD">{this.props.addedDate}</Moment>
            </Card.Text>
            {/*<Button variant="warning" onClick={() => this.viewPage()}>More Details</Button>*/}
            <Link to={`/productPage/${this.props.id}`} style={{
              backgroundColor: "#f44336",
              color: "white",
              padding: "10px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              borderRadius: "5px"
            }}>
              More Details
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
