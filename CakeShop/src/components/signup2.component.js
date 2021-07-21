import React, { Component } from 'react';
import "../assets/css/signInSignUp.css"
import axios from 'axios';
import Swal from 'sweetalert2'


const apiS = axios.create({
  baseURL: `http://localhost:9020/supplier/nsupplier`
})

const apiC = axios.create({
  baseURL: `http://localhost:9020/customer/ncustomer`
})

const passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneregex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const nameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export default class signup2 extends Component {
  state = {
    sname: "",
    saddress: "",
    susername: "",
    spassword: "",
    smobile: "",
    semail: "",
    cname: "",
    caddress: "",
    cusername: "",
    cpassword: "",
    cmobile: "",
    cemail: "",
    phoneerrors: false,
    phoneerrorc: false,
    nameerrorc: false,
    nameerrors: false,
    emailerrors: false,
    emailerrorc: false,
    passworderrors: false,
    passworderrorc: false

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
    let p = event.target.value
    if (!passregex.test(p)) {
      this.setState({
        passworderrorc: true
      })
    }
    else {
      this.setState({ cpassword: event.target.value, passworderrorc: false })
    }
  }

  onChangeSPassword = (event) => {
    event.preventDefault();
    let p = event.target.value
    if (!passregex.test(p)) {
      this.setState({
        passworderrors: true
      })
    }
    else {
      this.setState({ spassword: event.target.value, passworderrors: false })
    }
  }

  onChangeCustomerUsername = (event) => {
    event.preventDefault();
    this.setState({ cusername: event.target.value })

  }

  onChangeSupplierUsername = (event) => {
    event.preventDefault();
    this.setState({ susername: event.target.value })

  }
  onChangeCName = (event) => {
    event.preventDefault();
    let n = event.target.value
    if (!nameregex.test(n)) {
      this.setState({ nameerrorc: true })
    }
    else {
      this.setState({ cname: event.target.value, nameerrorc: false })
    }


  }
  onChangeSName = (event) => {
    event.preventDefault();
    let n = event.target.value
    if (!nameregex.test(n)) {
      this.setState({ nameerrors: true })
    }
    else {
      this.setState({ sname: event.target.value, nameerrors: false })
    }

  }
  onChangeSAddress = (event) => {
    event.preventDefault();
    this.setState({ saddress: event.target.value })

  }
  onChangeCAddress = (event) => {
    event.preventDefault();
    this.setState({ caddress: event.target.value })

  }
  onChangeCMobile = (event) => {
    event.preventDefault();
    let m = event.target.value
    if (!phoneregex.test(m)) {
      this.setState({ phoneerrorc: true })
    }
    else {
      this.setState({ cmobile: event.target.value, phoneerrorc: false })
    }


  }
  onChangeSMobile = (event) => {
    event.preventDefault();
    let m = event.target.value
    if (!phoneregex.test(m)) {
      this.setState({ phoneerrors: true })
    }
    else {
      this.setState({ smobile: event.target.value, phoneerrors: false })
    }


  }
  onChangeSEmail = (event) => {
    event.preventDefault();
    let m = event.target.value
    if (!emailregex.test(m)) {
      this.setState({ emailerrors: true })
    }
    else {
      this.setState({ semail: event.target.value, emailerrors: false })
    }


  }
  onChangeCEmail = (event) => {
    event.preventDefault();
    let m = event.target.value
    if (!emailregex.test(m)) {
      this.setState({ emailerrorc: true })
    }
    else {
      this.setState({ cemail: event.target.value, emailerrorc: false })
    }

  }
  handleSubmitS = event => {
    event.preventDefault();
    apiS.post(`/`, {
      name: this.state.sname,
      address: this.state.saddress,
      username: this.state.susername,
      password: this.state.spassword,
      telephoneNum: this.state.smobile,
      email: this.state.semail
    })
      .then(res => {
        console.log(res.data);
        if (res.data.a === "okay") {
          localStorage.removeItem("loggedIn");
          localStorage.setItem("loggedIn", "loggedIn")
          localStorage.setItem("supplierID", res.data.id);
          localStorage.setItem("AccountType", "Supplier");
          console.log("verified");
          this.props.history.push('/');
          window.location.reload();
          this.successfulmessage("Signed Up successfully as a supplier")
        }
        else {
          this.unsuccessfulmessage("Unsuccessfull")
        }
      })
  }

  handleSubmitC = event => {
    event.preventDefault();
    apiC.post(`/`, {
      name: this.state.cname,
      address: this.state.caddress,
      username: this.state.cusername,
      password: this.state.cpassword,
      telephoneNum: this.state.cmobile,
      email: this.state.cemail
    })
      .then(res => {
        console.log(res.data);
        if (res.data.status === "okay") {
          localStorage.removeItem("loggedIn");
          localStorage.setItem("loggedIn", "loggedIn")
          localStorage.setItem("customerID", res.data.id);
          localStorage.setItem("AccountType", "Customer");
          console.log("verified");
          this.props.history.push('/');
          window.location.reload();
          this.successfulmessage("Signed Up successfully as a customer")
        }
        else {
          this.unsuccessfulmessage("Unsuccessfull")
          window.alert("Unsuccessfull")
        }
      })
  }

  componentDidMount() {
    document.querySelector('.img-btn').addEventListener('click', function () {
      document.querySelector('.contS').classList.toggle('s-signup')
    }
    );
  }
  render() {
    return (
      <div>
        <div className="signInOutBody">

          <div className="contS" style={{ height: "700px" }} >
            <div className="form1 sign-in" style={{ paddingTop: "2px" }}>
              <h2 className="heading2">Sign In</h2>
              <form onSubmit={this.handleSubmitS}>
                <label>
                  <span>Name</span>
                  <input type="text" class="input1" required onChange={this.onChangeSName} required
                  />
                  {this.state.nameerrors ?
                    <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid Name</div>
                    : null}
                </label>
                <label>
                  <span>Address</span>
                  <input type="text" class="input1" required onChange={this.onChangeSAddress} required
                  />

                </label>
                <label>
                  <span>Username</span>
                  <input type="text" class="input1" required onChange={this.onChangeSupplierUsername} required
                  />

                </label>

                <label>
                  <span>Password</span>
                  <input type="text" class="input1" required onChange={this.onChangeSPassword} required
                  />
                  {this.state.passworderrors ?
                    <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Password should contain eight characters, at least one letter and one number</div>
                    : null}

                </label>
                <label>
                  <span>Mobile No</span>
                  <input type="text" class="input1" required onChange={this.onChangeSMobile} required
                  />
                  {this.state.phoneerrors ?
                    <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid number</div>
                    : null}
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" class="input1" required onChange={this.onChangeSEmail} required
                  />
                  {this.state.emailerrors ?
                    <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid Email address</div>
                    : null}
                </label>

                <button className="submit button1" type="submit" >Sign UpS</button>

              </form>
            </div>

            <div className="sub-cont">
              <div className="img">
                <div className="img-text m-up">
                  <h2 className="heading2">Are you a customer?</h2>
                  <p>Sign Up and discover great amount of new opportunities!</p>
                </div>
                <div className="img-text m-in">
                  <h2 className="heading2">Are you a supplier</h2>
                  <p>Sign Up and discover great amount of new opportunities!</p>
                </div>
                <div className="img-btn">
                  <span className="m-up">Sign Up</span>
                  <span className="m-in">Sign Up</span>
                </div>
              </div>

              <div className="form1 sign-up" style={{ paddingTop: "5px" }}>
                <h2 className="heading2">Sign Up</h2>
                <form onSubmit={this.handleSubmitC}>
                  <label>
                    <span>Name</span>
                    <input type="text" class="input1" required onChange={this.onChangeCName} required
                    />
                    {this.state.nameerrorc ?
                      <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid Name</div>
                      : null}
                  </label>
                  <label>
                    <span>Address</span>
                    <input type="text" class="input1" required onChange={this.onChangeCAddress} required
                    />

                  </label>
                  <label>
                    <span>Username</span>
                    <input type="text" class="input1" required onChange={this.onChangeCustomerUsername} required
                    />

                  </label>

                  <label>
                    <span>Password</span>
                    <input type="text" class="input1" required onChange={this.onChangeCPassword} required
                    />

                  </label>
                  <label>
                    <span>Mobile No</span>
                    <input type="text" class="input1" required onChange={this.onChangeCMobile} required
                    />
                    {this.state.phoneerrorc ?
                      <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid number</div>
                      : null}
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" class="input1" required onChange={this.onChangeCEmail} required
                    />
                    {this.state.emailerrorc ?
                      <div className="errorMsg" style={{ color: "red", fontSize: "11px" }}>Enter a valid Email address</div>
                      : null}
                  </label>

                  <button className="submit button1" type="submit" >Sign UpC</button>

                </form>
              </div>
            </div>
          </div>
          <script type="text/javascript" src="script.js"></script>

        </div>
      </div>
    )
  }
}
