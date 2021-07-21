import React, { Component } from 'react';
import "aos/dist/aos.css";
import "../assets/css/style.css"
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import facebookIcon from '@iconify/icons-raphael/facebook';

import linkedinIcon from '@iconify/icons-grommet-icons/linkedin';

import instagramWithCircle from '@iconify/icons-entypo-social/instagram-with-circle';


export default class Footer extends Component {

  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>The Cake Factory</h3>
                  <p>
                    223/K <br />
                    University of Moratuwa, Sri Lanka<br /><br />
                    <strong>Phone:</strong> +97123213123<br />
                    <strong>Email:</strong> cakefactory@gmail.com<br />
                  </p>
                  <div className="social-links mt-3">
                    <Link to="#" ><i><Icon icon={facebookIcon} /></i></Link>
                    <Link to="#" ><i><Icon icon={instagramWithCircle} /></i></Link>
                    <Link to="#" class="instagram"><i><Icon icon={linkedinIcon} /></i></Link>

                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">

              </div>

              <div className="col-lg-3 col-md-6 footer-links">

              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>register with our news letters</p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>

              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>The Cake Factory</span></strong>. All Rights Reserved
          </div>
          <div className="credits">

            Designed by <Link to="/adminlogin">Gothama Rajawasam</Link>
          </div>
        </div>
      </footer>

    );
  }
}

