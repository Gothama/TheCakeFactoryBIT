import React, { Component } from 'react';
import "aos/dist/aos.css";

import Header from './header.component'
import HeroSection from './heroSection.component'

import WhyUs from './whyus.component';
import Footer from './footer.component';
import CakeTypes from './cakeTypes.component';
import "../assets/css/style.css"
import { Testimonials } from './testimonials.component';
import UserDetails from './userDetails.component';

export default class LandingPage extends Component {

    render() {
        return (
            <div>

                <Header />
                <HeroSection />
                <WhyUs />
                <UserDetails />
                <CakeTypes />

                <Testimonials />
                <Footer />

            </div>
        );
    }
}

