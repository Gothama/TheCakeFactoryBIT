const nodemailer = require('nodemailer');
const express = require('express')
const router = express.Router()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    pass: 'add password',
    user: 'add email address' 
  }
});

router.post("/contact", function (req, res) {
    const mailOptions = {
      from: 'email address',
      to: 'email address',
      subject: 'Cake Order',
      text: 'Your Cake order is successfuly made'
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.json({ "status": "Unsuccessfull" })
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ 'Email sent: ': info.response, "status": "Okay" })
      }
    });
  })

  
module.exports = router