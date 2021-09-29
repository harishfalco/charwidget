
const express = require("express");
const router = express.Router();

const {check} = require("express-validator")

const {feedback} = require("../controllers/feedback")

router.post("/feedback",[
    check("email","email is needed").isEmail()
    ],feedback)

module.exports = router