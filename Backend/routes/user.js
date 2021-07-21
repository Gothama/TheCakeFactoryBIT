const express = require('express')
const router = express.Router()
const Supplier = require('../models/supplier')
const Customer = require('../models/customer')

// get the supplier password for customer ID
router.get('/:userID', async(req,res) => {
    try{
            const userID = req.params.userID;
           const data2 = Supplier.find({supplierID:userID})
           const data1 =  Customer.find({customerID:userID})
           if( data1.json === "[]"){
               res.json(data2);
           }
           else if (data2.json === "[]"){
            res.json(data1);
           }
            
    }catch(err){
        res.send('Error ' + err)
    }
})




module.exports = router