const mongoose = require("mongoose");

const bugReport = new mongoose.Schema({
    bug:{
        type:"String",
        requried:true,
        trim:true,
    },
    email:{
        type:"String",
        requried:true,
        trim:true
    },
    reproduce_steps:{
        type:"String",
        requried:true,
        trim:true
    }
})

module.exports = mongoose.model("BugReport",bugReport);