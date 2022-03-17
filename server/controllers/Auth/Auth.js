const { jwtVerifyPromise, CustomedError } = require("../../utils")


const AUTH = (req, res, next) => {
    if (!req.cookies.token) {
        next(CustomedError(401, 'please log in'))
    }
    else {
        const token = req.cookies.token
        jwtVerifyPromise(token)
        .then((decoded) => {
            req.userInfo = decoded
            next()
        })
        .catch(() => next(CustomedError(401, 'please log in')))
    }
}
module.exports = { AUTH }