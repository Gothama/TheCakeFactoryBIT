import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import '../src/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../src/assets/vendor/icofont/icofont.min.css';
import '../src/assets/vendor/boxicons/css/boxicons.min.css';
import '../src/assets/vendor/aos/aos.css';
import '../src/assets/vendor/venobox/venobox.min.css';



import LandingPage from "./components/landingpage.component";
import Contact from "./components/contact.component";
import AllSuppliers from "./components/allSuppliers.component";
// import Account from "./components/account.component";
import About from "./components/about.component";
import SupplierAccount from './components/supplierAccount/supplierAccount.component';
import signInOut from './components/signIn.component';
import CustomerAccount from './components/customerAccount/customerAccount.component'
import AdminDashboard from './components/Admin/AdminDashboard.component'
//import signUp from './components/signUp.component';
import signUp from './components/signup2.component';
import productPagecomponent from './components/productPagecomponent';
import Login from './components/Admin/login.component';


function App() {

  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/allSuppliers" exact component={AllSuppliers} />
      <Route path="/about" exact component={About} />
      {/* <Route path="/account" exact component={Account} /> */}
      <Route path="/signIn" exact component={signInOut} />
      <Route path="/customerAccount" exact component={CustomerAccount} />
      <Route path="/supplierAccount" exact component={SupplierAccount} />
      <Route path="/Admin" exact component={AdminDashboard} />
      <Route path="/SignUp" exact component={signUp} />
      <Route path="/productPage/:cakeID" exact component={productPagecomponent} />
      <Route path="/adminlogin" exact component={Login} />
    </Router>
  );
}

export default App;

