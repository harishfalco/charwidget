const mongoose = require("mongoose")

const faq = new mongoose.Schema({
    question:{
        type:String,
        required:true,
        sparse:true
    },
    answer:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("FAQ",faq);