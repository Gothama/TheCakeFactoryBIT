import React, { Component } from 'react';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import img1 from "../assets/img/logo.gif"

import "../assets/css/style.css"


export default class Header extends Component {

  logout() {
    localStorage.clear();
    window.location.href = '/';
    localStorage.removeItem("supplierID");
    localStorage.removeItem("customerID");
    localStorage.removeItem("password");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("AccountType");
  }






  render() {
    return (
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <a href="/" className="logo mr-auto"><img src={img1} alt="" className="img-fluid" /></a>
          <h1 className="logo mr-auto" style={{ textAlign: "left" }}><a href="/" >The Cake Factory</a></h1>



          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li ><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>

              <li><Link to="/allSuppliers">All Cakes</Link></li>
              <li><Link to="/contact">Contact</Link></li>

              {localStorage.getItem("loggedIn") === "loggedIn" && localStorage.getItem("AccountType") === "Customer" ? <li ><Link to="/customerAccount">Account</Link></li> : <li></li>}
              {localStorage.getItem("loggedIn") === "loggedIn" && localStorage.getItem("AccountType") === "Supplier" ? <li ><Link to="/supplierAccount">Account</Link></li> : <li></li>}
              {localStorage.getItem("loggedIn") === "loggedIn" ? <li onClick={this.logout} className="book-a-table text-center"><a href="#book-a-table">Sign Out</a></li> : <li className="book-a-table text-center"><Link to="/signIn">Sign In</Link></li>}




            </ul>
          </nav>

        </div>
      </header>

    );
  }
}

