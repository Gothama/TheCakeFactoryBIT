import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';



export default class AllCustomers extends Component{
  state={
    customers:[]
  }
  constructor(){
    super();
    this.getAllcustomers();
  }

  getAllcustomers(){
    axios.get('http://localhost:9020/customer/').then(res=>{
        console.log(res);
        this.setState({ customers:res.data });
        //window.alert("Okay");
    }).catch(err => console.log(err));
  }


  
    render(){
return(

<div>

    <div style={{paddingTop:"50px"}} >

<div style={{/*paddingTop:"100px" ,*/ paddingBottom:"100px",width:"100%" }}>


<Table striped bordered hover variant="dark" >
  <thead >
    <tr >
      <th >#</th>
    
      <th style={{textAlign:"center"}}>Customer ID</th>
      <th style={{textAlign:"center"}}>Customer Name</th>
        <th style={{textAlign:"center"}}>Telephone Number</th>
        <th style={{textAlign:"center"}}>Email</th>  
        <th style={{textAlign:"center"}}>Address</th>
      <th style={{textAlign:"center"}}>Password</th>
    
     
    </tr>
  </thead>
  <tbody>
  { this.state.customers.map(customer => 
    <tr>
      <td>1</td>
     
      <td>{customer._id}</td>
      <td>{customer.name}</td>
      <td>{customer.telephoneNum}</td>
      <td>{customer.email}</td>
      <td>{customer.address}</td>
      <td>{customer.password}</td>
      
      <td><Button variant="danger" >Cancel</Button> </td>
    </tr>
  )}
  </tbody>
</Table>
</div>
</div>


    </div>
);
}
}   