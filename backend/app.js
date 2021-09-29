require("dotenv").config()

const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const mongoose = require("mongoose")

// *MIDDLEWARES
app.use(express.json())
app.use(cookieParser())
app.use(cors())

const feedBack = require("./routes/feedback")
const bugReport = require("./routes/bugReport")
const faq = require("./routes/faq")
const featureReport = require("./routes/featureReport")
const contactDetails = require("./routes/contactDetails")

// *ROUTES
app.use("/api",feedBack);
app.use("/api",bugReport);
app.use("/api",faq)
app.use("/api",featureReport)
app.use("/api",contactDetails)



// *DATABASE CONNECTIONS
mongoose.connect(process.env.DATABASE,
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(
    ()=>{
        console.log('DB CONNECTED');
    }
)
.catch(
    ()=>{
        console.log('DB NOT  CONNECTED');
    }
)


// *PORT
app.listen(process.env.PORT,()=>{
    console.log(`Running on ${process.env.PORT}`);
})