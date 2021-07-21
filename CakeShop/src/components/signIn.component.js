import React, { Component } from 'react';
import "../assets/css/signInSignUp.css"
import image1 from "../assets/img/linkedin.png"
import image2 from "../assets/img/facebook.png"
import image3 from "../assets/img/instagram.png"
import axios from 'axios';
import Swal from 'sweetalert2'

const apiS = axios.create({
  baseURL: `http://localhost:9020/supplier/supplier`
})

const apiC = axios.create({
  baseURL: `http://localhost:9020/customer/customer`
})


export default class signInOut extends Component {



  state = {
    susername: "",
    cusername: "",
    cpassword: "",
    spassword: ""
  };


  successfulmessage = (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }
  unsuccessfulmessage = (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }


  onChangeCPassword = (event) => {
    event.preventDefault();
    this.setState({ cpassword: event.target.value })
    console.log(this.state.cpassword)
  }

  onChangeSPassword = (event) => {
    event.preventDefault();
    this.setState({ spassword: event.target.value })

  }

  onChangeCustomerUsername = (event) => {
    event.preventDefault();
    this.setState({ cusername: event.target.value })
    console.log(this.state.cusername)
  }

  onChangeSupplierUsername = (event) => {
    event.preventDefault();
    this.setState({ susername: event.target.value })

  }


  componentDidMount() {
    document.querySelector('.img-btn').addEventListener('click', function () {
      document.querySelector('.cont').classList.toggle('s-signup')
    }
    );
  }


  handleSubmitC = (event) => {
    event.preventDefault();
    console.log("okay")

    console.log(this.state.cusername + " " + this.state.cpassword)
    apiC.post("/", { username: this.state.cusername, password: this.state.cpassword })
      .then(res => {
        console.log(res);
        if (res.data.k === "successfull") {
          localStorage.removeItem("password");
          localStorage.removeItem("username");
          localStorage.removeItem("customerID");
          localStorage.removeItem("loggedIn");
          localStorage.setItem("loggedIn", "loggedIn")
          localStorage.setItem("password", this.state.cpassword);
          localStorage.setItem("username", this.state.cusername);
          localStorage.setItem("customerID", res.data.customerID);
          localStorage.setItem("AccountType", "Customer");
          console.log("verified");
          this.props.history.push('/');
          //window.location.reload();
          this.successfulmessage("Welcome customer")

        }
        else {

          this.unsuccessfulmessage("Please enter correct credentails")
          console.log("not verified");

        }
      })
      .catch(err => {
        window.alert("Error in login")
        console.log("Unsucessfull");
        window.alert("Wrong");


      })


  }
  handleSubmitS = event => {
    event.preventDefault();
    console.log("okay")

    console.log(this.state.susername + " " + this.state.spassword)
    apiS.post("/", { username: this.state.susername, password: this.state.spassword })
      .then(res => {
        console.log(res);
        if (res.data.k === "successfull") {
          localStorage.removeItem("password");
          localStorage.removeItem("username");
          localStorage.removeItem("loggedIn");
          localStorage.removeItem("supplierID");
          localStorage.setItem("loggedIn", "loggedIn")
          localStorage.setItem("password", this.state.spassword);
          localStorage.setItem("username", this.state.susername);
          localStorage.setItem("supplierID", res.data.supplierID);
          localStorage.setItem("AccountType", "Supplier");
          console.log("verified");
          this.props.history.push('/');
          //window.location.reload();
          this.successfulmessage("Welcome Supplier")
        }
        else {

          this.unsuccessfulmessage("Please enter correct credentails")
          console.log("not verified");

        }
      })
      .catch(err => {
        console.log("Unsucessfull");
        window.alert("Wrong");


      })


  }


  render() {
    return (
      <div className="signInOutBody">

        <div className="cont">
          <div className="form1 sign-in">
            <h2 className="heading2">Sign In</h2>
            <form onSubmit={this.handleSubmitS}>
              <label>
                <span>Username</span>
                <input type="text" class="input1" required onChange={this.onChangeSupplierUsername} required />

              </label>
              <label>
                <span>Password</span>
                <input type="password" class="input1" required onChange={this.onChangeSPassword} required />
              </label>
              <button className="submit button1" type="submit" >Sign In</button>
              <p className="forgot-pass">Forgot Password ?</p>
            </form>
          </div>

          <div className="sub-cont">
            <div className="img">
              <div className="img-text m-up">
                <h2 className="heading2">Are you a customer?</h2>
                <p>Sign in and discover great amount of new opportunities!</p>
              </div>
              <div className="img-text m-in">
                <h2 className="heading2">Are you a supplier</h2>
                <p>Sign in and discover great amount of new opportunities!</p>
              </div>
              <div className="img-btn">
                <span className="m-up">Sign In</span>
                <span className="m-in">Sign In</span>
              </div>
            </div>
            <div className="form1 sign-up">
              <h2 className="heading2">Sign Up</h2>
              <form onSubmit={this.handleSubmitC}>
                <label>
                  <span>Username</span>
                  <input type="text" class="input1" value={this.state.cusername} required onChange={this.onChangeCustomerUsername} required />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" class="input1" value={this.state.cpassword} required onChange={this.onChangeCPassword} required />
                </label>
                {/*<button type="button" class="button1 submit" onClick = {() => this.checkCustomer("123456" , "123456")}>Sign Up Now</button>*/}
                <button type="submit" class="button1 submit">Sign In</button>
                <p className="forgot-pass">Forgot Password ?</p>
              </form>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="script.js"></script>

      </div>

    );
  }
}

