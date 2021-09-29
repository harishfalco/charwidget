const express  = require("express")
const router = express.Router()
const { check } = require("express-validator")

const {contactDetails} = require("../controllers/contactDetails")

router.post("/contact",[
    check("email","email is needed").isEmail()
] , contactDetails)

module.exports = router
