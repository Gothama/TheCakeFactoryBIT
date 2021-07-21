import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import "aos/dist/aos.css";

import "../assets/css/style.css"

export class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Our Customers</h2>
            <p>Testimonials of The Cake Factory Users</p>
          </div>

          <Carousel >

            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <div className="testimonial-item col-md-6">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    This is positive testimonial given by one of our customer
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  {/* <img src={img} className="testimonial-img" alt=""/> */}
                  <h3>Saman Perera</h3>
                  <h4>Happy Customer</h4>
                </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <div className="testimonial-item col-md-6">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    This is positive testimonial given by one of our customer
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  {/* <img src={img} className="testimonial-img" alt=""/> */}
                  <h3>Mahinda Perera</h3>
                  <h4>Cake Supplier</h4>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <div className="testimonial-item col-md-6">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    This is positive testimonial given by one of our customer
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  {/* <img src={img} className="testimonial-img" alt=""/> */}
                  <h3>Gayan Jayakodi</h3>
                  <h4>Happy Customers</h4>
                </div>
              </div>
            </Carousel.Item>

          </Carousel>



        </div>
      </section>





    )
  }
}
