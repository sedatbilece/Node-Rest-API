require('dotenv').config()//import dotenv

const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db=mongoose.connection;
db.on('error',(err)=>console.log(err));
db.once('open',()=>console.log('connected to mongodb'));



app.listen(3000,()=>{console.log("Server is running on port 3000")});

app.use(express.json());   

const subsRouter = require('./routes/subs');
app.use('/subs',subsRouter);//'localhost:3000/subs'
 
