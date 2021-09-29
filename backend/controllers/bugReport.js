
const bugReport  = require("../models/BugReport")

exports.bugReport = (req,res)=>{
    
    let bug = new bugReport(req.body);

    bug.save((err,bug)=>{
        if(err || !bug){
            return res.status(400).json({
                error:"unable to save"
            })
        }
        return res.json(bug);
    })
}