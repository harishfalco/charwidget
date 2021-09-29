const express = require("express")
const router = express.Router();

const {check} = require("express-validator")

const {bugReport} = require("../controllers/bugReport")

router.post("/bugReport",[
    check("email","email is needed").isEmail()
],bugReport)


module.exports = router
