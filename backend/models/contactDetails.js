const mongoose = require("mongoose")

const contact = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        requried:true
    },
    phone:{
        type:Number,
        unique:true,
        requried:true
    },
    address:{
        type:String,
        requried:true
    }
})

module.exports = mongoose.model("ContactDetails",contact) 