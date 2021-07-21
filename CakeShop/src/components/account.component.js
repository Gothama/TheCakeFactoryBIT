import React, { Component } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Footer from './footer.component';
import Header from './header.component'
import HeroSection from './heroSection.component'
import "../assets/css/style.css"
import axios from 'axios';


export default class Navbar extends Component {
  state = {
    cakes: [],
  };
  componentDidMount() {

    axios.get('http://localhost:9020/cakes/baker/' + 1234
    ).then(res => {
      console.log(res);
      this.setState({ cakes: res.data });
    }).catch(err => console.log(err));

    axios.get('http://localhost:9020/cakes/baker/' + 1234
    ).then(res => {
      console.log(res);
      this.setState({ cakes: res.data });
    }).catch(err => console.log(err));


    AOS.init({
      duration: 1000,
      once: true
    });
  }

  render() {
    return (
      <div>

        <Header />
        <HeroSection />

        <section id="why-us" className="why-us" style={{ paddingTop: "170px" }}>
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Orders Made by me</h2>
              <p>Your cake orders </p> <br></br><Button variant="warning">Unregister</Button>
            </div>

            <div className="row">
              <Table striped bordered hover variant="dark" >
                <thead >
                  <tr >
                    <th >#</th>
                    <th style={{ textAlign: "center" }}>First Name</th>
                    <th style={{ textAlign: "center" }}>Last Name</th>
                    <th style={{ textAlign: "center" }}>Age</th>
                    <th style={{ textAlign: "center" }}>Email</th>
                    <th style={{ textAlign: "center" }}>Manage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Kenneth</td>
                    <td>35</td>
                    <td>markenneth@gmail.com</td>
                    <td><Button variant="danger">Remove</Button> </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Gothama</td>
                    <td>Rajawasam</td>
                    <td>23</td>
                    <td>gothamaRajawasam@gmail.com</td>
                    <td><Button variant="danger">Remove</Button> </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Kisal</td>
                    <td>Perera</td>
                    <td>56</td>
                    <td>kisalPerera@gmail.com</td>
                    <td><Button variant="danger">Remove</Button> </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>John</td>
                    <td>Thornton</td>
                    <td>56</td>
                    <td>JohnThornton@gmail.com</td>
                    <td><Button variant="danger">Remove</Button> </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Hasitha</td>
                    <td>Wickramasinghe</td>
                    <td>41</td>
                    <td>hasithaWickramasinghe@gmail.com</td>
                    <td><Button variant="danger">Remove</Button> </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Kulesha</td>
                    <td>Senanayaka</td>
                    <td>26</td>
                    <td>KuleshaWickramasinghe@gmail.com</td>
                    <td><Button variant="danger">Remove</Button> </td>
                  </tr>
                </tbody>
              </Table>

            </div>
            <br /><br /><br /><br />
            <div className="section-title">
              <h2>Orders added by me</h2>
              <p>Your Cake Products</p><br></br><Button variant="warning">Unregister</Button>
            </div>

            <div className="row">
              <Table striped bordered hover variant="dark" >
                <thead >
                  <tr >
                    <th >#</th>
                    <th style={{ textAlign: "center" }}>First Name</th>
                    <th style={{ textAlign: "center" }}>Last Name</th>
                    <th style={{ textAlign: "center" }}>Age</th>
                    <th style={{ textAlign: "center" }}>Email</th>
                    <th style={{ textAlign: "center" }}>Manage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Kenneth</td>
                    <td>35</td>
                    <td>markenneth@gmail.com</td>
                    <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Gothama</td>
                    <td>Rajawasam</td>
                    <td>23</td>
                    <td>gothamaRajawasam@gmail.com</td>
                    <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Kisal</td>
                    <td>Perera</td>
                    <td>56</td>
                    <td>kisalPerera@gmail.com</td>
                    <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>John</td>
                    <td>Thornton</td>
                    <td>56</td>
                    <td>JohnThornton@gmail.com</td>
                    <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Hasitha</td>
                    <td>Wickramasinghe</td>
                    <td>41</td>
                    <td>hasithaWickramasinghe@gmail.com</td>
                    <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Kulesha</td>
                    <td>Senanayaka</td>
                    <td>26</td>
                    <td>KuleshaWickramasinghe@gmail.com</td>
                    <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
                  </tr>
                </tbody>
              </Table>

            </div>



          </div>
        </section>


        <Footer />
      </div>

    );
  }
}

