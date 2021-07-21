const express = require('express')
const router = express.Router()
const Orders = require('../models/orders')

//get all the orders in the system
router.get('/', function(req,res) {
    Orders.find({}).populate("supplierID").populate("customerID").populate("cakeID").then(function(c){
        console.log(c);
        res.json(c);
    }).catch(error=>{
        res.send(error.message)
    })
})

//get the order details in the system
router.post('/getmoredetails', function(req,res) {
    Orders.findById({_id:req.body.orderID}).populate("supplierID").populate("customerID").populate("cakeID").then(function(c){
        console.log(c);
        res.json(c);
    }).catch(error=>{
        res.send(error.message)
    })
})



//get all the count
router.get('/count', function(req,res) {
    Orders.find({}).then(function(c){
        console.log(c.length);
        res.json(c.length);
    }).catch(error=>{
        res.send(error.message)
    })
  })

//get all the orders of a certain customer
router.get('/customerID/:customerID', function(req,res) {
    Orders.find({customerID:req.params.customerID}).populate("cakemodelID").then(function(c){
        console.log(c.length);
        console.log(c);
        if(c.length==0){
            res.json("null");
        }
        else{
            res.json(c);
        }
        
    }).catch(error=>{
        res.send(error.message)
    })
  })

//get all the orders of a certain supplier
router.get('/supplierID/:supplierID', function(req,res) {
    Orders.find({supplierID:req.params.supplierID}).populate("cakemodelID").then(function(c){
        console.log(c.length);
        console.log(c);
        if(c.length==0){
            res.json("null");
        }
        else{
            res.json(c);
        }
        
    }).catch(error=>{
        res.send(error.message)
    })
  })


// add a order
router.post('/norder', function(req, res, next){
    const order = new Orders(req.body)
    Orders.create(order).then(function(c){
         console.log("POST Request");
       res.json({
        "Data":c,
       "a":"okay"});
       }).catch(err=>{
         console.log(err)
         res.send('fail' + order);
     })
    })
     
router.delete('/delete/:orderID', function(req,res){
        Orders.findOneAndDelete({_id:req.params.orderID}).then(function(c){
            if(c===null){
                res.send("Nothing to delete");
            }
            else{
                res.send("deleted");}
          })
        .catch(err=>{
            res.send('Error ' + err)
        })
      }  ) 









//delete the order
/*router.delete('/:orderID', async(req,res) => {
    try{
            const orderID = req.params.orderID;
           const order = await Orders.findByIdAndDelete({_id:orderID})
           //res.json("Successfull")
           res.send("Successfull")
    }catch(err){
        res.send('Error ' + err)
    }
  })


router.post('/:orderID', function(req,res) {


   const orderID = req.params.orderID;
        
        Orders.findByIdAndDelete({_id:orderID})
        .then(userValid =>{
            res.send("Successfull")
        }).catch(err=>{
        res.status(500).json(err);
    })
});*/


module.exports = router