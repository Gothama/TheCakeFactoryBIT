import React, { Component } from 'react';
import "../../assets/css/signInSignUp.css"
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default class Login extends Component {
  
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      spassword: "",
      accountType: "Customer",
      passworderror:false,
      passworderror1:false
    }
  }

  onChangePassword = (event) => {
    let p = event.target.value;
    if(!passregex.test(p)){
      this.setState({
        passworderror:true
      })
      console.log("Error")
    }
    else{
        this.setState({
      password: event.target.value,
      passworderror:false
    })
    }
  
  }
  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onChangesPassword = (event) => {
    let p = event.target.value;
    if(!passregex.test(p)){
      this.setState({
        passworderror1:true
      })
      console.log("Error")
    }
    else{
        this.setState({
      spassword: event.target.value,
      passworderror1:false
    })
    }
  
  }

  onChangeAccountType = (event) => {
    this.setState({
      accountType: event.target.value
    })
    console.log(this.state.accountType)
  }
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



  handleSignIn = event => {
    event.preventDefault();
    if(this.state.username === "Admin" && this.state.password==="Admin1234"){
        this.successfulmessage("Welcome Admin")
        this.props.history.push('/Admin')
    }
    else{
        this.unsuccessfulmessage("Wrong username password")
    }
  }


  componentDidMount() {

  }

  render() {
    return (
      <div className="signInOutBody">

        <div className="cont">
          <div className="form1 sign-in">
            <h2 className="heading2">Sign In</h2>
            <form onSubmit={this.handleSignIn}>
              <label>
                <span>Username</span>
                <input type="text" name="username" className="input1" onChange={this.onChangeUsername} required/>
              </label>
              <label>
                <span>Password</span>
                <input type="password" name="password" className="input1" onChange={this.onChangePassword} required/>
                {this.state.passworderror ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Password should contain eight characters, at least one letter and one number</div>
            :null}
              </label>
              <button className="submit button1" type="submit">Sign In</button>
            </form>
          
          

          </div>

          <div className="sub-cont">
            <div className="img">
              <div className="img-text m-up">
                <h2 className="heading2">New here?</h2>
                <p>Sign up and discover great amount of new opportunities!</p>
              </div>
              <div className="img-text m-in">
                <h2 className="heading2">One of us?</h2>
                <p>If you already has an account, just sign in. We've missed you!</p>
              </div>
              <div className="img-btn">
                <span className="m-up">Sign Up</span>
                <span className="m-in">Sign In</span>
              </div>
            </div>

          </div>
        </div>
        <script type="text/javascript" src="script.js"></script>

      </div>

    );
  }
}

