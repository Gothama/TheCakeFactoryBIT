const express = require('express')
const router = express.Router()
const Cakes = require('../models/cake')



//get number of cake models
router.get('/k', function(req,res) {
  Cakes.find({}).then(function(c){
      console.log(c.length);
      res.json(c.length);
  }).catch(error=>{
      res.send(error.message)
  })
})

//get the cake model details
router.get('/details/:cakeID', function(req,res) {
  Cakes.findById({_id:req.params.cakeID}).then(function(c){
      console.log(c);
      res.send(c);
  }).catch(error=>{
      res.send(error.message)
  })
})

//delete the cake model details
router.delete('/:cakeID', function(req,res){
  Cakes.findOneAndDelete({_id:req.params.cakeID}).then(function(c){
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


//add new cake
router.post('/ncake', function(req, res, next){
           const cake = new Cakes(req.body)
            Cakes.create(cake).then(function(c){
                console.log(c);
              res.json("Successfull");
              }).catch(err=>{
                console.log(err)
                res.send("Fail");
            });
           
           
      
})

//all cakes of a certain supplier
router.get('/baker/:supplierID', function(req,res) {
  Cakes.find({supplierID:req.params.supplierID}).then(function(c){
      console.log(c);
      res.json(c);
  }).catch(error=>{
      res.send(error.message)
  })
})

//get all the cake models
router.get('/', function(req,res) {
  Cakes.find({}).then(function(c){
      console.log(c.length);
      console.log(c);
      res.send(c);
  }).catch(error=>{
      res.send(error.message)
  })
})






module.exports = router