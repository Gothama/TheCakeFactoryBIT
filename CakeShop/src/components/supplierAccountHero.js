import React, { Component } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from 'sweetalert2'
import "../assets/css/style.css"
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import img1 from "../assets/img/supplierHeader.jpg";


export default class SupplierAccountHero extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true
    });

  }

  signUp() {

    const { value: formValues } = Swal.fire({
      title: 'Sign Up',
      html:
        '<input type ="text" id="swal-input1" class="swal2-input" value="Name" required>' +
        '<input type ="text" id="swal-input2" class="swal2-input" value="Telephone" required>' +
        '<input type ="text" id="swal-input3" class="swal2-input" value="Username" required>' +
        '<input type ="password" id="swal-input4" class="swal2-input"value="Password" required>' +
        '<input type ="email" id="swal-input5" class="swal2-input"value="email@h.com" required>' +
        '<textarea id="swal-input6" class="swal2-input"value="Address" required>Address' + '</textarea>' +
        '<!--<input type="submit" id="submit" value="submit" style="color:white; background-color:blue">-->',
      focusConfirm: false,
      confirmButtonText: 'Sign In',
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          //window.alert(document.getElementById('swal-input1').value)
        ]
      }
    }).then(value => {
      var name = document.getElementById('swal-input1').value;
      var telephone = document.getElementById('swal-input2').value
      var username = document.getElementById('swal-input3').value
      var password = document.getElementById('swal-input4').value
      var email = document.getElementById('swal-input5').value
      var address = document.getElementById('swal-input6').value
      if (name != "" && telephone != "" && username != "" && password != "" && email != "" && address != "") {
        const user = {

          userID: name,
          userName: username,
          telephoneNum: telephone,
          address: address,
          email: email,
          password: password
        };
        axios.post("http://localhost:9020/users/nuser", user)
          .then(res => {
            console.log(res)
            console.log("okay");
            localStorage.setItem("username", username);
            localStorage.setItem("loggedIn", "loggedIn");

            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            //var k = document.getElementById('swal-input1').value;
            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            })



            window.location.href = "/"
          })
          .catch(err => {
            console.log(err)

          }
          );
      }
      else {
        console.log("wrong")
        {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: 'Signed in unsuccessfully'
          })
        }
      }
    })


  };

  render() {
    return (


      <div >

        <div className="row" >

          <Card className="bg-dark text-white" >
            <Card.Img src={img1} alt="Card image" style={{ width: "230vh" }} />
            <div className="container">
              <Card.ImgOverlay style={{ paddingTop: "50vh", paddingLeft: "25vh" }}>

                <Card.Title style={{ color: "white", fontSize: "40px", lineHeight: "80px", fontWeight: "bolder" }}>Supplier Dashboard</Card.Title>

                {/*<Button variant="danger">Add New Blog</Button>*/}
              </Card.ImgOverlay></div>
          </Card>
        </div>

      </div>



    );
  }
}