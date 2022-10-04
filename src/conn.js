const mongoose =  require("mongoose");

const dotenv = require("dotenv")
// require('dotenv').config()
// require('dotenv').config({ path: '/mong.env' })
dotenv.config({path:'./config.env'})
const db = process.env.MONGO_URI

// MONGO_URI = 'mongodb+srv://shivasingh:oHxJRcd8oBkz1Pqx@cluster0.wy5izax.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db).then(()=>{console.log("connection successfull !")})
.catch((e)=>{
    console.log(e)
    console.log("no connection")
})


