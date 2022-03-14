const Joi=require('joi')
const postschema=Joi.object({
    title:Joi.string().min(3).max(200).required(),
    content:Joi.string().required(),
    userId:Joi.number().integer().required(),
    img:Joi.string()
})
const postValidation=(obj)=>postschema.validateAsync(obj)
    
    

module.exports={postValidation};