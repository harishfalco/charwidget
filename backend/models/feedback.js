const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
    email:{
        type:String,
        requried:true,
        trim:true,
        unique:true
    },
    message:{
        type:String,
        requried:true
    }
})

module.exports = mongoose.model("Feedback",feedbackSchema)