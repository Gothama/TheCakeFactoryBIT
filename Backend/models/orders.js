const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    customerID: {
        type: mongoose.Schema.ObjectId, ref: 'Customer'
    },
    supplierID: {
        type: mongoose.Schema.ObjectId, ref: 'Supplier'
    },
    cakemodelID: {
        type: mongoose.Schema.ObjectId, ref: 'Cake'
    },
    orderDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    requiredDate:{
        type:Date,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    },
    paymentID:{
        type:String,
        required:true
    },
    sendingAddress:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Orders', ordersSchema);