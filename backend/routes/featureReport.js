const express  = require("express")
const router = express.Router()


const {featureReport} = require("../controllers/featureReport")

router.post("/feature" , featureReport)

module.exports = router