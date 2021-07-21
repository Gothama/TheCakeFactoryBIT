
import React, {Component} from 'react';
import AdminTop from './adminTop.component';
import SideNav from './SideNav.component';


export default class AdminDashboard extends Component{
  
    render(){
return(

<div style={{backgroundColor:"purple", height:"100vh"}}>
<AdminTop/>

<div class="row" style={{paddingTop:"100px", paddingLeft:"80px"}}>
    {/* <div class="col-2">*/}
       <SideNav/>
   {/* </div>*/}
   {/*  <div class="col-10">
     <AdminAllCustomers/>
    </div>*/}
    
  </div>


</div>
);
}
} 