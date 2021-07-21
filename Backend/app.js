const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url ='add mongodb URI'

const cors=require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const con = mongoose.connection

con.once('open' , ()=>{
    console.log('connected...')
})

app.use(express.json())

const orderingRouter = require('./routes/ordering')
app.use('/ordering' , orderingRouter)


const cakesRouter = require('./routes/cakes')
app.use('/cakes' , cakesRouter)

const customerRouter = require('./routes/customer')
app.use('/customer' , customerRouter)

const supplierRouter = require('./routes/supplier')
app.use('/supplier' , supplierRouter)

const userRouter = require('./routes/user')
app.use('/user' , userRouter)

const emailRouter = require('./routes/email')
app.use('/email' , emailRouter)

app.listen(process.env.PORT || 9020,()=>{
    console.log('server started on 9020')
})