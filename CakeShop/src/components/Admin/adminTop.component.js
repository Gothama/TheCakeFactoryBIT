import React, {Component} from 'react';
import {Navbar,Button} from 'react-bootstrap';
import image from "../../assets/img/logo.gif"


export default class AdminTop extends Component{
  
    render(){
return(
    <div>
<Navbar bg="dark" variant="dark"  style={{height:"80px"}} fixed="top">
    <div className="container" >
    <Navbar.Brand href="#home" >
    <img
        src={image}
        width="90"
        height="80"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> </Navbar.Brand>
        <Navbar.Brand href="#home">
        Administrator Dashboard
        </Navbar.Brand>
        <p style={{textAlign:"right"}}><Button variant="danger" type="file" style={{fontWeight:"bolder", fontSize:"20px" }}>Sign Out</Button></p>
    </div>
  </Navbar>
  


    </div>
);
}
}   