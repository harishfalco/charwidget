const Feedback = require("../models/feedback")

exports.feedback = (req,res)=>{

    const feedback = new Feedback(req.body);

    feedback.save((err,cate)=>{

            if(err || !cate){
                return res.status(400).json({
                    "error":"cannot save feedback"
                })
            }

            return res.json({cate})
    })
}