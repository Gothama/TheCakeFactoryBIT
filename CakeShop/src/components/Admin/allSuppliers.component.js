import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';



export default class AllSuppliers extends Component{
  state={
    suppliers:[]
  }
  constructor(){
    super();
    this.getAllcustomers();
  }

  getAllcustomers(){
    axios.get('http://localhost:9020/supplier/').then(res=>{
        console.log(res);
        this.setState({ suppliers:res.data });
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
    
      <th style={{textAlign:"center"}}>Supplier ID</th>
      <th style={{textAlign:"center"}}>Supplier Name</th>
        <th style={{textAlign:"center"}}>Telephone Number</th>
        <th style={{textAlign:"center"}}>Email</th>  
        <th style={{textAlign:"center"}}>Address</th>
      <th style={{textAlign:"center"}}>Password</th>
    
     
    </tr>
  </thead>
  <tbody>
  { this.state.suppliers.map(supplier => 
    <tr>
      <td>1</td>
     
      <td>{supplier._id}</td>
      <td>{supplier.name}</td>
      <td>{supplier.telephoneNum}</td>
      <td>{supplier.email}</td>
      <td>{supplier.address}</td>
      <td>{supplier.password}</td>
      
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