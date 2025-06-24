const express = require('express')
const cookieParser = require('cookie-parser')
const route = require('./routes/route')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const MONGO = process.env.MONGO
const PORT = process.env.PORT


mongoose.connect(MONGO)
.then(()=>{
    console.log("Mongo is connected");    
})
.catch((e)=>{
    console.log('Mongo not connected');
})
app.use(cors({
    origin: 'http://localhost:5173', // React app URL
    credentials: true  // JWT Cookies allow karne ke liye
}))
app.use(cookieParser())
app.use(express.json()) //same as body parser
app.use('/',route)

app.listen(PORT,()=>{
    console.log("SERVER STARTED");
    
})