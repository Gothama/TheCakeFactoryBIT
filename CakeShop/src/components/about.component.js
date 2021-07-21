import React, { Component } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundim from '../assets/img/Thecakefactory.png'
import Footer from './footer.component';
import TopBar from './topbar.component'
import Header from './header.component'
import HeroSection from './heroSection.component'
import "../assets/css/style.css"


export default class Navbar extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  render() {
    return (
      <div>
        <TopBar />
        <Header />
        <HeroSection />
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                <div className="about-img">
                  <img src={backgroundim} alt="" />
                </div>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>We Warmly Welcome You to The Cake Factory</h3>
                <p >
                  Delivering Delicious Cakes for your Doorstep
                </p>
                <p style={{ fontWeight: "bold" }} >
                  What is The Cake Factory?
                </p>
                <ul>
                  <li><i className="icofont-check-circled"></i> An Ideal Market Place for Small Scaler Cake Producers </li>
                  <li><i className="icofont-check-circled"></i> An Ideal online Shop for who seek in best delicious cakes.</li>
                  <li><i className="icofont-check-circled"></i> An Ecommerce experience only for cakes.</li>
                  <li><i className="icofont-check-circled"></i> Buyers can contact the cake producer and make customizations.</li>
                </ul>

              </div>
            </div>

          </div>
        </section>
        <Footer />
      </div>

    );
  }
}

