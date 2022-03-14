const { hasUserExist } = require("../database/quries")
const { comparePassword, JWTsignPromise } = require("../utils")
const { CustomedError } = require("../utils/CustomedError")
const { logInValidation } = require("../validation")




const logIn = (req, res) => {
    const { username, password } = req.body
    logInValidation({ username, password })
        .then(() => hasUserExist(username))
        .then((data) => {
            if (!data.rows.length) {
                CustomedError(400, 'wrong user name or wrong password')
            }
            return data.rows[0]
        })
        .then((obj) => comparePassword(password, obj.password))
        .then((result) => {
            if (!result) {
                CustomedError(400, 'wrong user name or wrong password')
            }
        })
        .then(() => JWTsignPromise({ username, password }))
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
module.exports = { logIn }