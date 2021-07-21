import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';

export default class Summary extends Component{
  state={
    customersCount:"",
    supplierCount:"",
    orderCount:""
  }


  constructor(){
    super();
    this.getCountCustomers();
    this.getCountSuppliers();
    this.getCountOrders();
  }

  getCountCustomers(){
    axios.get('http://localhost:9020/customer/count').then(res=>{
        console.log(res);
        const countCustomer = res.data;
        this.setState({ customersCount:res.data });
        console.log(countCustomer);
    }).catch(err => console.log(err));
  }

  getCountSuppliers(){
    axios.get('http://localhost:9020/supplier/count').then(res=>{
        console.log(res);
        this.setState({ supplierCount:res.data });
    }).catch(err => console.log(err));
  }

  getCountOrders(){
    axios.get('http://localhost:9020/ordering/count').then(res=>{
        console.log(res);
        this.setState({ orderCount:res.data });
    }).catch(err => console.log(err));
  }





    render(){
return(

<div>

    <div style={{paddingTop:"50px"}} >

<div style={{paddingBottom:"100px", marginLeft:"150px",width:"100%" }}>
<div className="row">
<Card style={{ width: '18rem', marginRight:"20px", backgroundColor:"#e7d9ea"}}>
  
  <Card.Body>
  <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/164-1640717_free-user-icon-flat-189024-download-user-icon.png"/>
    <Card.Title style={{textAlign:"center"}}>Customers</Card.Title>
    <div style={{textAlign:"center"}}>
    
    <Button variant="warning">Total Customers : {this.state.customersCount}</Button>
    </div>
  </Card.Body>
</Card>

<Card style={{ width: '18rem',marginRight:"20px", backgroundColor:"#e7d9ea"}}>
  
  <Card.Body>
  <Card.Img variant="top" src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
  <Card.Title style={{textAlign:"center"}}>Suppliers</Card.Title>
    <div style={{textAlign:"center"}}>
  
    <Button variant="warning">Total Suppliers : {this.state.supplierCount}</Button>
    </div>
  </Card.Body>
</Card>


<Card style={{ width: '18rem',marginRight:"20px" , backgroundColor:"#e7d9ea"}}>
  
  <Card.Body>
  <Card.Img variant="top" src="https://ingersollchamber.com/wp-content/uploads/2017/07/ticket-clipart-purge-clipart-ticket-85041.jpg" />
  <Card.Title style={{textAlign:"center"}}>Orders</Card.Title>
    <div style={{textAlign:"center"}}>
   
    <Button variant="warning">Total Orders : {this.state.orderCount}</Button>
    </div>
  </Card.Body>
</Card>

</div>



    </div> </div> </div>
);
}
}   