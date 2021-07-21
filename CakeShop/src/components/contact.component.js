import React, { Component } from 'react';

import "aos/dist/aos.css";

import Footer from './footer.component';
import TopBar from './topbar.component'
import Header from './header.component'
import HeroSection from './heroSection.component'
import "../assets/css/style.css"
import { Icon } from '@iconify/react';
import location12Filled from '@iconify/icons-fluent/location-12-filled';
import emailFill from '@iconify/icons-eva/email-fill';
import phoneCallFill from '@iconify/icons-eva/phone-call-fill';
import bxsTimeFive from '@iconify/icons-bx/bxs-time-five';


export default class Contact extends Component {

  render() {
    return (
      <div>
        <TopBar />
        <Header />
        <HeroSection />

        <section id="contact" class="contact">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>
          </div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15847.168539552393!2d79.900867!3d6.7951276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7bd32721ab02560e!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1626363403764!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
          <div data-aos="fade-up">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15847.168539552393!2d79.900867!3d6.7951276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7bd32721ab02560e!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1626363403764!5m2!1sen!2slk" frameBorder="0" style={{ border: '0', width: '100%', height: '350px', allowfullscreen: 'allowfullscreen' }}></iframe>
            {/*<iframe style={{border:'0', width: '100%', height: '350px'}} src={{"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"}} frameborder="0" allowfullscreen></iframe>*/}
          </div>

          <div className="container" data-aos="fade-up">

            <div className="row mt-5">

              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i><Icon icon={location12Filled} /></i>
                    <h4>Location:</h4>
                    <p>A/201, Galle Road, Moratuwa</p>
                  </div>

                  <div className="open-hours">
                    <i ><Icon icon={bxsTimeFive} /></i>
                    <h4>Open Hours:</h4>
                    <p>
                      24/7:<br />
                      11:00 AM - 2300 PM
                    </p>
                  </div>

                  <div className="email">
                    <i><Icon icon={emailFill} /></i>
                    <h4>Email:</h4>
                    <p>infoCakeFactory@gamil.com</p>
                  </div>

                  <div className="phone">
                    <i><Icon icon={phoneCallFill} /></i>
                    <h4>Call:</h4>
                    <p>+97011234544</p>
                  </div>

                </div>

              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">

                <form action="forms/contact.php" method="post" className="php-email-form">
                  <div className="form-row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validate"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows="8" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div className="validate"></div>
                  </div>

                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>

              </div>

            </div>

          </div>
        </section>
        <Footer />
      </div>

    );
  }
}

