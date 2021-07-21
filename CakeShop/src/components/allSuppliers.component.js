import React, { Component } from 'react';
import "aos/dist/aos.css";
import Footer from './footer.component';
import TopBar from './topbar.component'
import Header from './header.component'
import "../assets/css/style.css"
import HeroSection from './heroSection.component';
import CakeTile from './caketile.component';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:9020/cakes/`
})

export default class AllSuppliers extends Component {
  state = {
    cakes: []
  }
  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res)
      if (res.data === null) {
        this.setState({ cakes: [] })
      }
      else {
        this.setState({ cakes: res.data })
      }


    })
  }



  render() {
    return (
      <div>
        <TopBar />
        <Header />
        <HeroSection />
        <section id="why-us" className="why-us" style={{ paddingTop: "170px" }}>
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Why Us</h2>
              <p>All Cake Models Added by our Suppliers</p>
            </div>
            <div className="row">
              {this.state.cakes.map(cake =>


                <CakeTile key={cake.id} cImageUrl={cake.cImageUrl}
                  addedDate={cake.addedDate}
                  cakeName={cake.cakeName}
                  price={cake.price}
                  id={cake._id}
                  ingrediants={cake.ingrediants}
                  description={cake.description}
                />

              )}
            </div>
          </div>
        </section>
        <Footer />
      </div>

    );
  }
}