const express = require("express")
 const app = express();
 const dotenv = require("dotenv");
 const mongoose = require("mongoose")
 dotenv.config()

 mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
 }).then(console.log("Connected database success")).catch((error)=>console.log(error))

 app.use("/",(req,res)=>{
    console.log("test server")
 })
 app.listen("5000", ()=>{
    console.log("backend is running")
 })