const mongoose = require("mongoose")

const featureReport = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:'String'
    }
})

module.exports = mongoose.model("FeatureReport",featureReport);