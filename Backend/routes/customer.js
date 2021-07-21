const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')
const {check, validationResult }= require("express-validator");


//get all the customers
router.get('/', function(req,res) {
    Customer.find({}).then(function(c){
        console.log(c);
        res.json(c);
    }).catch(error=>{
        res.send(error.message)
    })
})


router.get('/count', function(req,res) {
    Customer.find({}).then(function(c){
        console.log(c.length);
        res.json(c.length);
    }).catch(error=>{
        res.send(error.message)
    })
})


router.post('/customer', function(req, res, next){
    console.log(req.body.username)
    Customer.findOne({username:req.body.username, password:req.body.password}).then(function(c){
        console.log(c);
        if(c!==null){
            res.send({k:'successfull',customerID:c._id})
        }
        else{
            res.send('fail')
        }
    }).catch(err=>{
        res.send('error')
    })
})


router.post('/fcustomer', function(req, res, next){

    Customer.findById({_id:req.body.customerID}).then(function(c){
        console.log(c);
        res.send(c)
    }).catch(err=>{
        res.send('error')
    })
})

router.post('/check', 
        check('email').isEmail().normalizeEmail(),
        check('password').isLength({
                min: 6
        }),
        function(req, res, next){
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.json({
                    success: false,
                    errors: errors.array()
            });
        }
        console.log("Successfull")
        //COde body
        res.json({
            success: true,
            message: 'successfull',
        })
})

router.post('/ncustomer', 
[

    check('telephoneNum', "Telephone Number is needed").not().isEmpty(),
    check('address', "address is needed").not().isEmpty(),
    check('email', "Email is needed").isEmail(),
    check("password", "Please enter a vlaid password").isLength({min:6})

],
        function(req, res){
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.json({
                    success: false,
                    errors: errors.array()
            });
        }
           else{
            const customer = new Customer({
                telephoneNum: req.body.telephoneNum,
                address: req.body.address,
                email: req.body.email,
                password: req.body.password,
                username:req.body.username,
                name:req.body.name
            })
            Customer.create(customer).then(function(c){
                console.log(c);
              res.json({"status":"okay" , "id" : c._id});
              }).catch(err=>{
                console.log(err)
                res.send(err);
            });
           
           } 
      
})



//delete the customer account
router.delete('/:customerID', function(req,res){
    Customer.findOneAndDelete({customerID:req.params.customerID}).then(function(c){
        if(c===null){
            res.send("Nothing to delete");
        }
        else{
            res.send("deleted");}
      })
    .catch(err=>{
        res.send('Error ' + err)
    })
  })
  

  //update the customer account
  router.put('/update', function(req, res, next){

   var k = {$set: {telephoneNum: req.body.telephoneNum,
    address: req.body.address,
    email: req.body.email,
    password: req.body.password,
    username:req.body.username,
    name:req.body.name}}

    Customer.findByIdAndUpdate({_id:req.body.customerID}, k ).then(function(c){
            console.log(req.body);
            res.send("Successfull");
    }).catch(err=>{
        console.log(err)
        res.send('fail' + err);
    }).catch(err=>{
        console.log(err)
        res.send('fail' + err);
    });
  })

  
  

module.exports = router