const { sginUpValidation } = require("./signUpValidation");
const {CustomedError}=require('./CustomedError');
const { hashingPassword} = require("./hashingPassword");
const {JWTsignPromise} =require('./JWTsignPromise')
hashingPassword
module.exports={
    sginUpValidation,
    CustomedError,
    hashingPassword,
    JWTsignPromise
    }