import React, { Component } from 'react';
import "aos/dist/aos.css";
import "../assets/css/style.css"
import CakeTile from './caketile.component';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:9020/cakes/`
})


export default class WhyUs extends Component {
  state = {
    cakes: []
  }
  constructor() {
    super();
    api.get('/', {
      params: {
        _limit: 3
      }
    }).then(res => {
      console.log(res.data)
      this.setState({ cakes: res.data })
    })
  }


  render() {
    return (
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Our Cake Store</h2>
            <p>Delicious Cakes Supplied by our suppliers</p>
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

    );
  }
}

