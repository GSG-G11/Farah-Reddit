
const { EmailhasToken, addUserQuery } = require("../database/quries");
const { sginUpValidation } = require("../validation");
const { CustomedError, hashingPassword, JWTsignPromise } = require('../utils')




const signUp = (req, res) => {

    const { username, password, email } = req.body;
    sginUpValidation({ username, password, email })
        .then(() => EmailhasToken(email, username))
        .then((data) => {
            console.log(data.rows.length)
            if (data.rows.length) {
                CustomedError(400, 'invalidInput')
            }
        })
        //// if error in hashing password server error
        .then(() => hashingPassword(password))
        .then((hashPassword) => addUserQuery(hashPassword, username, email))
        .then((userInfo) =>  JWTsignPromise({ username ,id:userInfo.rows[0].id}))
        .then((token) => res.cookie('token', token).json(token))
        ////if error in JWTsignPromise is sever error
        .catch((err) => {
            if (err.details) {
                try {
                    CustomedError(400, 'invalidInput')
                }
                catch (e) {
                    res.json(JSON.parse(e.message).msg)
                }
            }
            res.json(JSON.parse(err.message).msg)
        })
}
module.exports = { signUp };