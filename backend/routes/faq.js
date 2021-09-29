const express  = require("express")
const router = express.Router()
const { check } = require("express-validator")

const {faq} = require("../controllers/faq")

router.post("/faq" , faq)

module.exports = router