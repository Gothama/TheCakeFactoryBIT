const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({

    telephoneNum: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
   
    password:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    registeredDate:{
        type:Date,
        required:true,
        default:Date.now
    }
});

module.exports = mongoose.model('Supplier', supplierSchema);