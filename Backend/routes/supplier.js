const express = require('express')
const router = express.Router()
const Supplier = require('../models/supplier')
const {check, validationResult }= require("express-validator");

//get all the Suppliers
router.get('/', function(req,res) {
    Supplier.find({}).then(function(c){
        console.log(c);
        res.json(c);
    }).catch(error=>{
        res.send(error.message)
    })
})
//get all the count
router.get('/count', function(req,res) {
    Supplier.find({}).then(function(c){
        console.log(c.length);
        res.json(c.length);
    }).catch(error=>{
        res.send(error.message)
    })
})
// get the supplier password for customer ID
    router.post('/supplier', function(req, res, next){
        console.log(req.body.username)
        Supplier.findOne({username:req.body.username, password:req.body.password}).then(function(c){
            console.log(c);
            if(c!==null){
                res.send({k:'successfull',supplierID:c._id})
            }
            else{
                res.send("fail")
            }
        }).catch(err=>{
            res.send("error")
        })
    })
    router.post('/fsupplier', function(req, res, next){
        console.log(req.body.username)
        Supplier.findById({_id:req.body.supplierID}).then(function(c){
            console.log(c);
            if(c!==null){
                res.send(c)
            }
            else{
                res.send("fail")
            }
        }).catch(err=>{
            res.send("error")
        })
    })

// add new supplier 
router.post('/nsupplier', 
[
    
    check('telephoneNum', "Telephone Number is needed").not().isEmpty(),
    check('address', "address Number is needed").not().isEmpty(),
    check('email', "Telephone Number is needed").isEmail(),
    check("password", "Please enter a vlaid password").isLength({min:6})
    

],
        function(req, res, next){
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.json({
                    success: false,
                    errors: errors.array()
            });
        }
           else{
            const supplier = new Supplier(req.body)
            Supplier.create(supplier).then(function(c){
                console.log("POST Request");
              res.json({
               "Data":c,
              a:"okay"});
              }).catch(err=>{
                console.log(err)
                res.send('fail' + supplier);
            });
           
           } 
      
})

//delete the supplier account
router.delete('/:supplierID', function(req,res){
    Supplier.findOneAndDelete({supplierID:req.params.supplierID}).then(function(c){
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

  
  //update the Supplier account
  router.put('/update', function(req, res, next){

    var k = {$set: {telephoneNum: req.body.telephoneNum,
     address: req.body.address,
     email: req.body.email,
     password: req.body.password,
     username:req.body.username,
     name:req.body.name}}
 
     Supplier.findByIdAndUpdate({_id:req.body.supplierID}, k ).then(function(s){
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

  

   router.get('/allDetails/:supplierID', function(req,res) {
    Supplier.find({}).then(function(c){
        console.log(c.length);
        res.json(c.length);
    }).catch(error=>{
        res.send(error.message)
    })
  })

module.exports = router