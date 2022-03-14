
const Joi=require('joi')
const SignUpschema=Joi.object({
    email:Joi.string().email().required().trim(true),
    username:Joi.string().alphanum().min(3).max(200).required(),
    password:Joi.string().alphanum().min(8).required()
})
const sginUpValidation=(obj)=> SignUpschema.validateAsync(obj)

module.exports={sginUpValidation};

