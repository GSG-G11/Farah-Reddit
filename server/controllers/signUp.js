
const { EmailhasToken, addUserQuery } = require("../database/quries");
const { sginUpValidation } = require("../validation");
const { CustomedError, hashingPassword, JWTsignPromise } = require('../utils')




const signUp = (req, res,next) => {

    const { username, password, email } = req.body;
    console.log({ username, password, email })
    sginUpValidation({ username, password, email })
        .then(() => EmailhasToken(email, username))
        .then((data) => {
            
            if (data.rows.length) {
                console.log(data.rows.length)
               throw CustomedError(400, 'invalidInput')
            }
        })
        //// if error in hashing password server error
        .then(() => hashingPassword(password))
        .then((hashPassword) => addUserQuery(hashPassword, username, email))
            ////if error in JWTsignPromise is sever error
        .then((userInfo) =>  JWTsignPromise({ username ,id:userInfo.rows[0].id}))
        .then((token) => res.cookie('token', token).json(token))
    
        .catch((err) => {
            
            if (err.details) {
                
              
                next(CustomedError(400, 'invalidInput'))            
            }
            next(err)
        })
}
module.exports = { signUp };