const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        Required:true
    },

    email:{
        type:String,
        Required:true
    },

    phone:{
        type:Number,
        Required:true
    },

    date:{
        type:Date,
        Required:true
    },
    write_text:{
        type:String,
        Required:true
    }
})


const Users =  new mongoose.model("Users",userSchema);
module.exports = Users;