const FeatureReport = require("../models/featureReport")

exports.featureReport = (req,res)=>{

    let feature  = new FeatureReport(req.body)

    feature.save((err,feature)=>{
        if(err){
            console.log(err);
            return res.status(400).json({
                error:"error saving"
            })
        }
        return res.json(feature);
    })
}