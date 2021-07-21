import React, { Component } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from 'sweetalert2'
import "../assets/css/style.css"
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class HeroSection extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true
    });

  }



  render() {
    return (
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8">
              <h1>Welcome to <span>The Cake Factory</span></h1>
              <h2>Delivering great cakes to your door step from bakers around Srilanka!</h2>
              <div className="btns">
                {localStorage.getItem("loggedIn") === "loggedIn" ? <link to=""></link> : <Link to="/SignUp"
                  className="btn-menu animated fadeInUp scrollto">Sign Up</Link>}
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

