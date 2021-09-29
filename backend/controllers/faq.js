const FAQ = require("../models/faq")

exports.faq = (req,res)=>{

  let faq = new FAQ(req.body);
  
  faq.save((err,resp)=>{
    if(err){
        // console.log(err)
        return res.status(400).json({
            error:"faq cannot be saved"
        })
    }
     return res.json(resp)
  })
}