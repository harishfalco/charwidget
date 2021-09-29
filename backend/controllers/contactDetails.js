const ContactDetails= require("../models/contactDetails")

exports.contactDetails = (req,res)=>{

    let contact = new ContactDetails(req.body);

    contact.save((err,contact)=>{
        if(err || !contact){
            console.log(err);
            return res.status(400).json({
                error:"conact cannot be saved"
            })
        }
     return res.json(contact)
    })
}