const Joi=require('joi')
const loginSchema=Joi.object({
username:Joi.string().required().alphanum().min(3).max(200),
password:Joi.string().required().alphanum().min(8).max(200)
})

const logInValidation=(obj)=>loginSchema.validateAsync(obj)
module.exports={logInValidation};