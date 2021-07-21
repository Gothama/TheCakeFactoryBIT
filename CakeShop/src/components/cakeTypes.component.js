import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import "aos/dist/aos.css";
import img1 from "../assets/img/event-birthday.jpg";
import img2 from "../assets/img/event-private.jpg";
import img3 from "../assets/img/event-custom.jpg";
import "../assets/css/style.css"



export default class CakeTypes extends Component {

  render() {
    return (
      <section id="events" className="events">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Our Cakes</h2>
            <p>Our Bakers produce different types of delicious Cakes</p>
          </div>



          <Carousel>
            <Carousel.Item>
              <div className="row event-item" style={{ height: "60vh" }}>
                <div className="col-lg-6">
                  <img src={img1} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Birthday Parties</h3>

                  <p className="font-italic">
                    Our suppliers will provide the required delicious cakes to your doorstep as required
                  </p>
                  <ul>
                    <li><i className="icofont-check-circled"></i> Best delicious cakes from us for birthday parties</li>
                    <li><i className="icofont-check-circled"></i> Best delicious cakes from us for birthday parties.</li>
                    <li><i className="icofont-check-circled"></i> Best delicious cakes from us for birthday parties</li>
                  </ul>
                  <p>
                    Our suppliers will provide the required delicious cakes to your doorstep as required
                  </p>
                </div> </div>

            </Carousel.Item>
            <Carousel.Item>
              <div className="row event-item" style={{ height: "60vh" }}>
                <div className="col-lg-6">
                  <img src={img2} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Private Parties</h3>
                  <p className="font-italic">
                    Our suppliers will provide the required delicious cakes to your doorstep as required
                  </p>
                  <ul>
                    <li><i className="icofont-check-circled"></i> Best delicious cakes from us for birthday parties</li>
                    <li><i className="icofont-check-circled"></i> Best delicious cakes from us for birthday parties.</li>
                    <li><i className="icofont-check-circled"></i> Best delicious cakes from us for birthday parties</li>
                  </ul>
                  <p>
                    Our suppliers will provide the required delicious cakes to your doorstep as required
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row event-item" style={{ height: "60vh" }}>
                <div className="col-lg-6">
                  <img src={img3} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Custom Parties</h3>
                  <p className="font-italic">
                    Our suppliers will provide the required delicious cakes to your doorstep as required
                  </p>
                  <ul>
                    <li><i className="icofont-check-circled"></i> Best delicious cakes from us for birthday parties</li>
                    <li><i className="icofont-check-circled"></i> Best delicious cakes from us for birthday parties.</li>
                    <li><i className="icofont-check-circled"></i> Best delicious cakes from us for birthday parties</li>
                  </ul>
                  <p>
                    Our suppliers will provide the required delicious cakes to your doorstep as required
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

        </div>
      </section>

    );
  }
}

