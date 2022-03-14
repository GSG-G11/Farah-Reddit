const { hasUserExist } = require("../database/quries")
const { comparePassword, JWTsignPromise } = require("../utils")
const { CustomedError } = require("../utils/CustomedError")
const { logInValidation } = require("../validation")




const logIn = (req, res,next) => {
    const { username, password } = req.body
    let id;
    logInValidation({ username, password })
        .then(() => hasUserExist(username))
        .then((data) => {
            if (!data.rows.length) {
               throw CustomedError(400, 'wrong user name or wrong password')
            }
            return data.rows[0]
        })
        .then((obj) => {
           
            id = obj.id;
            return comparePassword(password, obj.password)
        }
        )
        .then((result) => {
            console.log(result)
            if (!result) {
                console.log('the result',result)
                throw CustomedError(400, 'wrong user name or wrong password')
            }
        })
        .then(() => JWTsignPromise({ username, id }))
        .then((token) => res.cookie('token', token).json(token))
        ////if error in JWTsignPromise is sever error
        .catch((err) => {
            if (err.details) {
                   next(CustomedError(400, 'invalidInput'))
            }
           next(err)
        })
}
module.exports = { logIn }